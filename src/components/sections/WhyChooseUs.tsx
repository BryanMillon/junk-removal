"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Free Estimates",
    desc: "Get a free, upfront estimate before any work begins.",
  },
  {
    title: "Fast & Reliable",
    desc: "Quick response and dependable service.",
  },
  {
    title: "Available 24/7",
    desc: "Here when you need us, day or night.",
  },
  {
    title: "Friendly Team",
    desc: "Professional service with a customer-first approach.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 md:gap-0">

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-[684px] md:h-[455px] shrink-0 relative h-64 overflow-hidden rounded-[5px]"
        >
          <Image
            src="/images/team.png"
            alt="Junk Removal LLC team working in Atlanta"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Contenido derecho */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 w-full md:pl-16"
        >
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold leading-10 text-[#0D1827] dark:text-white font-sans uppercase text-center md:text-left">
            WHY CHOOSE US
          </h2>

          {/* Grid de razones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
            {reasons.map((r) => (
              <div key={r.title} className="flex flex-col gap-1">
                {/* Título con check */}
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <Image
                      src="/icons/Check.png"
                      alt="check"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base font-bold leading-5 text-[#0D1827] dark:text-white font-sans">
                    {r.title}
                  </p>
                </div>
                {/* Descripción */}
                <p className="text-base font-normal leading-5 text-[#0D1827] dark:text-gray-300 font-sans text-center md:text-left pl-14">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}