import { useState, useRef, useEffect } from "react";
import { ChevronDown, Download, FileText, IdCard, Menu, X } from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);
  const [mobileCvOpen, setMobileCvOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
  ];

  const cvOptions = [
    {
      label: "English Version",
      sublabel: "PDF",
      href: profileData.cvFiles?.en || profileData.cvFile,
      fileName: "CV_Dzaky_Putra_Wahyudi_EN.pdf",
    },
    {
      label: "Bahasa Indonesia",
      sublabel: "PDF",
      href: profileData.cvFiles?.id || profileData.cvFile,
      fileName: "CV_Dzaky_Putra_Wahyudi_ID.pdf",
    },
  ];

  // Tutup dropdown desktop jika klik di luar atau tekan Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCvDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setCvDropdownOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

          {/* Desktop Download CV Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setCvDropdownOpen((prev) => !prev)}
              aria-expanded={cvDropdownOpen}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-sky-500/60 hover:bg-slate-800 hover:text-white"
            >
              <Download className="h-3.5 w-3.5 text-sky-400" />
              <span>Download CV</span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                  cvDropdownOpen ? "rotate-180 text-sky-400" : ""
                }`}
              />
            </button>

            {cvDropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 origin-top-right overflow-hidden rounded-xl border border-slate-800 bg-[#0D1424] p-1.5 shadow-xl shadow-black/40">
                {cvOptions.map((cv) => (
                  <a
                    key={cv.fileName}
                    href={cv.href}
                    download={cv.fileName}
                    onClick={() => setCvDropdownOpen(false)}
                    className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition hover:bg-slate-800/80"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-sky-500/20 bg-sky-500/10 text-sky-400 group-hover:border-sky-400/40 group-hover:bg-sky-500/20">
                      <FileText className="h-3.5 w-3.5" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                        {cv.label}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {cv.sublabel}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => {
            setMobileOpen(!mobileOpen);
            if (mobileOpen) setMobileCvOpen(false);
          }}
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

            {/* Mobile Download CV Accordion */}
            <div className="mt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setMobileCvOpen((prev) => !prev)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-sky-500/60"
              >
                <Download className="h-3.5 w-3.5 text-sky-400" />
                <span>Download CV</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                    mobileCvOpen ? "rotate-180 text-sky-400" : ""
                  }`}
                />
              </button>

              {mobileCvOpen && (
                <div className="flex flex-col gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 p-2">
                  {cvOptions.map((cv) => (
                    <a
                      key={cv.fileName}
                      href={cv.href}
                      download={cv.fileName}
                      onClick={() => {
                        setMobileCvOpen(false);
                        setMobileOpen(false);
                      }}
                      className="flex items-center justify-between rounded-md px-3 py-2 text-xs text-slate-200 transition hover:bg-slate-800 hover:text-white"
                    >
                      <span className="font-medium">{cv.label}</span>
                      <span className="text-[11px] text-sky-400">PDF</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}