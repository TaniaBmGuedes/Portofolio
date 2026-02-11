import { useCallback, useState } from "react";
import { getNavItems } from "../data/menuItems";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@heroui/styles";
import profilePhoto from "../assets/profilePhoto.jpeg";
import { Button, Link } from "@heroui/react";
import { useTheme } from "../hooks/useMetaColors";
import { Moon, Sun } from "@gravity-ui/icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#main");
  const navItems = getNavItems();
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  return (
    <motion.header
      className="fixed top-3 left-0 right-0 z-30 px-3"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between gap-5 px-3 md:px-4 py-2 border border-white/10 rounded-full">
        <div className="flex items-center gap-3">
          <motion.img
            src={profilePhoto}
            alt="Logo"
            className="h-10 w-10 rounded-xl  shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className="leading-tight hidden sm:block">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              Tânia Guedes
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Frontend · Fullstack Jr
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActiveHref(item.href)}
              className={cn(
                "relative px-2 py-2 text-sm font-medium transition",
                activeHref === item.href
                  ? "text-cyan-300"
                  : "text-slate-300 dark:text-slate-200 hover:text-cyan-300"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute left-1 right-1 -bottom-1 h-.5 rounded-full transition-transform duration-200 origin-left",
                  activeHref === item.href
                    ? "bg-cyan-400 scale-x-100"
                    : "bg-cyan-400/60 scale-x-0"
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button
            isIconOnly
            className="w-9 h-9 text-slate-200 hover:bg-white/10 rounded-full"
            onClick={toggleTheme}
            aria-label="Change theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
          <Button
            variant="primary"
            onClick={() => (window.location.hash = "#contacts")}
            className="text-sm font-semibold px-4 py-2 rounded-full shadow-lg shadow-cyan-500/25"
          >
            Contact
          </Button>
        </div>
      </div>

      <motion.div
        className="md:hidden mt-2 flex items-center justify-between gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Button
          isIconOnly
          className="w-10 h-10 text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-500/10"
          onClick={toggleTheme}
          aria-label="Change theme"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </Button>
        <Button
          variant="outline"
          className="text-sm font-medium tracking-wide px-4 py-2 rounded-full"
          onClick={toggleMenu}
        >
          {menuOpen ? "Close" : "Menu"}
        </Button>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 space-y-2 rounded-2xl border border-white/10 bg-white/80 dark:bg-black/70 backdrop-blur p-3 shadow-lg"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-xl px-3 py-2 text-sm font-medium hover:bg-white/60 hover:text-cyan-600 dark:hover:bg-white/10",
                  activeHref === item.href
                    ? "text-cyan-400"
                    : "text-slate-700 dark:text-slate-200"
                )}
                onClick={() => {
                  setActiveHref(item.href);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full bg-cyan-500/90 text-white hover:bg-cyan-400 px-4 py-2 rounded-full font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
