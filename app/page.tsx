import Hero from "./Components/Hero";
import { ContactUs } from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Awards from "./Components/Awards";



export default function Home() {
  return (
    <div className=" text-white  bg-[#1a1a1a]">
     
  
      
      <section id="hero">
 <Hero/>
      </section>

      <section id="about">
        <AboutMe/>
      </section>

      <section id="about">
        <Awards/>
      </section>


      <section id="projects">
        <Projects/>
      </section>

      <section id="skills">
        <Skills/>
      </section>

      <section id="contact">
        <ContactUs/>
      </section>
      <Footer/>
    </div>
  );
}
