"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="bg-slate-100 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[612px] shrink-0 flex flex-col gap-6 px-6 py-12 md:pl-20 md:py-0 md:justify-center md:min-h-[576px]"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              {/* Atlanta, GA */}
              <p className="text-xl font-medium leading-5 tracking-tight text-[#1ABA55]">
                Atlanta, GA
              </p>
              {/* Título bicolor */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-[55px] font-sans">
                <span className="text-[#0D1827] dark:text-white">JUNK REMOVAL </span>
                <span className="text-[#044A81]">MADE EASY</span>
              </h1>
            </div>
            {/* Subtítulo */}
            <p className="text-base md:text-xl font-medium leading-6 text-[#0D1827] dark:text-gray-300 font-sans">
              We provide fast, reliable junk removal for homes and businesses.
              Free upfront estimates available 24/7.
            </p>
          </div>

          {/* CTA */}
          <a
            href="tel:+14044098928"
            className="px-5 py-3 bg-[#1ABA55] hover:bg-green-600 rounded-[5px] inline-flex justify-center items-center gap-2.5 transition-colors w-full md:w-fit"
          >
            <span className="text-white text-xl md:text-2xl font-bold leading-8 font-sans whitespace-nowrap">
              Call (404) 409-8928
            </span>
          </a>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-[750px] md:min-h-[576px] shrink-0 relative h-64 md:h-auto"
        >
          <Image
            src="/images/hero-truck.png"
            alt="Junk Removal LLC truck in Atlanta GA"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}