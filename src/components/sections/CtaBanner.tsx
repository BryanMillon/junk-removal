"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo: Atlanta city */}
      <Image
        src="/images/atlanta-city.webp"
        alt="Atlanta city skyline"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay azul */}
      <div className="absolute inset-0 bg-sky-800/90" />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 py-8 md:py-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4"
      >
        {/* Ícono + textos */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 text-center md:text-left">

          {/* Ícono camión */}
          <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shrink-0">
            <Image
              src="/icons/truck2.png"
              alt="Truck icon"
              width={125}
              height={125}
              className="object-contain"
            />
          </div>

          {/* Título + subtítulo */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight md:leading-10 font-sans">
              Ready to Clear the Clutter?
            </h2>
            <p className="text-white/80 text-base md:text-xl font-medium leading-6 font-sans">
              Get your free estimate today.
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="tel:+14044098928"
          className="px-5 py-3 bg-[#1ABA55] hover:bg-green-600 rounded-[5px] inline-flex justify-center items-center gap-2.5 transition-colors w-full md:w-auto md:ml-8 shrink-0"
        >
          <span className="text-white text-xl md:text-2xl font-bold leading-8 font-sans whitespace-nowrap">
            Call (404) 409-8928
          </span>
        </a>

      </motion.div>
    </section>
  );
}