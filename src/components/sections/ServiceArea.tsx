"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-[#E2E2EC] dark:bg-gray-800 py-12 md:py-0 md:h-64">
      <div className="max-w-[1440px] mx-auto px-6 md:pl-40 md:pr-0 h-full flex flex-col md:flex-row items-center gap-10 md:gap-36">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 w-full md:w-96 shrink-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-10 text-[#0D1827] dark:text-white font-sans uppercase">
            SERVICE AREA
          </h2>

          <a
            href="https://www.google.com/maps/place/Atlanta,+GA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-52 px-5 py-3 bg-[#1ABA55] hover:bg-green-600 rounded-[5px] outline outline-1 outline-[#1ABA55] inline-flex justify-center items-center gap-2.5 overflow-hidden transition-colors"
          >
            <span className="text-white text-2xl md:text-3xl font-bold leading-9 font-sans whitespace-nowrap">
              Atlanta, GA
            </span>
          </a>

          <p className="text-base md:text-xl font-medium leading-6 text-[#0D1827] dark:text-gray-300 font-sans">
            Serving homeowners and businesses across Atlanta with fast,
            professional junk removal services.
          </p>
        </motion.div>

        {/* Mapa imagen */}
        <motion.a
          href="https://www.google.com/maps/place/Atlanta,+GA"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-[767px] md:h-64 h-48 shrink-0 relative overflow-hidden block"
        >
          <Image
            src="/images/Atlanta-Map.png"
            alt="Service area map Atlanta GA"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.a>

      </div>
    </section>
  );
}