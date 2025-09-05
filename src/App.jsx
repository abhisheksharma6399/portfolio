import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import profilePic from "./assets/profile.jpg"; // 👈 apni photo ko /src/assets/ me profile.jpg naam se daal dena

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <header className="p-4 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold">Abhishek Sharma</h1>
        <button
          onClick={() => setDark(!dark)}
          className="border px-3 py-1 rounded"
        >
          {dark ? "Light" : "Dark"} Mode
        </button>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-6"
        >
          
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Aspiring Software & Data Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Detail-oriented and tech-savvy Computer Science student passionate
              about solving real-world problems using software and data.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-semibold mb-3">Education</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>B.Tech in Computer Science</strong>, 2022 – 2026  
              <p className="text-gray-600 dark:text-gray-400">
                Focus: Software Engineering, Data Science, AI/ML
              </p>
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-2xl font-semibold mb-3">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "Java",
              "Python",
              "JavaScript",
              "React",
              "Node.js",
              "SQL",
              "MongoDB",
              "Machine Learning",
              "Data Science",
              "Git & GitHub",
            ].map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 border rounded-full text-sm text-center"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h3 className="text-2xl font-semibold mb-3">Projects</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">Netflix Clone</h4>
              <p className="text-gray-600 dark:text-gray-400">
                A full-stack Netflix clone with React, Firebase authentication,
                and TMDB API for movie data.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Machine Learning Models</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Built predictive models with Python (scikit-learn) for
                classification and regression tasks.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Portfolio Website</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Personal portfolio built with React, Tailwind, and Netlify
                deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-2xl font-semibold mb-3">Experience</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Intern – Oasis Info</strong> (2024)  
              <p className="text-gray-600 dark:text-gray-400">
                Worked on software development tasks and contributed to real
                projects during internship.
              </p>
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h3 className="text-2xl font-semibold mb-3">Contact</h3>
          <p>
            📧 Email:{" "}
            <a
              href="mailto:abhishek@example.com"
              className="text-blue-500 hover:underline"
            >
              abhishek@example.com
            </a>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/abhishek"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/abhishek
            </a>
          </p>
          <p>
            🖥 GitHub:{" "}
            <a
              href="https://github.com/abhishek"
              className="text-blue-500 hover:underline"
            >
              github.com/abhishek
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
