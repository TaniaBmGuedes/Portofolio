import { Button, Avatar } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";
import { motion } from "framer-motion";
import profilePhoto from "../assets/profilePhoto.jpeg";

const highlights = ["React", "TypeScript", "Flutter", "APIs", "UI/UX"];

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-transparent px-4 py-16 sm:px-6 sm:py-20"
    >
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

      <div className="mx-auto flex w-full max-w-4xl justify-center">
        <div className="flex w-full flex-col items-center gap-7 text-center">
          <div className="mx-auto flex flex-col items-center gap-4">
            <Avatar className="h-28 w-28 sm:h-36 sm:w-36 border border-slate-200 bg-white">
              <Avatar.Image src={profilePhoto} alt="Profile Photo" />
              <Avatar.Fallback className="text-lg text-slate-700 bg-white/40">
                TG
              </Avatar.Fallback>
            </Avatar>
            <p className="text-lg font-semibold tracking-wide text-blue-600 dark:text-blue-300">
              Hi, I&apos;m Tânia Guedes · FullStack Developer
            </p>

            <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-600 dark:text-slate-300 md:text-lg">
              FullStack Developer with a background in Informatics Engineering.
              I work mainly with React and TypeScript on the web, and Flutter
              for mobile apps, contributing to real products used by users.
            </p>
            <div className="mt-6 flex w-full max-w-md flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                className="w-full sm:w-auto text-sm dark:text-dark font-medium tracking-wide px-4 py-3 rounded-full bg-blue-600 dark:bg-blue-300"
                onClick={() => (window.location.hash = "#projects")}
              >
                View My Projects
                <ArrowRight />
              </Button>
              <Button
                className="w-full sm:w-auto text-sm dark:text-dark font-medium tracking-wide px-4 py-3 rounded-full bg-blue-600 dark:bg-blue-300"
                onClick={() => (window.location.hash = "#experience")}
              >
                My experience
                <ArrowRight />
              </Button>
            </div>

            <div className="mt-8 grid w-full max-w-xl grid-cols-3 gap-3 text-center">
              {[
                { label: "Graduated", value: "2024" },
                { label: "Real projects", value: "3+" },
                { label: "Product team", value: "1" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm $`}
                >
                  <p className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 hidden sm:flex flex-wrap justify-center gap-2 ">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 dark:border-blue-300 dark:bg-white/10 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
