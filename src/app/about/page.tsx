import Skills from "@/components/Skills";
import Progress from "@/components/Progress";
import Stars from "@/components/Stars";

/**
 * About Page Component
 * Provides an in-depth look at the developer's background, philosophy, and detailed skill breakdown.
 * Integrates key performance metrics and a categorized expertise showcase.
 */
export default function About() {
  return (
    <div className="page-fade-in space-y-8 pb-12">
      {/* Background Animated Stars Effect */}
      <Stars />
      
      <div className="max-w-4xl mx-auto px-6 pt-12">
        {/* Header Section: Professional summary and intent */}
        <h1 className="text-4xl font-bold mb-6 italic border-b-4 border-primary inline-block text-center">About Me</h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          A dedicated Full-Stack Developer with a passion for building seamless digital experiences. 
          I combine technical excellence with creative problem-solving to deliver high-impact results.
        </p>

        {/* Biography Section: Detailed professional journey and specialization */}
        <div className="bg-card border border-card-border p-8 rounded-3xl space-y-6 shadow-sm">
          <p className="text-lg leading-relaxed">
            I am a <span className="text-primary font-semibold">Senior Full-Stack & Mobile Developer</span> with 4+ years of experience building production-grade web and mobile applications. My journey began with a curiosity about how the digital world operates — and evolved into mastering the entire product stack: from complex database schemas to pixel-perfect mobile UIs.
          </p>
          <p className="text-lg leading-relaxed">
            On the web front, I specialize in the <span className="text-primary font-semibold">MERN stack and Next.js</span>. For mobile, I build cross-platform <span className="text-primary font-semibold">Android & iOS apps</span> with <span className="text-primary font-semibold">React Native & Expo</span> — shipping applications that feel native, load fast, and provide a delightful user experience.
          </p>
          <p className="text-lg leading-relaxed">
            I believe that truly great software is invisible — it just works, solves real problems, and scales effortlessly. Every project I undertake receives my full attention regarding architecture, performance optimization, and intuitive UX.
          </p>
          <div className="pt-4 border-t border-card-border">
            <p className="text-lg leading-relaxed italic text-primary font-bold">
              "I don't just build apps — I engineer digital solutions that elevate businesses."
            </p>
          </div>
        </div>
      </div>

      {/* Skills Showcase: Visual categorization of technical proficiency */}
      <Skills />

      {/* Performance Metrics: Key project and career achievements */}
      <Progress />
    </div>
  );
}
