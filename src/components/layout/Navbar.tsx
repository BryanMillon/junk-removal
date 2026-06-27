"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useState } from "react";

const links = [
  { label: "Services",     href: "#services"     },
  { label: "How It Works", href: "#how-it-works"  },
  { label: "Why Us",       href: "#why-us"        },
  { label: "Service Area", href: "#service-area"  },
];

const navLink = "text-center text-base font-bold font-sans leading-4 text-[#0D1827] dark:text-gray-300 hover:text-[#1ABA55] dark:hover:text-[#1ABA55] transition-colors";
const navLinkMobile = "block py-3 text-base font-bold font-sans text-[#0D1827] dark:text-gray-300 hover:text-[#1ABA55] dark:hover:text-[#1ABA55] border-b border-[#E2E2EC] dark:border-gray-700 last:border-0 transition-colors";
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-[#E2E2EC] dark:border-gray-700">

      {/* Desktop */}
      <div className="hidden md:inline-flex w-full px-20 py-2 justify-between items-center overflow-hidden">
        <Link href="/" className="text-2xl font-bold font-sans leading-8 text-[#044A81] dark:text-white">
          Junk Removal LLC
        </Link>
        <div className="flex items-center px-2 py-3.5 gap-12">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={navLink}>
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile header */}
      <div className="flex md:hidden items-center justify-between px-4 h-14">
        <Link href="/" className="text-xl font-bold font-sans text-[#044A81] dark:text-white">
          Junk Removal LLC
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-[#0D1827] dark:text-gray-300"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-[#E2E2EC] dark:border-gray-700 px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={navLinkMobile}>
              {l.label}
            </a>
          ))}
        </nav>
      )}

    </header>
  );
}