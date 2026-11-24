import { useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";
import { projectsData } from "../data/portfolioData";

function ProjectCard({ project, onSelectProject }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = project.images?.length ? project.images : [project.image];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <article
      onClick={() => onSelectProject(project)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0D1424] transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-950/20"
    >
      {/* Top Preview Window */}
      <div className="relative h-56 w-full overflow-hidden border-b border-slate-800/80 bg-[#0A101D] p-4 sm:h-60">
        <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-slate-800/90 bg-[#0F172A] shadow-inner">
          {/* Mini Browser Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#0B111E] px-3 py-1.5">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-slate-700" />
              <span className="h-2 w-2 rounded-full bg-slate-700" />
              <span className="h-2 w-2 rounded-full bg-slate-700" />
            </div>
            <span className="font-mono text-[10px] text-slate-500">
              {project.id}
            </span>
            {images.length > 1 && (
              <span className="font-mono text-[10px] text-sky-400">
                {currentSlide + 1}/{images.length}
              </span>
            )}
          </div>

          {/* Screenshot Image Carousel */}
          <div className="relative flex-1 overflow-hidden bg-slate-900">
            <img
              src={images[currentSlide]}
              alt={`${project.title} screenshot ${currentSlide + 1}`}
              className={`h-full w-full object-cover object-top transition duration-500 ${
                project.invertImage ? "invert hue-rotate-180 opacity-90" : ""
              }`}
            />

            {/* Left / Right Slide Controls */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous screenshot"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-700/80 bg-[#090E1A]/85 p-1.5 text-slate-200 opacity-0 backdrop-blur-sm transition hover:border-sky-400 hover:text-sky-400 group-hover:opacity-100"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next screenshot"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-700/80 bg-[#090E1A]/85 p-1.5 text-slate-200 opacity-0 backdrop-blur-sm transition hover:border-sky-400 hover:text-sky-400 group-hover:opacity-100"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Bottom Dot Indicators */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#090E1A]/80 px-2.5 py-1 backdrop-blur-sm"
                >
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        currentSlide === idx
                          ? "w-4 bg-sky-400"
                          : "w-1.5 bg-slate-500 hover:bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-sky-400">
              {project.category}
            </span>
            <span className="font-mono text-xs text-slate-600">
              {project.number}
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-white transition group-hover:text-sky-400">
              {project.title}
            </h3>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-400" />
          </div>

          <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
            {project.shortDesc}
          </p>
        </div>

        {/* Tech Badges & Action Links */}
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-800 bg-slate-900/90 px-2.5 py-1 font-mono text-[11px] text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            className="mt-5 flex items-center justify-between border-t border-slate-800/70 pt-4 text-xs font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-white"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="text-slate-300 transition hover:text-sky-400"
              >
                Case Study
              </button>

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sky-400 transition hover:text-sky-300"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="border-b border-slate-800/60 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
              01 / SELECTED WORK
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              From system architecture to functional interfaces — built with the bigger picture in mind.
            </p>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
            4 PROJECTS • CASE STUDIES
          </span>
        </div>

        {/* 2x2 Project Cards Grid */}
        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}