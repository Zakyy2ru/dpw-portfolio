import { Award, BookOpen, ExternalLink, ShieldCheck, Trophy } from "lucide-react";
import { achievementsData } from "../data/portfolioData";

const badgeIcons = [Award, ShieldCheck, BookOpen, Trophy];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="border-b border-slate-800/60 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
              03 / BEYOND THE CODE
            </p>
            <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Achievements & Leadership
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Progress is more than what you ship — it's what you learn, share, and lead.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-slate-500">
              • VERIFIED MILESTONES
            </p>
          </div>

          {/* Right Column: Vertical Timeline */}
          <div className="space-y-8 lg:col-span-7">
            {achievementsData.map((item, index) => {
              const Icon = badgeIcons[index % badgeIcons.length];
              return (
                <div
                  key={item.title}
                  className="relative flex gap-5 border-b border-slate-800/70 pb-8 last:border-none last:pb-0"
                >
                  {/* Timeline Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-[#0D1424] text-sky-400">
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-sky-400">
                        {item.category}
                      </span>
                      <span className="font-mono text-xs text-slate-500">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="mt-1 text-base font-bold text-white sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400">
                      {item.organization}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>

                    {/* Credential ID & Certificate Link */}
                    {(item.credentialId || item.credentialUrl) && (
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        {item.credentialId && (
                          <span className="rounded border border-slate-800 bg-[#0D1424] px-2.5 py-1 font-mono text-[11px] text-slate-400">
                            {item.credentialId}
                          </span>
                        )}
                        {item.credentialUrl && (
                          <a
                            href={item.credentialUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-sky-400 transition hover:text-sky-300"
                          >
                            <span>{item.credentialLabel || "View Certificate"}</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}