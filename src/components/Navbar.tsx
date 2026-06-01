"use client";

import { useState, useEffect } from "react";
import { Menu, X, Trees } from "lucide-react";

const baseLinks = [
  { label: "Itinerary", href: "#itinerary" },
  { label: "Getting Around", href: "#getting-around" },
  { label: "Lodging", href: "#lodging" },
  { label: "Packing", href: "#packing" },
  { label: "Crew", href: "#crew" },
  { label: "Photos", href: "#photos" },
  { label: "Contacts", href: "#contacts" },
];

const crewOnlyLinks = [
  { label: "Costs", href: "/costs" },
];

interface NavbarProps {
  isCrew?: boolean;
}

export default function Navbar({ isCrew = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = isCrew ? [...baseLinks, ...crewOnlyLinks] : baseLinks;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-pine-800/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a
          href="#"
          className="flex items-center gap-2 text-cream font-[family-name:var(--font-playfair)] font-bold text-lg"
        >
          <Trees className="w-5 h-5 text-amber-400" />
          RRR
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/80 hover:text-amber-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden bg-pine-800/98 backdrop-blur-md border-t border-pine-700">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-cream/80 hover:text-amber-400 py-3 px-4 rounded-lg hover:bg-pine-700/50 text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
