import { Card } from "@heroui/react";
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
    <section className="relative min-h-screen bg-[#050712] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="pointer-events-none absolute -top-40 -left-40 h-105 w-105 rounded-full bg-blue-500/20 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="pointer-events-none absolute top-1/3 -right-40 h-105 w-105 rounded-full bg-purple-500/20 blur-[120px]"
      />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center mb-3 text-3xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
      >
        Experience
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10 flex justify-center text-white/70 text-center"
      >
        Roles where I shipped features, improved UX, and explored AI research.
      </motion.h2>
      <div className="max-w-4xl mx-auto mb-8">
        <Card className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl p-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-300/80">
              Resume
            </p>
            <p className="text-xl font-semibold text-white mt-1">
              Download my CV (last updated: 2025)
            </p>
            <p className="text-sm text-white/70">
              Academic background and professional experience in one place.
            </p>
          </div>
          {/* <Button
            as="a"
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-3 md:mt-0 bg-cyan-500/90 text-white hover:bg-cyan-400 px-4 py-2 rounded-lg font-semibold"
          >
            Download CV
          </Button> */}
        </Card>
      </div>
      //TODO: CHORNOLOIG TIMELINE
      <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="h-full"
          >
            <Card className="h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-cyan-300/80">
                  {exp.company}
                </p>
                <p className="text-xl font-semibold text-white mt-1">
                  {exp.role}
                </p>
              </div>
              <ul className="space-y-2 text-white/80 text-sm">
                {exp.bullets.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
