import Skills from "@/components/Skills";
import Progress from "@/components/Progress";

/**
 * About Page Component
 * Provides an in-depth look at the developer's background, philosophy, and detailed skill breakdown.
 * Integrates key performance metrics and a categorized expertise showcase.
 */
export default function About() {
  return (
    <div className="page-fade-in">
      <div className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 2xl:gap-16 p-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-1 pb-12">
        {/* Header Section: Professional summary and intent */}
        <div className="pt-8 sm:pt-12 md:pt-16 2xl:pt-24">
          <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-bold mb-4 sm:mb-6 italic border-b-4 border-primary inline-block text-center text-gradient">About Me</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl text-muted-foreground leading-relaxed">
            A dedicated Full-Stack Developer with a passion for building seamless digital experiences.
            I combine technical excellence with creative problem-solving to deliver high-impact results.
          </p>
        </div>

        {/* Biography Section: Detailed professional journey and specialization */}
        <div className="bg-card border border-card-border p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 py-8 sm:py-12 md:py-16 2xl:py-24 rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] space-y-6 shadow-sm">
          <p className="text-sm sm:text-base lg:text-lg 2xl:text-2xl leading-relaxed">
            I am a <span className="text-primary font-semibold">Senior Full-Stack & Mobile Developer</span> with 4+ years of experience building production-grade web and mobile applications. My journey began with a curiosity about how the digital world operates — and evolved into mastering the entire product stack: from complex database schemas to pixel-perfect mobile UIs.
          </p>
          <p className="text-sm sm:text-base lg:text-lg 2xl:text-2xl leading-relaxed">
            On the web front, I specialize in the <span className="text-primary font-semibold">MERN stack and Next.js</span>. For mobile, I build cross-platform <span className="text-primary font-semibold">Android & iOS apps</span> with <span className="text-primary font-semibold">React Native & Expo</span> — shipping applications that feel native, load fast, and provide a delightful user experience.
          </p>
          <p className="text-sm sm:text-base lg:text-lg 2xl:text-2xl leading-relaxed">
            I believe that truly great software is invisible — it just works, solves real problems, and scales effortlessly. Every project I undertake receives my full attention regarding architecture, performance optimization, and intuitive UX.
          </p>
          <div className="pt-4 border-t border-card-border">
            <p className="text-base sm:text-lg lg:text-xl 2xl:text-3xl leading-relaxed italic text-primary font-bold">
              "I don't just build apps — I engineer digital solutions that elevate businesses."
            </p>
          </div>
        </div>

        {/* Skills Showcase: Visual categorization of technical proficiency */}
        <Skills />

        {/* Performance Metrics: Key project and career achievements */}
        <Progress />
      </div>
    </div>
  );
}
