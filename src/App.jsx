import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

/**
 * Interactive Gemini-style portfolio (no external icon libs, no image imports)
 * - Works with Tailwind + Framer Motion only
 * - Smooth scroll via anchor links
 * - Typewriter-like headline, animated skill bars, hover project cards
 */

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

function AnimatedHeadline({ words = ["Software", "Data", "Cloud"] }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  useEffect(() => {
    let timeout;
    const word = words[idx % words.length];
    // type effect
    let i = 0;
    function type() {
      setSub(word.slice(0, i));
      i++;
      if (i <= word.length) timeout = setTimeout(type, 80);
      else timeout = setTimeout(() => {
        // pause, then delete
        let j = word.length;
        function del() {
          setSub(word.slice(0, j));
          j--;
          if (j >= 0) setTimeout(del, 50);
          else {
            setIdx((s) => s + 1);
          }
        }
        del();
      }, 800);
    }
    type();
    return () => clearTimeout(timeout);
  }, [idx, words]);
  return (
    <span className="text-blue-600 dark:text-blue-400">
      {sub}
      <span className="inline-block w-1 h-6 align-middle bg-current ml-1 animate-pulse" />
    </span>
  );
}

export default function App() {
  const skills = useMemo(
    () => [
      { name: "Java", pct: 85 },
      { name: "Python", pct: 80 },
      { name: "JavaScript", pct: 78 },
      { name: "React", pct: 75 },
      { name: "Node.js", pct: 70 },
      { name: "SQL / MySQL", pct: 72 },
      { name: "MongoDB", pct: 65 },
      { name: "AWS (EC2/S3)", pct: 60 },
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
        title: "Serverless Site (Firebase)",
        tech: "HTML, JS, Firebase Hosting, Firestore",
        desc: "Responsive static site with dynamic form submissions (Firestore).",
      },
      {
        title: "Netflix Clone (Demo)",
        tech: "React, Firebase",
        desc: "Frontend clone showcasing UI & auth flows (demo project).",
      },
    ],
    []
  );

  // small entrance animation definitions
  const container = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  // set page title
  useEffect(() => {
    document.title = "Abhishek Sharma — Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-black/40 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white grid place-items-center font-bold">
              AS
            </div>
            <div>
              <div className="font-semibold">Abhishek Sharma</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">B.Tech CSE • Aspiring Software & Data Engineer</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <SmoothLink href="#about">About</SmoothLink>
            <SmoothLink href="#skills">Skills</SmoothLink>
            <SmoothLink href="#projects">Projects</SmoothLink>
            <SmoothLink href="#education">Education</SmoothLink>
            <SmoothLink href="#contact">Contact</SmoothLink>
            <a
              className="px-3 py-1 rounded-full border text-sm hover:bg-gray-100 dark:hover:bg-white/5"
              href="/_blank"
              onClick={(e) => e.preventDefault()}
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6">
        <section id="about" className="py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial="hidden" animate="show" variants={container} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl p-6 md:p-10 bg-white dark:bg-slate-800 shadow-lg">
              <div className="text-sm text-gray-500 dark:text-gray-300 mb-2">Hello, I am</div>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Abhishek Sharma — <span className="text-indigo-600 dark:text-indigo-400">Developer</span>
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                <strong>Detail-oriented</strong> Computer Science student focused on building full-stack web apps, cloud solutions
                and data-driven projects. I build clean UI and scalable backends.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:nabban6399@gmail.com" className="rounded-full bg-indigo-600 text-white px-4 py-2 text-sm shadow hover:opacity-90">
                  Email Me
                </a>
                <a href="https://linkedin.com/in/abhishek-sharma-99789b286" target="_blank" rel="noreferrer" className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-white/5">
                  LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-white/5">
                  GitHub
                </a>
              </div>

              <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                Working on: <AnimatedHeadline words={["Software", "Data", "Cloud", "AI"]} />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="order-first md:order-last">
            {/* Right pane — quick cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-md transition">
                <div className="text-xs text-gray-500">Education</div>
                <div className="font-semibold mt-1">B.Tech — CSE (2022 - 2026)</div>
                <div className="text-sm text-gray-500 mt-1">Noida Institute of Engineering & Technology</div>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-md transition">
                <div className="text-xs text-gray-500">Certs</div>
                <div className="font-semibold mt-1">Google Cloud • AWS Academy • CCNA</div>
                <div className="text-sm text-gray-500 mt-1">GCP & Cloud fundamentals</div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-md transition">
                <div className="text-xs text-gray-500">Projects</div>
                <div className="font-semibold mt-1">Tour & Travel Booking</div>
                <div className="text-sm text-gray-500 mt-1">PHP + MySQL + Auth</div>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-md transition">
                <div className="text-xs text-gray-500">Volunteer</div>
                <div className="font-semibold mt-1">Cloud Bootcamp Organizer</div>
                <div className="text-sm text-gray-500 mt-1">Led team for 150+ students</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-12">
          <motion.h2 className="text-2xl font-semibold mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm font-medium">{s.name}</div>
                    <div className="text-sm text-gray-500">{s.pct}%</div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 transition-all"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow">
              <div className="text-sm text-gray-500">Tooling</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Git", "VS Code", "Postman", "Docker (basics)", "Power BI", "Tableau"].map((t) => (
                  <span key={t} className="text-xs border px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 text-sm">
                <div className="text-gray-500">Interests</div>
                <div className="mt-2">Full-stack web, Cloud infra, ML & Data Visualization</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-12">
          <motion.h2 className="text-2xl font-semibold mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -6 }}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition"
              >
                <div className="text-xs text-gray-500">{p.tech}</div>
                <div className="font-semibold mt-2 text-lg">{p.title}</div>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{p.desc}</p>
                <div className="mt-4 flex gap-2">
                  <a href="#" onClick={(e)=>e.preventDefault()} className="text-sm px-3 py-1 border rounded-full">Demo</a>
                  <a href="#" onClick={(e)=>e.preventDefault()} className="text-sm px-3 py-1 border rounded-full">Code</a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education / Experience */}
        <section id="education" className="py-12">
          <h2 className="text-2xl font-semibold mb-6">Education & Experience</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 shadow">
              <div className="font-semibold">Noida Institute of Engineering & Technology</div>
              <div className="text-sm text-gray-500">B.Tech — Computer Science Engineering (2022 – 2026 expected)</div>
              <div className="mt-3 text-sm">Relevant: Data Structures, DBMS, ML basics, Cloud fundamentals</div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 shadow">
              <div className="font-semibold">Intern – Oasis Info</div>
              <div className="text-sm text-gray-500">Worked on software development tasks and contributed to real projects.</div>
              <div className="mt-3 text-sm">Responsibilities: feature development, testing, documentation</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-12 pb-24">
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow">
              <div className="text-sm text-gray-500">Email</div>
              <div className="font-medium mt-1">nabban6399@gmail.com</div>

              <div className="text-sm text-gray-500 mt-4">LinkedIn</div>
              <div className="mt-1">
                <a className="text-indigo-600" href="https://linkedin.com/in/abhishek-sharma-99789b286" target="_blank" rel="noreferrer">
                  linkedin.com/in/abhishek-sharma-99789b286
                </a>
              </div>

              <div className="text-sm text-gray-500 mt-4">Location</div>
              <div className="mt-1">Noida, Uttar Pradesh, India</div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow">
              <div className="text-sm text-gray-500">Get in touch</div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks — your message was noted (demo).");
                }}
                className="mt-3 space-y-3"
              >
                <input type="text" placeholder="Your name" className="w-full rounded-lg border px-3 py-2 bg-transparent" required />
                <input type="email" placeholder="Email" className="w-full rounded-lg border px-3 py-2 bg-transparent" required />
                <textarea rows="4" placeholder="Message" className="w-full rounded-lg border px-3 py-2 bg-transparent" required />
                <button className="rounded-lg bg-indigo-600 text-white px-4 py-2">Send message</button>
              </form>
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Abhishek Sharma — Built with React & Tailwind
        </footer>
      </main>
    </div>
  );
}

