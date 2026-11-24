import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import { profileData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-slate-800/60">
      {/* Subtle top radial glow */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-6 md:pt-24">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-12">
          {/* Left Column Wrapper */}
          <div className="lg:col-span-7">
            {/* Top Row on Mobile: Headline (Left) + Compact Photo (Right) */}
            <div className="flex items-center justify-between gap-4 lg:block">
              <div className="min-w-0 flex-1">
                {/* Status Pill */}
                <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 sm:mb-6 sm:gap-2 sm:px-3.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] font-semibold tracking-wider text-emerald-300 sm:text-[11px]">
                    {profileData.status}
                  </span>
                </div>

                {/* Name Eyebrow */}
                <p className="mb-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                  {profileData.name}
                </p>

                {/* Main Headline */}
                <h1 className="text-[26px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[54px] lg:leading-[1.12]">
                  {profileData.headlineTop}
                  <span className="block text-sky-400">{profileData.headlineAccent}</span>
                </h1>
              </div>

              {/* Mobile-Only Side Photo (Right) */}
              <div className="w-[125px] shrink-0 sm:w-[175px] lg:hidden">
                <div className="relative overflow-hidden rounded-xl border border-slate-800/90 bg-[#0D1424] p-1.5 shadow-xl shadow-black/60">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src={profileData.avatar}
                      alt={profileData.name}
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#090E1A]/95 via-[#090E1A]/40 to-transparent" />
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-center rounded border border-slate-700/60 bg-[#090E1A]/85 px-1.5 py-0.5 backdrop-blur-md">
                      <span className="font-mono text-[9px] font-semibold text-emerald-400">
                        • Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtitle Role */}
            <p className="mt-5 text-base font-semibold text-slate-200 sm:text-lg">
              {profileData.role}
            </p>

            {/* Bio */}
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              {profileData.bio}
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:mt-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800 hover:text-white"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-5 text-xs font-medium text-slate-400">
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Desktop-Only Right Column: Full Profile Photo Card */}
          <div className="hidden justify-center lg:col-span-5 lg:flex lg:justify-end">
            <div className="relative w-full max-w-[340px]">
              {/* Decorative Ambient Glow */}
              <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-indigo-500/10 to-transparent blur-2xl" />

              {/* Photo Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0D1424] p-2.5 shadow-2xl shadow-black/60">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="h-full w-full object-cover object-top transition duration-500 hover:scale-[1.03]"
                  />
                  {/* Subtle bottom gradient for clean contrast */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#090E1A]/90 via-[#090E1A]/30 to-transparent" />

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg border border-slate-700/60 bg-[#090E1A]/85 px-3 py-2 backdrop-blur-md">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
                      <MapPin className="h-3.5 w-3.5 text-sky-400" />
                      <span>Indonesia</span>
                    </div>
                    <span className="font-mono text-[10px] font-semibold text-emerald-400">
                      • Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 Pillars Bar */}
        <div className="mt-14 grid grid-cols-2 gap-4 border-t border-slate-800/70 pt-8 sm:mt-16 sm:grid-cols-4">
          {profileData.pillars.map((pillar) => (
            <div key={pillar} className="text-xs font-medium text-slate-400">
              {pillar}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}