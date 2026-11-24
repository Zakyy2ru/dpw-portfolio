import { Code2, Database, GitBranch, Terminal } from "lucide-react";
import { skillsData } from "../data/portfolioData";

const iconMap = {
  Terminal: Terminal,
  Code2: Code2,
  Database: Database,
  GitBranch: GitBranch,
};

export default function Skills() {
  return (
    <section id="skills" className="border-b border-slate-800/60 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
            02 / MY TOOLKIT
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            The right tools, backed by a strong understanding of how systems fit together.
          </p>
        </div>

        {/* 4 Columns Skill Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((group) => {
            const IconComponent = iconMap[group.icon] || Terminal;
            return (
              <div
                key={group.category}
                className="rounded-2xl border border-slate-800/80 bg-[#0D1424] p-6 transition hover:border-slate-700"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/20 bg-sky-500/10 text-sky-400">
                  <IconComponent className="h-4 w-4" />
                </div>

                <h3 className="text-base font-bold text-white">
                  {group.category}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-800 bg-[#090E1A] px-2.5 py-1 font-mono text-[11px] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}