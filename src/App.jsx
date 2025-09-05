import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 text-gray-800 dark:text-gray-100">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Abhishek Sharma</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
            <button
              onClick={() => setDark(!dark)}
              className="ml-4 border px-3 py-1 rounded"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="flex flex-col items-center text-center py-20 px-4">
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
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 text-center">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Java",
            "Python",
            "JavaScript",
            "React",
            "Node.js",
            "SQL",
            "MongoDB",
            "Machine Learning",
            "Git & GitHub",
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="border rounded-lg py-3 px-4 text-center shadow-sm bg-white dark:bg-gray-800"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Netflix Clone",
              desc: "A full-stack Netflix clone with React & Firebase.",
            },
            {
              title: "Machine Learning Models",
              desc: "Predictive models built with Python and scikit-learn.",
            },
            {
              title: "Portfolio Website",
              desc: "Personal portfolio built with React, Tailwind & Netlify.",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 border rounded-lg shadow bg-white dark:bg-gray-800"
            >
              <h4 className="font-bold text-lg mb-2">{project.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact</h3>
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="mailto:abhishek@example.com"
            className="hover:text-blue-500 flex items-center gap-2"
          >
            <Mail size={20} /> Email
          </a>
          <a
            href="https://linkedin.com/in/abhishek"
            className="hover:text-blue-500 flex items-center gap-2"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/abhishek"
            className="hover:text-blue-500 flex items-center gap-2"
          >
            <Github size={20} /> GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

