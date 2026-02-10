import "./App.css";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
//TODO: NAVARBAR;SCROLL and THEME
function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
}

export default App;
