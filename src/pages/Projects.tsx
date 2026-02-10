import { motion, type Variants } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { projects } from "../data";
import { Button, Card, Modal } from "@heroui/react";
import { useState } from "react";
import { ArrowRight } from "@gravity-ui/icons";
//TODO:Download pdf
//TODO: ANIMATION IN CARROUSLE
const responsiveThree = {
  all: { breakpoint: { max: 3000, min: 0 }, items: 3 },
};

const cardVariants: Variants = {
  active: {
    filter: "saturate(1)",
  },
  inactive: {
    opacity: 0.35,
  },
};

export default function Projects() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const [cardSelected, setCardSelect] = useState(1);
  const [cardOpen, setCardOpen] = useState<number | null>(null);
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
        className=" flex justify-center mb-3 text-3xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
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
          centerMode
          partialVisible={false}
          responsive={responsiveThree}
          autoPlaySpeed={1000}
          keyBoardControl
          transitionDuration={500}
          containerClass="w-full"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="px-3"
          afterChange={(_, { currentSlide, slidesToShow }) => {
            const visible = slidesToShow ?? 3;

            const middleIndex =
              (currentSlide + Math.floor(visible)) % projects.length;
            setCardSelect(middleIndex);
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              whileHover={{ y:1,scale: 1 }}
              className="flex justify-center"
              animate={index === cardSelected ? "active" : "inactive"}
              variants={cardVariants}
            >
              <Card className="w-210 h-110 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 shadow-xl hover:shadow-cyan-500/20 ">
                <Card.Header className="text-lg font-semibold text-cyan-400">
                  {project.title}
                </Card.Header>
                <div className="mt-2 text-white/70 space-y-2">
                  <div>
                    <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Description:
                    </span>{" "}
                    {project.desc ?? "No description provided."}
                  </div>
                  <div>
                    <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Tech:{" "}
                    </span>{" "}
                    {Array.isArray(project.tech)
                      ? project.tech.join(", ")
                      : project.tech ?? "N/A"}
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
                            className="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-400/70"
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
                              className="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-400/70"
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
                      className="text-sm font-medium tracking-wide border border-blue-300 p-3 rounded-full"
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
              <Modal.Dialog className="w-full max-w-md rounded-2xl bg-linear-to-br from-[#0b1224] via-[#0f1e3a] to-[#0b1224] text-white border border-white/10 shadow-2xl shadow-cyan-500/25">
                <Modal.CloseTrigger className="text-white/70 hover:bg-white/10 rounded-full" />
                <Modal.Header className="flex flex-col gap-1 pb-0">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-cyan-300/80">
                    Project
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {projects[cardOpen]?.title}
                  </h3>
                </Modal.Header>
                <Modal.Body className="space-y-4 text-sm leading-relaxed text-white/85 max-h-[60vh] overflow-y-auto pr-1">
                  <div>
                    <strong className="text-cyan-300">Problem:</strong>{" "}
                    {projects[cardOpen]?.problem ?? "—"}
                  </div>
                  <div>
                    <strong className="text-cyan-300">Solution:</strong>{" "}
                    {projects[cardOpen]?.solution ?? "—"}
                  </div>
                  <div>
                    <strong className="text-cyan-300">Challenges:</strong>{" "}
                    {projects[cardOpen]?.challenges ?? "—"}
                  </div>
                  <div>
                    <strong className="text-cyan-300">What I Learned:</strong>{" "}
                    {projects[cardOpen]?.learned ?? "—"}
                  </div>
                </Modal.Body>
                <Modal.Footer className="flex justify-end pt-0">
                  <Button
                    onClick={() => setCardOpen(null)}
                    className="bg-cyan-500/90 text-white hover:bg-cyan-400 px-4 py-2 rounded-lg"
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
