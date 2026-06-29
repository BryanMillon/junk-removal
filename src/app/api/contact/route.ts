import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const maxRequests = 3;
  const timestamps = submissions.get(ip) ?? [];
  const recent = timestamps.filter(t => now - t < windowMs);
  if (recent.length >= maxRequests) return true;
  submissions.set(ip, [...recent, now]);
  return false;
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return Response.json(
        { ok: false, error: "Too many requests." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, street, city, postcode, phone, email, message, honeypot } = body;

    if (honeypot) return Response.json({ ok: true });

    if (!name || name.trim().length < 2)
      return Response.json({ ok: false, error: "Invalid name." }, { status: 400 });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return Response.json({ ok: false, error: "Invalid email." }, { status: 400 });
    if (!phone || phone.trim().length < 7)
      return Response.json({ ok: false, error: "Invalid phone." }, { status: 400 });
    if (!message || message.trim().length < 10)
      return Response.json({ ok: false, error: "Message too short." }, { status: 400 });

    const cleanName    = sanitize(name);
    const cleanEmail   = sanitize(email);
    const cleanPhone   = sanitize(phone);
    const cleanStreet  = sanitize(street ?? "");
    const cleanCity    = sanitize(city ?? "");
    const cleanPost    = sanitize(postcode ?? "");
    const cleanMessage = sanitize(message);

    // Correo al negocio
    await resend.emails.send({
      from: "Junk Removal LLC <noreply@junkremoval2hand.com>",
      to: process.env.BUSINESS_EMAIL!,
      subject: `New Contact Request from ${cleanName}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #E2E2EC; border-radius: 10px;">
          <h2 style="color: #044A81;">New Contact Request</h2>
          <p style="color: #8E959E; margin-top: 0;">Submitted via junkremoval2hand.com</p>
          <hr style="border: none; border-top: 1px solid #E2E2EC; margin: 24px 0;" />
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #0D1827; width: 140px;">Name:</td><td style="padding: 8px 0; color: #444;">${cleanName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #0D1827;">Email:</td><td style="padding: 8px 0; color: #444;">${cleanEmail}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #0D1827;">Phone:</td><td style="padding: 8px 0; color: #444;">${cleanPhone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #0D1827;">Address:</td><td style="padding: 8px 0; color: #444;">${cleanStreet}, ${cleanCity} ${cleanPost}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #0D1827; vertical-align: top;">Message:</td><td style="padding: 8px 0; color: #444;">${cleanMessage}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #E2E2EC; margin: 24px 0;" />
          <p style="color: #8E959E; font-size: 13px; text-align: center;">Junk Removal LLC · Atlanta, GA · (404) 409-8928</p>
        </div>
      `,
    });

    // Confirmación al cliente
    await resend.emails.send({
      from: "Junk Removal LLC <noreply@junkremoval2hand.com>",
      to: cleanEmail,
      subject: "We received your request!",
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #E2E2EC; border-radius: 10px;">
          <h2 style="color: #044A81;">Thank you, ${cleanName}!</h2>
          <p style="color: #444; line-height: 1.6;">We've received your junk removal request and will be getting back to you shortly with a free estimate.</p>
          <p style="color: #444; line-height: 1.6;">If you need immediate assistance, feel free to call us directly:</p>
          <a href="tel:+14044098928" style="display: inline-block; background: #1ABA55; color: white; padding: 12px 24px; border-radius: 8px; font-weight: bold; text-decoration: none; margin-top: 8px;">
            Call (404) 409-8928
          </a>
          <hr style="border: none; border-top: 1px solid #E2E2EC; margin: 24px 0;" />
          <p style="color: #8E959E; font-size: 13px; text-align: center;">Junk Removal LLC · Atlanta, GA</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false }, { status: 500 });
  }
}