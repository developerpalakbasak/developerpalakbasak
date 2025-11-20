import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Progress from "@/components/Progress";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative">

      <Navbar />
      <Hero />
      <Progress/>
      <Offer/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>

    </div>
  );
}
