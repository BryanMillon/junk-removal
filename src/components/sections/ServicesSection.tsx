"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    icon: "/icons/furniture.png",
    title: "Furniture",
    items: ["Sofas", "Mattresses", "Tables", "Chairs", "And more"],
  },
  {
    icon: "/icons/household.png",
    title: "Household",
    items: ["General trash", "Garbage bags", "Hoarding cleanouts", "Solid waste", "And more"],
  },
  {
    icon: "/icons/appliances.png",
    title: "Appliances",
    items: ["Refrigerators", "Washers", "Dryers", "Freezers", "And More"],
  },
  {
    icon: "/icons/recycling.png",
    title: "Recycling",
    items: ["Scrap Metal", "Electronics", "E-Waste", "Cables & Wiring", "And More"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 flex flex-col items-center gap-8">

        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center max-w-[924px]">
          <h2 className="text-3xl md:text-4xl font-bold leading-10 text-[#0D1827] dark:text-white font-sans uppercase">
            WHAT WE REMOVE
          </h2>
          <p className="text-base md:text-xl font-medium leading-6 text-[#0D1827] dark:text-gray-300 font-sans">
            We provide junk removal services for residential and commercial customers.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 px-4 pt-6 pb-8 rounded-[5px] outline outline-1 outline-[#D1D5DB] dark:outline-gray-600 dark:bg-gray-800 w-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:outline-[#8E959E] hover:-translate-y-1 dark:hover:shadow-xl dark:hover:outline-gray-400 dark:hover:bg-gray-700"
            >
              {/* Ícono */}
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Título */}
              <h3 className="text-2xl font-bold leading-8 text-[#0D1827] dark:text-white font-sans text-center">
                {s.title}
              </h3>

              {/* Items */}
              <ul className="text-center text-base font-normal text-[#0D1827] dark:text-gray-300 font-sans space-y-1">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}