import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";

export default function Home() {
  return (
     <>
      <Hero />
      <About />
      <Services />  
      <Projects/>   
      <Contact />
    </>
  );
}