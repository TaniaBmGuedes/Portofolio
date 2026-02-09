import { Button, Avatar } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";
import profilePhoto from "../assets/profilePhoto.jpeg";

const highlights = ["React", "TypeScript", "Flutter", "APIs", "UI/UX"];

export default function Home() {
  return (
    <section className="relative min-h-dvh bg-[#050712] overflow-hidden flex items-center justify-center">
      <div className="pointer-events-none absolute -top-40 -left-40 h-105 w-105 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-105 w-105 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="mx-auto flex w-full max-w-5xl justify-center px-6">
        <div className="flex w-full flex-col items-center gap-8 text-center">
          <div className="mx-auto flex flex-col items-center gap-4">
            <Avatar className="h-36 w-36 border border-white/15">
              <Avatar.Image src={profilePhoto} alt="Profile Photo" />
              <Avatar.Fallback className="text-lg text-white bg-white/10">
                TG
              </Avatar.Fallback>
            </Avatar>
            <p className="text-lg font-medium tracking-wide text-blue-300">
              Hi, I&apos;m Tânia Guedes · FullStack Developer
            </p>
          
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
              I build modern interfaces for real-world products.
            </h1>

            <p className="mt-6 max-w-xl text-base text-slate-300 md:text-lg">
              FullStack Developer with a background in Informatics Engineering. I
              work mainly with React and TypeScript on the web, and Flutter for
              mobile apps, contributing to real products used by users.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button className="text-sm font-medium tracking-wide border border-blue-300 p-3 rounded-full">
                View My Projects
                <ArrowRight />
              </Button>

              <Button className="text-sm font-medium tracking-wide  border border-blue-300 p-3 rounded-full">
                Let&apos;s talk
                <ArrowRight />
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white">2024</p>
                <p className="text-xs text-slate-300">Graduated</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="text-xs text-slate-300">Real projects</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-white">1</p>
                <p className="text-xs text-slate-300">Product team</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur"
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
