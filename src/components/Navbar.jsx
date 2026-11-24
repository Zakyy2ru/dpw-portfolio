import { useState } from "react";
import { Download, IdCard, Menu, X } from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/70 bg-[#090E1A]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand Identity */}
        <a
          href="#about"
          className="group inline-flex items-center gap-2.5 text-white transition"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400 transition group-hover:border-sky-400/60 group-hover:bg-sky-500/20">
            <IdCard className="h-4 w-4" />
          </span>
          <span className="text-sm font-bold tracking-tight sm:text-base">
            Dzaky Putra Wahyudi
          </span>
        </a>

        

        {/* Desktop Nav & CTA */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-7 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={profileData.cvFile}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-sky-500/60 hover:bg-slate-800 hover:text-white"
          >
            <span>Download CV</span>
            <Download className="h-3.5 w-3.5 text-sky-400" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-slate-800 p-2 text-slate-300 hover:bg-slate-800 md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="border-t border-slate-800/80 bg-[#0D1424] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 transition hover:text-sky-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profileData.cvFile}
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white"
            >
              <span>Download CV</span>
              <Download className="h-3.5 w-3.5 text-sky-400" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}