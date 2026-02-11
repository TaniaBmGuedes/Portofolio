import Home from "./Home";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contacts from "./Contacts";
import NavBar from "./Navbar";

export const Layout: React.FC = () => {
  return (
    <div className="overflow-x-hidden overflow-y-scroll h-screen snap-mandatory snap-y">
      <NavBar />

      <section id="home" className="snap-start h-screen">
        <Home />
      </section>
      <section id="aboutMe" className="snap-start h-screen">
        <AboutMe />
      </section>
      <section id="experience" className="snap-start h-screen">
        <Experience />
      </section>
      <section id="skills" className="snap-start h-screen">
        <Skills />
      </section>
      <section id="projects" className="snap-start h-screen">
        <Projects />
      </section>
      <section id="contacts" className="snap-start h-screen">
        <Contacts />
      </section>
    </div>
  );
};
