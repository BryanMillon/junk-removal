"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ServiceArea() {
  const [form, setForm] = useState({
    name: "", street: "", city: "", postcode: "",
    phone: "", email: "", message: "",
    honeypot: "", // campo trampa para bots
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFieldErrors({ ...fieldErrors, [e.target.name]: "" });
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!form.name || form.name.trim().length < 2)
      errors.name = "Please enter your name.";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = "Please enter a valid email.";
    if (!form.phone || form.phone.trim().length < 7)
      errors.phone = "Please enter a valid phone number.";
    if (!form.message || form.message.trim().length < 10)
      errors.message = "Message must be at least 10 characters.";
    return errors;
  };

  const handleSubmit = async () => {
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.status === 429) {
        setError("Too many requests. Please try again later.");
      } else if (data.ok) {
        setShowModal(true);
        setForm({ name: "", street: "", city: "", postcode: "", phone: "", email: "", message: "", honeypot: "" });
        setFieldErrors({});
      } else {
        setError("Something went wrong. Please try again or call us at (404) 409-8928.");
      }
    } catch {
      setError("Something went wrong. Please try again or call us at (404) 409-8928.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full text-base placeholder-[#8E959E] text-[#0D1827] dark:text-white font-sans bg-transparent border-b pb-2 transition-colors focus:outline-none ${
      fieldErrors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-zinc-300 focus:border-[#044A81]"
    }`;

  return (
    <>
      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 max-w-md w-full flex flex-col items-center gap-6 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#1ABA55]/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#1ABA55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-[#0D1827] dark:text-white font-sans">
                  Message Sent Successfully!
                </h3>
                <p className="text-base text-[#8E959E] font-sans leading-6">
                  Thank you for reaching out to Junk Removal LLC. We've received your request and will be getting back to you shortly.
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3 bg-[#1ABA55] hover:bg-green-600 rounded-[10px] text-white text-base font-bold font-sans transition-colors"
              >
                Got it!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="service-area" className="bg-white dark:bg-gray-900 py-16">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row gap-12 px-6 md:px-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 w-full md:w-[480px] shrink-0"
          >
            <h2 className="text-4xl font-bold leading-10 text-[#0D1827] dark:text-white font-sans uppercase">
              CONTACT US
            </h2>
            <p className="text-base font-normal leading-5 text-black dark:text-gray-300 font-sans max-w-xs">
              Need junk removed? Fill out the form below and we'll get back to you with a free estimate.
            </p>

            {/* Honeypot — invisible para humanos, visible para bots */}
            <input
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="flex flex-col gap-1">
              <div className="py-3">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Contact name"
                  className={inputClass("name")} />
                {fieldErrors.name && <p className="text-xs text-red-400 mt-1">{fieldErrors.name}</p>}
              </div>

              <div className="py-3">
                <input name="street" value={form.street} onChange={handleChange} placeholder="Street"
                  className={inputClass("street")} />
              </div>

              <div className="flex gap-6 py-3">
                <div className="flex-1">
                  <input name="city" value={form.city} onChange={handleChange} placeholder="City"
                    className={inputClass("city")} />
                </div>
                <div className="w-36">
                  <input name="postcode" value={form.postcode} onChange={handleChange} placeholder="Postcode"
                    className={inputClass("postcode")} />
                </div>
              </div>

              <div className="py-3">
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Contact Phone"
                  className={inputClass("phone")} />
                {fieldErrors.phone && <p className="text-xs text-red-400 mt-1">{fieldErrors.phone}</p>}
              </div>

              <div className="py-3">
                <input name="email" value={form.email} onChange={handleChange} placeholder="E-mail"
                  className={inputClass("email")} />
                {fieldErrors.email && <p className="text-xs text-red-400 mt-1">{fieldErrors.email}</p>}
              </div>

              <div className="py-3">
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Type your message..." rows={2}
                  className={inputClass("message")} />
                {fieldErrors.message && <p className="text-xs text-red-400 mt-1">{fieldErrors.message}</p>}
              </div>

              {error && (
                <p className="text-sm text-red-500 font-sans text-center">{error}</p>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-4 bg-[#1ABA55] hover:bg-green-600 disabled:opacity-60 rounded-[10px] flex justify-center items-center transition-colors mt-3"
              >
                <span className="text-white text-base font-bold leading-4 font-sans">
                  {loading ? "Sending..." : "Submit"}
                </span>
              </button>
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-4"
          >
            <h2 className="text-4xl font-bold leading-10 text-[#0D1827] dark:text-white font-sans uppercase">
              SERVICE AREA
            </h2>
            <a href="https://www.google.com/maps/place/Atlanta,+GA" target="_blank" rel="noopener noreferrer"
              className="w-52 px-5 py-3 bg-[#1ABA55] hover:bg-green-600 rounded-[5px] inline-flex justify-center items-center transition-colors">
              <span className="text-white text-2xl font-bold leading-9 font-sans whitespace-nowrap">Atlanta, GA</span>
            </a>
            <div className="flex-1 min-h-[500px] rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="Junk Removal LLC Service Area Atlanta GA"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d350000!2d-84.45!3d33.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}