import { Card, Button } from "@heroui/react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Bosch",
    role: "Curricular Internship – AI Research",
    bullets: [
      "Designed and trained neural network models in Python.",
      "Contributed to cooperative positioning research.",
    ],
  },
  {
    company: "IZ – Impact Zero",
    role: "Frontend Developer",
    bullets: [
      "Contributed to Flutter mobile application development.",
      "Built and maintained features in a React + TypeScript web app.",
      "Improved UI/UX and fixed bugs.",
      "Led testing setup (unit, integration, E2E) with TypeScript + Vitest/Playwright/Cypress; wrote comprehensive test plans.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="relative min-h-screen bg-[#F0F7FF] dark:bg-[#050712] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="pointer-events-none absolute -top-40 -left-40 h-105 w-105 rounded-full bg-blue-200/30 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="pointer-events-none absolute top-1/3 -right-40 h-105 w-105 rounded-full bg-purple-200/25 blur-[120px]"
      />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-blue-600 dark:text-blue-300 flex justify-center mb-3 text-3xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text"
      >
        Experience
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10 flex justify-center text-slate-600 dark:text-slate-300 text-center"
      >
        Roles where I shipped features, improved UX, and explored AI research.
      </motion.h2>
      <div className="max-w-4xl mx-auto mb-8">
        <Card className="bg-white/95 dark:bg-white/5 backdrop-blur border border-slate-200/60 dark:border-white/10 shadow-lg dark:shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow p-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
              Resume
            </p>
            <p className="text-xl font-semibold text-slate-900 dark:text-white mt-1">
              Download my CV (last updated: 2025)
            </p>
            <p className="text-sm text-slate-600 dark:text-white/80">
              Academic background and professional experience in one place.
            </p>
          </div>
          <Button
            onPress={() => {
              const a = document.createElement("a");
              a.href = "/cv.pdf";
              a.target = "_blank";
              a.rel = "noreferrer";
              a.download = "Tania-Guedes-CV.pdf";
              a.click();
            }}
            variant="primary"
            className="px-4 py-2 rounded-full font-semibold dark:text-black"
          >
            Download CV
          </Button>
        </Card>
      </div>

      <div className="relative max-w-4xl mx-auto pt-4">
        <div className="absolute left-6.5 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-white/10" />

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-14"
            >
              <span className="absolute left-5.5 top-6 h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20" />

              <Card className="bg-white/95 dark:bg-white/5 backdrop-blur border border-slate-200/60 dark:border-white/10 shadow-lg dark:shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow">
                <div className="p-6 flex flex-col gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
                      {exp.company}
                    </p>
                    <p className="text-xl font-semibold text-slate-900 dark:text-white mt-1">
                      {exp.role}
                    </p>
                  </div>
                  <ul className="space-y-2 text-slate-700 dark:text-white text-sm">
                    {exp.bullets.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
