import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X,
} from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = project?.images?.length
    ? project.images
    : project?.image
    ? [project.image]
    : [];

  useEffect(() => {
    setCurrentSlide(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (images.length > 1) {
        if (e.key === "ArrowLeft") {
          setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        } else if (e.key === "ArrowRight") {
          setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, images.length]);

  if (!project) return null;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-800 bg-[#0D1424] p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 transition hover:border-slate-700 hover:text-white"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Category & Title */}
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
          {project.category}
        </span>
        <h3 className="mt-1.5 pr-10 text-2xl font-bold text-white sm:text-3xl">
          {project.title}
        </h3>

        {/* Large Screenshot Carousel */}
        <div className="relative mt-5 overflow-hidden rounded-xl border border-slate-800 bg-[#090E1A]">
          <img
            src={images[currentSlide]}
            alt={`${project.title} preview ${currentSlide + 1}`}
            className={`max-h-80 w-full object-contain ${
              project.invertImage ? "invert hue-rotate-180" : ""
            }`}
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-700 bg-[#090E1A]/90 p-2 text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-700 bg-[#090E1A]/90 p-2 text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <span className="absolute bottom-3 right-3 rounded-md border border-slate-800 bg-[#090E1A]/90 px-2.5 py-1 font-mono text-[11px] text-slate-300">
                {currentSlide + 1} / {images.length}
              </span>
            </>
          )}
        </div>

        {/* Clickable Thumbnail Strip */}
        {images.length > 1 && (
          <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`h-14 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  currentSlide === idx
                    ? "border-sky-400 opacity-100"
                    : "border-slate-800 opacity-50 hover:opacity-85"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`h-full w-full object-cover object-top ${
                    project.invertImage ? "invert hue-rotate-180" : ""
                  }`}
                />
              </button>
            ))}
          </div>
        )}

        {/* Metrics Row */}
        {project.metrics && (
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-slate-800/80 bg-[#090E1A] p-3.5"
              >
                <p className="font-mono text-[11px] uppercase text-slate-500">
                  {metric.label}
                </p>
                <p className="mt-1 text-sm font-bold text-sky-400">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Full Overview */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Project Overview
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {project.fullDesc}
          </p>
        </div>

        {/* Technical Highlights */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Key Contributions & Architecture
          </h4>
          <ul className="mt-3 space-y-2.5">
            {project.highlights.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-5">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 font-mono text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:border-slate-500"
            >
              <Github className="h-4 w-4" />
              <span>Source Code</span>
            </a>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}