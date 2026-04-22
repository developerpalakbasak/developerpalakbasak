import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Progress from "@/components/Progress";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GlobalPreloader from "@/components/GlobalPreloader";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <GlobalPreloader />
      <Navbar />
      <Hero />
      <ScrollReveal><Progress/></ScrollReveal>
      <ScrollReveal><Offer/></ScrollReveal>
      <ScrollReveal><Projects/></ScrollReveal>
      <ScrollReveal><Skills/></ScrollReveal>
      <ScrollReveal><Contact/></ScrollReveal>
      <ScrollReveal><Footer/></ScrollReveal>

    </div>
  );
}
