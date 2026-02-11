import Home from "./Home";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contacts from "./Contacts";
import NavBar from "./Navbar";

export const Layout: React.FC = () => {
  return (
    <div
      id="page-scroll"
      className="overflow-x-hidden overflow-y-scroll h-screen snap-mandatory snap-y"
    >
      <NavBar />

      <section id="home" className="snap-start h-screen">
        <div className="max-w-5xl mx-auto w-full h-full">
          <Home />
        </div>
      </section>
      <section id="aboutMe" className="snap-start h-screen">
        <div className="max-w-5xl mx-auto w-full h-full">
          <AboutMe />
        </div>
      </section>
      <section id="experience" className="snap-start h-screen">
        <div className="max-w-5xl mx-auto w-full h-full">
          <Experience />
        </div>
      </section>
      <section id="skills" className="snap-start h-screen">
        <div className="max-w-5xl mx-auto w-full h-full">
          <Skills />
        </div>
      </section>
      <section id="projects" className="snap-start h-screen">
        <div className="max-w-5xl mx-auto w-full h-full">
          <Projects />
        </div>
      </section>
      <section id="contacts" className="snap-start h-screen">
        <div className="max-w-5xl mx-auto w-full h-full">
          <Contacts />
        </div>
      </section>
    </div>
  );
};
