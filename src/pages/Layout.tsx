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
      className="overflow-x-hidden overflow-y-scroll h-screen"
    >
      <NavBar />

      <section id="home" className="min-h-screen">
        <div className="max-w-5xl mx-auto w-full h-full">
          <Home />
        </div>
      </section>
      <section id="aboutMe" className="min-h-screen">
        <div className="max-w-5xl mx-auto w-full h-full">
          <AboutMe />
        </div>
      </section>
      <section id="experience" className="min-h-screen">
        <div className="max-w-5xl mx-auto w-full h-full">
          <Experience />
        </div>
      </section>
      <section id="skills" className="min-h-screen">
        <div className="max-w-5xl mx-auto w-full h-full">
          <Skills />
        </div>
      </section>
      <section id="projects" className="min-h-screen">
        <div className="max-w-5xl mx-auto w-full h-full">
          <Projects />
        </div>
      </section>
      <section id="contacts" className="min-h-screen">
        <div className="max-w-5xl mx-auto w-full h-full">
          <Contacts />
        </div>
      </section>
    </div>
  );
};
