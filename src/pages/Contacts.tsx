import { Card } from "@heroui/react";
import { motion } from "framer-motion";
import { ArrowRight, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import { Mail, Phone } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "taniabmguedes@gmail.com",
    href: "",
    icon: Mail,
    copyOnly: true,
  },
  {
    label: "GitHub",
    value: "github.com/TaniaBmGuedes",
    href: "https://github.com/TaniaBmGuedes",
    icon: LogoGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tânia-guedes-6b296b208",
    href: "https://www.linkedin.com/in/t%C3%A2nia-guedes-6b296b208/",
    icon: LogoLinkedin,
  },
  {
    label: "Mobile",
    value: "+351 917 023 690",
    href: "",
    icon: Phone,
    copyOnly: true,
  },
];

//TODO:SEND EMAIL
export default function Contacts() {
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
        Contact
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10 flex justify-center text-slate-600 dark:text-slate-300 text-center"
      >
        Open to frontend and junior fullstack opportunities. Let’s talk.
      </motion.h2>

      <div className="max-w-4xl mx-auto grid gap-6 ">
        {/* <Card
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
          {" "}
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-300/80">
              Quick Message
            </p>
            <p className="text-lg font-semibold text-white mt-1">
              Email is the fastest way to reach me.
            </p>
            <p className="text-sm text-white/70">
              I usually respond within 24–48 hours.
            </p>
          </div>
        <button
            href="mailto:taniabmguedes@gmail.com"
            className="bg-cyan-500/90 text-white hover:bg-cyan-400 px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-2 w-fit"
          >
            Send Email
            <ArrowRight />
          </button> 
        </Card> */}

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
          <p className="text-sm uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300 ">
            Connect
          </p>
          <div className="space-y-3">
            {contacts.map(({ label, value, href, icon: Icon, copyOnly }) => {
              const clickable = Boolean(href && !copyOnly);
              const handleClick = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
                if (copyOnly) {
                  e.preventDefault();
                  navigator.clipboard?.writeText(value);
                }
              };
              const Wrapper: "a" | "div" = clickable ? "a" : "div";

              return (
                <Wrapper
                  key={label}
                  {...(clickable
                    ? { href, target: "_blank", rel: "noreferrer" }
                    : {})}
                  onClick={handleClick}
                  className={`group flex items-center justify-between rounded-xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/10 transition shadow-sm ${
                    copyOnly ? "cursor-copy" : "cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-slate-100 dark:bg-white/10 p-2 text-cyan-500 dark:text-cyan-300">
                      <Icon className="w-4 h-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-white/60">
                        {label}
                      </p>
                      <p className="text-slate-900 dark:text-white font-semibold">
                        {value}
                      </p>
                    </div>
                  </div>
                  {clickable && (
                    <ArrowRight className="text-cyan-500 dark:text-cyan-300 opacity-0 group-hover:opacity-100 transition" />
                  )}
                </Wrapper>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}
