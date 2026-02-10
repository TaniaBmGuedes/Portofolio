import reactIcon from "../assets/react.png";
import jsIcon from "../assets/js.png";
import flutterIcon from "../assets/flutter.png";
import pythonIcon from "../assets/python.png";
import javaIcon from "../assets/java.png";
import sqlIcon from "../assets/sql.png";
import githubIcon from "../assets/github.png";
import unixIcon from "../assets/unix.png";
import jiraIcon from "../assets/jira.png";
import tensorflowIcon from "../assets/tensorflow.png";
import pytorchIcon from "../assets/pytorch.png";
import { Bug } from "@gravity-ui/icons";

export const skills = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "Flutter"],
    accent: "from-blue-400 to-cyan-400",
  },
  {
    title: "Backend",
    items: ["Java", "SQL Server"],
    accent: "from-purple-400 to-pink-400",
  },
  {
    title: "AI & Research",
    items: ["Python", "TensorFlow", "PyTorch"],
    accent: "from-orange-400 to-yellow-400",
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "Jira", "Unix"],
    accent: "from-amber-400 to-orange-400",
  },
  {
    title: "Testing (TypeScript: Vitest / Playwright / Cypress)",
    items: ["Unit tests", "Integration tests", "E2E tests"],
    accent: "from-green-400 to-blue-400",
  },
];
export const usageMap: Record<string, string[]> = {
  react: [
    "This portfolio (React + TypeScript)",
    "Xmas Tree — React-based holiday animation demo",
    "Nextjs-to-nestjs — Next.js frontend UI",
    "Stripe-Frontend & Stripe-Backend — Fullstack TypeScript",
    "Nestjs-to-nextjs — React/Next.js frontend consuming NestJS API",
  ],

  javascript: [
    "Js-explanation — fundamental JavaScript concepts",
    "Chronos-Pomodoro — JavaScript utility app",
    "Xmas Tree — JS animations and logic",
  ],

  flutter: ["Flutter mobile projects in IZ – Impact Zero"],

  python: [
    "AI-Diet-Lab — Python data & AI logic",
    "AI research internship at Bosch",
  ],

  tensorflow: ["AI research internship at Bosch"],

  pytorch: ["AI research internship at Bosch"],

  java: [
    "Java foundational projects",
    "Backend logic in academic repositories",
  ],
  "sql server": ["SQL Server database usage in backend apps"],

  "git & github": [
    "Version control across all GitHub repos",
    "Branching & pull requests workflow",
  ],

  jira: ["Project planning workflows in team environments"],

  unix: ["Unix and CLI usage (development & scripting)"],

  "unit tests": ["Tests-next-js-vitest-playwright — unit tests with Vitest"],

  "integration tests": [
    "Tests-next-js-vitest-playwright — core integration test flows",
  ],

  "e2e tests": [
    "Tests-next-js-vitest-playwright — E2E tests with Playwright/Cypress",
  ],
};

export const skillsIcons = [
  { name: "React", icon: reactIcon, color: "text-cyan-400" },
  { name: "JavaScript", icon: jsIcon, color: "text-yellow-400" },
  { name: "Flutter", icon: flutterIcon, color: "text-sky-400" },

  { name: "Python", icon: pythonIcon, color: "text-emerald-400" },
  { name: "Java", icon: javaIcon, color: "text-red-400" },
  { name: "SQL Server", icon: sqlIcon, color: "text-indigo-400" },

  { name: "Git & GitHub", icon: githubIcon, color: "text-neutral-300" },
  { name: "Jira", icon: jiraIcon, color: "text-blue-300" },
  { name: "Unix", icon: unixIcon, color: "text-zinc-300" },

  { name: "Unit Tests", icon: Bug, color: "text-green-400" },
  { name: "Integration Tests", icon: Bug, color: "text-green-400" },
  { name: "E2E Tests", icon: Bug, color: "text-green-400" },
  { name: "TensorFlow", icon: tensorflowIcon, color: "text-sky-400" },
  { name: "Pytorch", icon: pytorchIcon, color: "text-sky-400" },
];
export const skillsTextColor = [
  { name: "React", textColor: "text-cyan-400" },
  { name: "JavaScript", textColor: "text-yellow-400" },
  { name: "Flutter", textColor: "text-sky-400" },

  { name: "Python", textColor: "text-emerald-400" },
  { name: "Java", textColor: "text-purple-400" },
  { name: "SQL Server", textColor: "text-indigo-400" },

  { name: "SQL Server", textColor: "text-indigo-400" },
  { name: "Git & GitHub", textColor: "text-orange-400" },
  { name: "Unix", textColor: "text-gray-300" },
  { name: "Jira", textColor: "text-blue-300" },

  { name: "Unit Tests", textColor: "text-green-400" },
  { name: "Integration Tests", textColor: "text-green-400" },
  { name: "E2E Tests", textColor: "text-green-400" },
];
