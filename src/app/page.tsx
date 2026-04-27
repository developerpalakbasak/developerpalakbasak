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
      <div className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 2xl:gap-16 p-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-1">
        {/* Hero Section: Main value proposition and 3D Spline scene */}
        <Hero />

        {/* Section Intro: Detailed professional summary */}
        <SectionIntro
          title="I Don't Just Write Code — I Build Products That Matter"
          description="Fullstack JavaScript/TypeScript Developer at ITScholarbd.com with 4+ years of experience shipping web and mobile apps. Specializing in React, Next.js, and React Native to build pixel-perfect solutions for Android & iOS."
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
