import { Card } from "@heroui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { skills, skillsIcons, skillsTextColor, usageMap } from "../data";

export default function Skills() {
  const iconMap = Object.fromEntries(
    skillsIcons.map((s) => [s.name.toLocaleLowerCase(), s])
  );
  const textColorMap = Object.fromEntries(
    skillsTextColor.map((s) => [s.name.toLocaleLowerCase(), s.textColor])
  );
  const [selectedSkill, setSelectedSkill] = useState<string | null>("react");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const carouselConfig = {
    all: { breakpoint: { max: 3000, min: 0 }, items: 1 },
  };
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-transparent px-4 sm:px-6 py-16 sm:py-20"
    >
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
        Skills
      </motion.h1>

      {!isMobile && (
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10 flex justify-center text-slate-600 dark:text-slate-300 text-center"
        >
          A quick overview of the tools and technologies I work with.
          <span className="ml-2 mr-1 text-blue-600 dark:text-blue-300 ">
            Click any item
          </span>{" "}
          to see where I’ve used it.
        </motion.h2>
      )}

      {isMobile ? (
        <Carousel
          responsive={carouselConfig}
          arrows
          showDots={false}
          infinite
          itemClass="px-2"
          containerClass="w-full"
        >
          {skills.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <Card className="bg-white/95 dark:bg-white/5 backdrop-blur border border-slate-200/60 dark:border-white/10 shadow-lg dark:shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow rounded-2xl h-full">
                <Card.Header>
                  <Card.Title
                    className={`text-lg font-semibold bg-linear-to-r ${group.accent} bg-clip-text text-transparent`}
                  >
                    {group.title}
                  </Card.Title>
                </Card.Header>
                <Card.Description>
                  <ul className="space-y-2 text-foreground/80">
                    {group.items.map((item) => {
                      const iconData = iconMap[item.toLowerCase()];
                      const Icon = iconData?.icon;
                      return (
                        <li
                          key={item}
                          onClick={() => {
                            setSelectedSkill(item.toLowerCase());
                          }}
                          className="group flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200/60 dark:border-white/10 bg-white/5 px-3 py-3 transition hover:bg-white/10 hover:scale-[1.02] active:scale-[0.99]"
                        >
                          {Icon &&
                            (typeof Icon === "string" ? (
                              <img
                                src={Icon}
                                alt={item}
                                className="h-5 w-5 object-contain drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]"
                              />
                            ) : (
                              <Icon
                                className={`h-5 w-5 ${iconData.color} shrink-0 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]`}
                              />
                            ))}

                          <span
                            className={`text-sm font-medium transition ${
                              textColorMap[item.toLowerCase()] ?? "text-white/80"
                            } group-hover:brightness-125`}
                          >
                            {item}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </Card.Description>
              </Card>
            </motion.div>
          ))}
        </Carousel>
      ) : (
        <motion.div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <Card className="bg-white/95 dark:bg-white/5 backdrop-blur border border-slate-200/60 dark:border-white/10 shadow-lg dark:shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow rounded-2xl h-full">
                <Card.Header>
                  <Card.Title
                    className={`text-lg font-semibold bg-linear-to-r ${group.accent} bg-clip-text text-transparent`}
                  >
                    {group.title}
                  </Card.Title>
                </Card.Header>
                <Card.Description>
                  <ul className="space-y-2 text-foreground/80">
                    {group.items.map((item) => {
                      const iconData = iconMap[item.toLowerCase()];
                      const Icon = iconData?.icon;
                      return (
                        <li
                          key={item}
                          onClick={() => {
                            setSelectedSkill(item.toLowerCase());
                          }}
                          className="group flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200/60 dark:border-white/10 bg-white/5 px-3 py-3 transition hover:bg-white/10 hover:scale-[1.02] active:scale-[0.99]"
                        >
                          {Icon &&
                            (typeof Icon === "string" ? (
                              <img
                                src={Icon}
                                alt={item}
                                className="h-5 w-5 object-contain drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]"
                              />
                            ) : (
                              <Icon
                                className={`h-5 w-5 ${iconData.color} shrink-0 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]`}
                              />
                            ))}

                          <span
                            className={`text-sm font-medium transition ${
                              textColorMap[item.toLowerCase()] ?? "text-white/80"
                            } group-hover:brightness-125`}
                          >
                            {item}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </Card.Description>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-full mt-10 sm:mt-12"
        >
          <Card className="bg-white/95 dark:bg-white/5 backdrop-blur border border-slate-200/60 dark:border-white/10 shadow-lg dark:shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow rounded-2xl">
            <Card.Header>
              <Card.Title className="text-xl font-semibold text-dark dark:text-white">
                Where I used it:{" "}
                <span
                  className={`text-md capitalize font-medium transition ${
                    textColorMap[selectedSkill] ??
                    "text-slate-600 dark:text-white/80"
                  }`}
                >
                  {selectedSkill}
                </span>
              </Card.Title>
            </Card.Header>
            <Card.Description>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-white/80">
                {usageMap[selectedSkill]?.map((use, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {use}
                  </li>
                ))}
              </ul>
            </Card.Description>
          </Card>
        </motion.div>
      )}
    </section>
  );
}
