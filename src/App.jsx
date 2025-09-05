import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function SmoothLink({ href, children }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="hover:text-blue-500 transition"
    >
      {children}
    </a>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);

  const skills = useMemo(
    () => [
      { name: "Java", pct: 85 },
      { name: "Python", pct: 80 },
      { name: "JavaScript", pct: 78 },
      { name: "React", pct: 75 },
      { name: "Node.js", pct: 70 },
      { name: "SQL / MySQL", pct: 72 },
      { name: "MongoDB", pct: 65 },
      { name: "Machine Learning", pct: 60 },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        title: "Tour & Travel Website",
        tech: "HTML, CSS, JS, PHP, MySQL",
        desc: "Dynamic booking system with admin panel and user auth.",
      },
      {
        title: "Serverless Site",
        tech: "Firebase Hosting, Firestore",
        desc: "Responsive static site with dynamic form submissions.",
      },
      {
        title: "Netflix Clone",
        tech: "React, Firebase",
        desc: "Frontend clone showcasing UI & auth flows.",
      },
    ],
    []
  );

  const achievements = useMemo(
    () => [
      {
        title: "Google Cloud Career Practitioner",
        desc: "Completed Google Cloud program with hands-on labs and projects.",
        year: "2024",
      },
      {
        title: "AWS Academy Graduate",
        desc: "Achieved AWS Academy Cloud Foundations certification.",
        year: "2024",
      },
      {
        title: "CCNA Introduction to Networks",
        desc: "Cisco Networking Academy certification in networking basics.",
        year: "2023",
      },
      {
        title: "Oracle GenAI Study Jams",
        desc: "Earned 16650 points in Generative AI Study Jams program.",
        year: "2024",
      },
    ],
    []
  );

  useEffect(() => {
    document.title = "Abhishek Sharma — Portfolio";
  }, []);

  return (
    <div className={`min-h-screen ${dark ? "dark" : ""}`}>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-slate-900 text-slate-900 dark:text-slate-100">
        
        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/40 border-b">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <h1 className="text-lg font-bold">Abhishek Sharma</h1>
            <nav className="hidden md:flex gap-6 text-sm">
              <SmoothLink href="#about">About</SmoothLink>
              <SmoothLink href="#skills">Skills</SmoothLink>
              <SmoothLink href="#projects">Projects</SmoothLink>
              <SmoothLink href="#achievements">Achievements</SmoothLink>
              <SmoothLink href="#education">Education</SmoothLink>
              <SmoothLink href="#contact">Contact</SmoothLink>
              <button
                onClick={() => setDark(!dark)}
                className="px-3 py-1 border rounded-full text-xs"
              >
                {dark ? "☀️ Light" : "🌙 Dark"}
              </button>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6">

          {/* Hero Section */}
          <section
            id="about"
            className="flex flex-col items-center text-center py-20 px-4"
          >
            <motion.img
              src="/profile.jpg"
              alt="Abhishek Sharma"
              className="w-40 h-40 rounded-full object-cover shadow-lg mb-6 border-4 border-indigo-500"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Aspiring Software & Data Engineer
            </motion.h2>

            <p className="max-w-2xl text-gray-600 dark:text-gray-300">
              Detail-oriented and tech-savvy Computer Science student passionate
              about solving real-world problems using software and data.
            </p>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16">
            <h3 className="text-3xl font-semibold mb-8 text-center">Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1">
                    <span>{s.name}</span>
                    <span>{s.pct}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <motion.div
                      className="h-3 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${s.pct}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16">
            <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((p) => (
                <motion.div
                  key={p.title}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow"
                >
                  <h4 className="text-lg font-bold">{p.title}</h4>
                  <p className="text-sm text-gray-500">{p.tech}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="py-16">
            <h3 className="text-3xl font-semibold mb-8 text-center">
              Achievements & Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((a) => (
                <motion.div
                  key={a.title}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow"
                >
                  <h4 className="font-bold">{a.title}</h4>
                  <p className="text-sm text-gray-500">{a.year}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-16">
            <h3 className="text-3xl font-semibold mb-8 text-center">
              Education & Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow">
                <h4 className="font-bold">B.Tech — Computer Science</h4>
                <p className="text-sm text-gray-500">
                  Noida Institute of Engineering & Technology (2022 – 2026)
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow">
                <h4 className="font-bold">Internship — Oasis Info</h4>
                <p className="text-sm text-gray-500">
                  Contributed to software development and testing tasks.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 text-center">
            <h3 className="text-3xl font-semibold mb-8">Contact</h3>
            <p>📧 Email: nabban6399@gmail.com</p>
            <p>
              🔗 LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/abhishek-sharma-99789b286"
                className="text-blue-500"
              >
                linkedin.com/in/abhishek-sharma-99789b286
              </a>
            </p>
            <p>
              💻 GitHub:{" "}
              <a href="https://github.com" className="text-blue-500">
                github.com
              </a>
            </p>
          </section>

          <footer className="py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Abhishek Sharma — Built with React &
            Tailwind
          </footer>
        </main>
      </div>
    </div>
  );
}


