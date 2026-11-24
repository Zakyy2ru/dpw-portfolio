import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function ContactFooter() {
  return (
    <footer id="contact" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          {/* Left Copy */}
          <div className="max-w-xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
              04 / LET'S CONNECT
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Have an idea? <br />
              Let&apos;s build it right.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              A thoughtful conversation is where great projects begin.
            </p>
          </div>

          {/* Right Actions: Email, WhatsApp, LinkedIn */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Primary Email Button */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profileData.email}&su=Diskusi%20Peluang%20Kerja%20/%20Proyek%20`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              <Mail className="h-4 w-4" />
              <span>Email Me</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={profileData.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-[#0D1424] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/50 hover:text-emerald-400"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>

            {/* LinkedIn Button */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-[#0D1424] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-500/50 hover:text-sky-400"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

       {/* Bottom Copyright & Social Links */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Dzaky Putra Wahyudi. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-slate-300"
            >
              GitHub ↗
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-slate-300"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}