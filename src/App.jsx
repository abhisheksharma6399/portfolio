import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 text-gray-800 dark:text-gray-100">
      <header className="p-4 flex justify-between items-center border-b">
        <h1 className="font-bold">Abhishek Sharma</h1>
        <button onClick={() => setDark(!dark)} className="border px-3 py-1 rounded">
          {dark ? "Light" : "Dark"} mode
        </button>
      </header>
      <main className="p-6 max-w-4xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
          <h2 className="text-3xl font-bold mb-4">Aspiring Software & Data Engineer</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Detail‑oriented and tech‑savvy Computer Science student passionate about solving real‑world problems using software and data.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
