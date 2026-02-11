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
  { name: "TensorFlow", icon: tensorflowIcon, color: "text-neutral-400" },
  { name: "Pytorch", icon: pytorchIcon, color: "text-neutral-400" },
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
  { name: "TensorFlow", textColor: "text-orange-400" },
  { name: "Pytorch", textColor: "text-orange-300" },
  { name: "Unix", textColor: "text-yellow-500" },
  { name: "Jira", textColor: "text-blue-300" },

  { name: "Unit Tests", textColor: "text-green-400" },
  { name: "Integration Tests", textColor: "text-green-400" },
  { name: "E2E Tests", textColor: "text-green-400" },
];

export const projects = [
  {
    title: "Stripe Fullstack",
    desc: "Fullstack app with Stripe payments",
    summary:
      "Fullstack web application that simulates real-world checkout and subscription flows using Stripe. The frontend is built with React + TypeScript and handles the UI and redirects to Stripe Checkout, while the backend securely creates checkout sessions and manages payment logic.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Stripe API"],
    github: [
      "https://github.com/TaniaBmGuedes/Stripe-Frontend",
      "https://github.com/TaniaBmGuedes/Stripe-Backend",
    ],
    problem:
      "Deliver an end-to-end checkout/subscription flow with secure payments.",
    solution:
      "React + TypeScript frontend calling a Node/Express API that creates Stripe Checkout sessions and handles payment lifecycle.",
    challenges:
      "Webhook handling, async payment states, secure API keys and cross-origin flows.",
    learned:
      "Stripe integration, fullstack API design, payment UX and webhooks.",
  },
  {
    title: "Cooperative Positioning with AI for Vehicular Localization",
    desc: "Research paper on improving GNSS vehicle positioning using AI and dynamic base stations.",
    summary:
      "Academic research developed during my internship at Bosch, focused on improving vehicle positioning accuracy in urban environments. The project explores Cooperative Positioning using AI models (LSTM, CNN, Random Forest) to select dynamic reference vehicles and reduce GNSS errors such as multipath and NLOS.",
    tech: [
      "Python",
      " PyTorch",
      " Machine Learning",
      " GNSS",
      " CARLA Simulator",
    ],
    pdf: ["Article.pdf"],
    problem:
      "GNSS positioning loses accuracy in urban environments due to multipath and NLOS.",
    solution:
      "Cooperative positioning that selects dynamic reference vehicles with AI models to correct GNSS readings.",
    challenges:
      "Data sparsity, noisy signals, model selection (LSTM/CNN/RF) and evaluation in simulated scenarios.",
    learned:
      "Applied ML for GNSS, feature engineering, experimentation with multiple model families.",
  },
  {
    title: "Chronos Pomodoro",
    desc: "Pomodoro focus timer",
    summary:
      "A productivity timer app based on the Pomodoro technique to help users manage focus and break intervals with a clean, simple UI.",
    tech: ["TypeScript", "HTML", "CSS"],
    github: ["https://github.com/TaniaBmGuedes/Chronos-Pomodoro"],
    problem: "Keep users on task with focused work/break intervals.",
    solution:
      "Built a lightweight timer UI with preset and custom intervals and clear state transitions.",
    challenges:
      "Timer accuracy, interval state management, and clean visual feedback.",
    learned:
      "Time-based UI state handling in TypeScript and simple UX for focus tools.",
  },
  {
    title: "Blog",
    desc: "Personal blog starter",
    summary:
      "Personal blog starter project created to organize posts and experiment with site structure, layouts, and reusable components.",
    tech: ["TypeScript", "HTML", "CSS"],
    github: ["https://github.com/TaniaBmGuedes/Blog"],
    problem: "Organize content and layouts for a personal blog.",
    solution:
      "Created a modular blog starter with reusable sections and simple styling for posts.",
    challenges:
      "Structuring content, reusable components, and clean typography.",
    learned:
      "Content architecture, modular components, and layout consistency.",
  },
  {
    title: "Xmas Tree",
    desc: "Holiday animation demo",
    summary:
      "Fun React project with interactive animations to render a Christmas tree, exploring UI logic, animations, and visual effects.",
    tech: ["React", "JavaScript", "CSS"],
    github: ["https://github.com/TaniaBmGuedes/xmas-tree"],
    problem: "Create a playful interactive holiday UI.",
    solution:
      "Animated Christmas tree with React state/animations for lights and ornaments.",
    challenges:
      "Smooth animation timing and performance with many DOM elements.",
    learned:
      "React animation patterns and performance tweaks for interactive UIs.",
  },
  {
    title: "Nextjs-to-Nestjs",
    desc: "Next.js frontend consuming NestJS APIs",
    summary:
      "Next.js frontend application that consumes APIs from a NestJS backend, demonstrating fullstack communication and data fetching between frontend and backend.",
    tech: ["Next.js", "TypeScript", "NestJS", "REST APIs"],
    github: ["https://github.com/TaniaBmGuedes/nextjs-to-nestjs"],
    problem: "Build a Next.js client for a NestJS backend.",
    solution:
      "Implemented data fetching and UI flows that consume REST endpoints exposed by NestJS.",
    challenges:
      "API contract alignment and handling loading/error states on the client.",
    learned:
      "Fullstack integration, data fetching strategies, and API typing in TypeScript.",
  },
  {
    title: "Nestjs-to-Nextjs",
    desc: "NestJS backend serving Next.js frontend",
    summary:
      "NestJS backend that provides APIs and services to a Next.js frontend, focusing on clean API design and frontend-backend integration patterns.",
    tech: ["NestJS", "TypeScript", "Next.js", "REST APIs"],
    github: ["https://github.com/TaniaBmGuedes/nestjs-to-nextjs"],
    problem: "Provide reliable APIs for a Next.js frontend.",
    solution:
      "Designed REST services in NestJS with clear DTOs and controllers consumed by Next.js.",
    challenges: "Request validation, DTO typing, and CORS configuration.",
    learned:
      "API design with NestJS, validation, and frontend-backend contracts.",
  },
  {
    title: "Muscle Human Body",
    desc: "Human anatomy exploration",
    summary:
      "Educational project to explore and visualize human muscle anatomy, focusing on data handling and UI representation of muscle groups.",
    tech: ["Python", "Data Processing", "Visualization"],
    github: ["https://github.com/TaniaBmGuedes/muscle-human-body"],
    problem: "Present muscle anatomy data in an accessible way.",
    solution:
      "Processed datasets in Python and rendered visual representations of muscle groups.",
    challenges:
      "Data cleaning, mapping structures to visuals, and keeping the UI clear.",
    learned:
      "Data processing for visualization and building educational UI flows.",
  },
];
export const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};
