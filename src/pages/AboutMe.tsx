import { Avatar, Card } from "@heroui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import profilePhoto from "../assets/profilePhoto.jpeg";

type PathMap = { left: string; mid: string; right: string };

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const midRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const [paths, setPaths] = useState<PathMap | null>(null);

  useEffect(() => {
    const updatePaths = () => {
      if (
        !containerRef.current ||
        !avatarRef.current ||
        !leftRef.current ||
        !midRef.current ||
        !rightRef.current
      )
        return;

      const container = containerRef.current.getBoundingClientRect();
      const avatar = avatarRef.current.getBoundingClientRect();
      const left = leftRef.current.getBoundingClientRect();
      const mid = midRef.current.getBoundingClientRect();
      const right = rightRef.current.getBoundingClientRect();

      const startX = avatar.left + avatar.width / 2 - container.left;
      const startY = avatar.bottom - container.top;

      const leftX = left.left + left.width / 2 - container.left;
      const leftY = left.top - container.top;

      const midX = mid.left + mid.width / 2 - container.left;
      const midY = mid.top - container.top;

      const rightX = right.left + right.width / 2 - container.left;
      const rightY = right.top - container.top;

      const makeBezierPath = (
        startX: number,
        startY: number,
        endX: number,
        endY: number,
        curvature = 80
      ) => {
        const c1x = startX;
        const c1y = startY + curvature;

        const c2x = endX;
        const c2y = endY - curvature;

        return `M ${startX} ${startY}
          C ${c1x} ${c1y}, ${c2x} ${c2y}, ${endX} ${endY}`;
      };

      setPaths({
        left: makeBezierPath(startX, startY, leftX, leftY, 110),
        mid: makeBezierPath(startX, startY, midX, midY, 80),
        right: makeBezierPath(startX, startY, rightX, rightY, 120),
      });
    };

    updatePaths();
    window.addEventListener("resize", updatePaths);
    const resizeObserver = new ResizeObserver(updatePaths);
    [containerRef, avatarRef, leftRef, midRef, rightRef].forEach((ref) => {
      if (ref.current) resizeObserver.observe(ref.current);
    });

    return () => {
      window.removeEventListener("resize", updatePaths);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-[#F0F7FF] dark:bg-[#050712] px-6 py-20">
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
        className="text-blue-600 dark:text-blue-300 flex justify-center mb-3 text-3xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text"
      >
        About Me
      </motion.h1>

      <div
        ref={containerRef}
        className="relative mx-auto min-h-140 max-w-6xl pb-32"
      >
        <div
          ref={avatarRef}
          className="absolute left-1/2 top-0 -translate-x-1/2 z-10"
        >
          <Avatar className="h-36 w-36 border-4 border-blue-500 shadow-xl">
            <Avatar.Image src={profilePhoto} alt="Profile Photo" />
          </Avatar>
        </div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {paths && (
            <>
              <motion.path
                d={paths.left}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-blue-500/50 dark:text-blue-300/90"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2 }}
              />
              <motion.path
                d={paths.mid}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-blue-500/50 dark:text-blue-300/90"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.path
                d={paths.right}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-blue-500/50 dark:text-blue-300/90"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8 }}
              />
            </>
          )}
        </svg>

        <div className="absolute bottom-0 left-0 right-0 grid gap-6 md:grid-cols-3 px-4">
          <motion.div
            ref={leftRef}
            className="-mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          >
            <Card
              className="
  bg-white/95 
  dark:bg-white/5 
  backdrop-blur 
  border border-slate-200/60 dark:border-white/10 
  shadow-lg dark:shadow-blue-500/10 
  hover:shadow-blue-500/20 
  transition-shadow
"
            >
              <Card.Header>
                <Card.Title className="text-blue-600 dark:text-blue-300">
                  Profile
                </Card.Title>
              </Card.Header>
              <Card.Description className="text-foreground/80 space-y-3">
                <p>
                  Hi, I’m <span className="font-semibold">Tânia Guedes</span>, a
                  Frontend Developer with a background in Informatics
                  Engineering. I build modern, user-focused web and mobile
                  experiences with React, TypeScript, and Flutter.
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    <span className="font-medium">Bosch</span> — AI research
                    internship (Python, neural networks)
                  </li>
                  <li>
                    <span className="font-medium">IZ – Impact Zero</span> —
                    Frontend dev (Flutter, React + TypeScript)
                  </li>
                </ul>
              </Card.Description>
            </Card>
          </motion.div>

          <motion.div
            className="-mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            ref={midRef}
          >
            <Card
              className="
  bg-white/95 
  dark:bg-white/5 
  backdrop-blur 
  border border-slate-200/60 dark:border-white/10 
  shadow-lg dark:shadow-blue-500/10 
  hover:shadow-blue-500/20 
  transition-shadow
"
            >
              <Card.Header>
                <Card.Title className="text-blue-600 dark:text-blue-300">
                  What I value in my work
                </Card.Title>
              </Card.Header>
              <Card.Description>
                <ul className="list-disc pl-5">
                  <li>Clean, readable, and scalable code</li>
                  <li>User-centered design</li>
                  <li>Continuous learning</li>
                  <li>Collaboration and communication</li>
                </ul>
              </Card.Description>
            </Card>
          </motion.div>

          <motion.div
            className="-mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            ref={rightRef}
          >
            <Card
              className="
  bg-white/95 
  dark:bg-white/5 
  backdrop-blur 
  border border-slate-200/60 dark:border-white/10 
  shadow-lg dark:shadow-blue-500/10 
  hover:shadow-blue-500/20 
  transition-shadow
"
            >
              <Card.Header>
                <Card.Title className="text-blue-600 dark:text-blue-300">
                  A bit more about me
                </Card.Title>
              </Card.Header>
              <Card.Description>
                <ul className="list-disc pl-5">
                  <li>Play bass guitar</li>
                  <li>Painting & drawing</li>
                  <li>Gym & swimming</li>
                  <li>Reading</li>
                  <li>Listening to music</li>
                  <li>Outdoors with family & friends</li>
                </ul>
              </Card.Description>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
