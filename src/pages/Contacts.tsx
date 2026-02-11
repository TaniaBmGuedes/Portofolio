import { Card } from "@heroui/react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExclamationShapeFill,
  LogoGithub,
  LogoLinkedin,
} from "@gravity-ui/icons";

const contacts = [
  {
    label: "Email",
    value: "taniabmguedes@gmail.com",
    href: "mailto:taniabmguedes@gmail.com",
    icon: ExclamationShapeFill,
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
];

//TODO:SEND EMAIL
export default function Contacts() {
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
        Contact
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10 flex justify-center text-white/70 text-center"
      >
        Open to frontend and junior fullstack opportunities. Let’s talk.
      </motion.h2>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        <Card className="col-span-1 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl p-6 flex flex-col gap-4">
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
          {/* <button
            href="mailto:taniabmguedes@gmail.com"
            className="bg-cyan-500/90 text-white hover:bg-cyan-400 px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-2 w-fit"
          >
            Send Email
            <ArrowRight />
          </button> */}
        </Card>

        <Card className="col-span-1 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl p-6 flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.18em] text-cyan-300/80">
            Connect
          </p>
          <div className="space-y-3">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-white/10 p-2 text-cyan-300">
                    <Icon className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-sm text-white/60">{label}</p>
                    <p className="text-white font-semibold">{value}</p>
                  </div>
                </div>
                <ArrowRight className="text-cyan-300 opacity-0 group-hover:opacity-100 transition" />
              </a>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
