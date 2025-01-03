import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Contact from "./Contact";
import AboutMe from "./About";
import Services from "./Services";
import Experience from "./Experience";
import Projects from "./Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <hr />
      <AboutMe />
      <hr />
      <Services />
      <hr />
      <Experience />
      <hr />
      <Projects />
      <hr />
      <Contact />
    </>
  );
}

export default App;
