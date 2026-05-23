import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MobileDrawer from "./components/MobileDrawer";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import AIChatbot from "./components/AIChatbot"; // ⭐ chatbot

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const sections = ["home", "about", "experience", "projects", "contact"];

  // Smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    setMenuOpen(false);
  };

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      
      {/* NAVBAR */}
      <Navbar
        openMenu={() => setMenuOpen(true)}
        scrollToSection={scrollToSection}
        active={active}
      />

      {/* MOBILE MENU */}
      <MobileDrawer
        menuOpen={menuOpen}
        closeMenu={() => setMenuOpen(false)}
        scrollToSection={scrollToSection}
        active={active}
      />

      {/* WEBSITE SECTIONS */}
      <section id="home">
        <Home scrollToSection={scrollToSection} />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />

      {/* 🤖 GLOBAL AI CHATBOT (VISIBLE ON ALL PAGES) */}
      <AIChatbot />

    </div>
  );
}