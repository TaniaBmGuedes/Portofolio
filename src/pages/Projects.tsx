import { motion, type Variants } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { projects } from "../data";
import { Button, Card, Modal } from "@heroui/react";
import { useEffect, useState } from "react";
import { ArrowRight } from "@gravity-ui/icons";

//TODO: ANIMATION IN CARROUSLE
const responsiveConfig = {
  desktop: { breakpoint: { max: 3000, min: 1280 }, items: 3 },
  tablet: { breakpoint: { max: 1280, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const cardVariants: Variants = {
  active: { filter: "saturate(1)", opacity: 1 },
  inactive: { filter: "saturate(1)", opacity: 1 },
};

export default function Projects() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
 
  const [cardOpen, setCardOpen] = useState<number | null>(null);
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
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
        Projects
      </motion.h1>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="w-full  mx-auto flex justify-center mt-[10%]"
      >
        <Carousel
          draggable
          infinite
          centerMode={false}
          partialVisible={false}
          responsive={responsiveConfig}
          autoPlaySpeed={1000}
          keyBoardControl
          transitionDuration={500}
          containerClass="w-full"
          arrows
          removeArrowOnDeviceType={[]}
          itemClass="px-2 sm:px-3"
          customLeftArrow={
            <button
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/40 dark:bg-white/20 text-white rounded-full p-2 shadow-md"
            >
              ‹
            </button>
          }
          customRightArrow={
            <button
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/40 dark:bg-white/20 text-white rounded-full p-2 shadow-md"
            >
              ›
            </button>
          }
          
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              whileHover={{ y: 1, scale: 1 }}
              className="flex justify-center"
              animate="active"
              variants={cardVariants}
            >
              <Card
                className="w-full max-w-85 sm:max-w-none bg-white/95 dark:bg-white/5 backdrop-blur border border-slate-200/60 dark:border-white/10 shadow-lg dark:shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow rounded-2xl"
              >
                <Card.Header className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  {project.title}
                </Card.Header>
                <div className="mt-2 text-white/70 space-y-2">
                  <div>
                    <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Description:
                    </span>{" "}
                    <span className="text-slate-700 dark:text-white ">
                      {project.desc ?? "No description provided."}
                    </span>
                  </div>
                  <div>
                    <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Tech:{" "}
                    </span>{" "}
                    <span className="text-slate-700 dark:text-white ">
                      {Array.isArray(project.tech)
                        ? project.tech.join(", ")
                        : project.tech ?? "N/A"}
                    </span>
                  </div>
                  <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Link:
                  </span>{" "}
                  {project.github && project.github.length > 0 ? (
                    <ul className="list-disc list-inside text-sm text-white/80">
                      {project.github.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 dark:text-blue-300 hover:text-cyan-200 underline decoration-cyan-400/70"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    project.pdf &&
                    project.pdf.length > 0 && (
                      <ul className="list-disc list-inside text-sm text-white/80">
                        {project.pdf.map((item, index) => (
                          <li key={index}>
                            <a
                              href={item}
                              target="_blank"
                              rel="noreferrer"
                              download
                              className="text-blue-600 dark:text-blue-300 hover:text-cyan-200 underline decoration-cyan-400/70"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
                <Card.Footer className="flex flex-col gap-3">
                  <div>
                    <Button
                      onClick={() => setCardOpen(index)}
                      className="px-4 py-2 rounded-full font-semibold dark:text-black"
                    >
                      Open to see details
                      <ArrowRight />
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
      {cardOpen !== null && (
        <Modal isOpen onOpenChange={() => setCardOpen(null)}>
          <Modal.Backdrop>
            <Modal.Container className="items-center p-4">
              <Modal.Dialog className="w-full max-w-md rounded-2xl bg-white/95 dark:bg-black backdrop-blur border border-slate-200/60 dark:border-white/10">
                <Modal.CloseTrigger className="text-slate-500 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 rounded-full" />
                <Modal.Header className="flex flex-col gap-1 pb-0 text-slate-900 dark:text-white">
                  <h3 className="mt-3 text-lg font-semibold">
                    {projects[cardOpen]?.title}
                  </h3>
                </Modal.Header>
                <Modal.Body className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-white/85 max-h-[60vh] overflow-y-auto pr-1">
                  <div>
                    <strong className="text-blue-600 dark:text-cyan-300">
                      Problem:
                    </strong>{" "}
                    {projects[cardOpen]?.problem ?? "—"}
                  </div>
                  <div>
                    <strong className="text-blue-600 dark:text-cyan-300">
                      Solution:
                    </strong>{" "}
                    {projects[cardOpen]?.solution ?? "—"}
                  </div>
                  <div>
                    <strong className="text-blue-600 dark:text-cyan-300">
                      Challenges:
                    </strong>{" "}
                    {projects[cardOpen]?.challenges ?? "—"}
                  </div>
                  <div>
                    <strong className="text-blue-600 dark:text-cyan-300">
                      What I Learned:
                    </strong>{" "}
                    {projects[cardOpen]?.learned ?? "—"}
                  </div>
                </Modal.Body>
                <Modal.Footer className="flex justify-end pt-0">
                  <Button
                    onClick={() => setCardOpen(null)}
                    className="px-4 py-2 rounded-full font-semibold dark:text-black"
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      )}
    </section>
  );
}
