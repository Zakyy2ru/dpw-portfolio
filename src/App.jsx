import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#090E1A] text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Projects onSelectProject={setSelectedProject} />
        <Skills />
        <Achievements />
      </main>
      <ContactFooter />

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}