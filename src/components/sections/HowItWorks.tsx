"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    icon: "/icons/phone.png",
    title: "Request a Free Estimate",
    desc: "Call us and request your free estimate. We'll provide an upfront quote with no hidden fees.",
  },
  {
    icon: "/icons/truck.png",
    title: "We Arrive",
    desc: "Our professional team arrives on time and takes care of all the heavy lifting.",
  },
  {
    icon: "/icons/thumbsup.png",
    title: "Junk Gone Today",
    desc: "We remove your unwanted items quickly and leave your space clean and clutter-free.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-[#E2E2EC] dark:bg-gray-800">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex flex-col items-center gap-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-10 text-[#0D1827] dark:text-white font-sans uppercase">
            HOW IT WORKS
          </h2>
          <p className="text-base md:text-xl font-medium leading-6 text-[#0D1827] dark:text-gray-300 font-sans">
            Three simple steps to a clutter-free space.
          </p>
        </div>

        {/* Steps */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col md:flex-row items-center w-full md:w-auto">

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center gap-4 w-72"
              >
                <div className="w-28 h-28 rounded-full bg-[#2D2E4C] dark:bg-gray-700 flex items-center justify-center shrink-0">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={125}
                    height={125}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold leading-8 text-[#0D1827] dark:text-white font-sans text-center">
                  {step.title}
                </h3>
                <p className="text-base font-normal leading-5 text-[#0D1827] dark:text-gray-300 font-sans text-center w-72">
                  {step.desc}
                </p>
              </motion.div>

              {/* Flecha */}
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center md:w-32 shrink-0 my-2 md:my-0 md:mb-24">
                  <Image
                    src="/icons/arrow.png"
                    alt="next step"
                    width={150}
                    height={75}
                    className="object-contain rotate-90 md:rotate-0"
                  />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}