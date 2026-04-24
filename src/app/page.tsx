import Hero from "@/components/Hero";
import ProfileCard from "@/components/ProfileCard";
import SectionIntro from "@/components/SectionIntro";
import UnifiedSkills from "@/components/UnifiedSkills";
import FAQ from "@/components/FAQ";

/**
 * Main Home Page Component
 * Displays the core identity, expertise, and services of the developer.
 */
export default function Home() {
  return (
    <div className="page-fade-in">
      <div className="w-[95%] md:w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-6 py-1">
        {/* Hero Section: Main value proposition and 3D Spline scene */}
        <Hero />

        {/* Section Intro: Detailed professional summary */}
        <SectionIntro
          title="I Don't Just Write Code — I Build Products That Matter"
          description="Senior Full-Stack & Mobile Developer with 4+ years of experience shipping web and mobile apps that users love. From scalable MERN backends to pixel-perfect React Native apps on Android & iOS — if you can imagine it, I can build it."
        />

        {/* Profile Section: Personal branding and social links */}
        <ProfileCard />

        {/* Unified Services Section: Showcasing Web, Mobile, and Desktop expertise */}
        <UnifiedSkills />

        {/* FAQ Section: Addressing common client inquiries */}
        <FAQ />
      </div>
    </div>
  );
}
