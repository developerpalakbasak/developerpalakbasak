import Spiner from "@/components/Spiner";
import { GoDotFill } from "react-icons/go";

/**
 * ProfileCard Component
 * A featured summary card displaying the developer's identity, technical orbit (Spiner), and platform expertise.
 * Utilizes high-end visual effects like glowing gradients and scale-aware responsiveness.
 */
export default function ProfileCard() {
  return (
    <section className="w-full flex flex-col items-center gap-10">
      {/* Section Header: Styled exactly like the UnifiedSkills section */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight max-w-3xl">
          Mastering the <span className="text-gradient">Digital Realm</span>
        </h2>

        <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-sm sm:text-lg leading-relaxed">
          From the core of the server to the palm of your hand, I build integrated ecosystems that are fast, secure, and beautiful across every device.
        </p>
      </div>
      <div className="w-full py-4 sm:py-4 bg-card/80 border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl flex flex-col items-center gap-2 sm:gap-4 overflow-hidden shadow-2xl relative">
        {/* Top Badge: Featured identity label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 group cursor-default">
          <GoDotFill className="text-primary animate-pulse group-hover:scale-125 transition-transform" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Full-Stack Identity</span>
        </div>

        {/* Content Container: Wraps the interactive orbit and the bio section */}
        <div className="w-full flex flex-col md:flex-row items-center gap-2 sm:gap-8">
        {/* Decorative Glow Backgrounds: Optimized for mobile performance */}
        <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-[40px] sm:blur-[120px] pointer-events-none" />

        {/* Left Column: Interactive Technical Orbit (Spiner) - Hidden on mobile for performance */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center scale-[0.4] sm:scale-75 md:scale-80 lg:scale-90 xl:scale-100 h-[180px] sm:h-auto">

          <Spiner />
        </div>

        {/* Right Column: Identity, Portrait, and Core Focus Areas */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10">
          <div className="w-full max-w-[240px] sm:max-w-[250px] md:max-w-[260px] lg:max-w-[280px] xl:max-w-[300px] space-y-4 flex flex-col items-center md:items-start md:pl-10">


            {/* Identity Title with high-contrast gradient text */}
            <h1 className="text-xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black tracking-tighter text-gradient drop-shadow-md py-1 whitespace-nowrap">
              Palak Basak
            </h1>

            <div className="relative w-full flex justify-center">
              {/* Visual connector: Glowing vertical line for structural flow */}
              <div className="absolute -left-1 sm:left-2 top-0 bottom-0 w-1 rounded-full block opacity-90 animate-glow-cycle" />

              {/* Profile Portrait with interactive glow effect */}
              <div className="relative group w-full max-w-[180px] sm:max-w-full md:ml-10">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-cyan-500 rounded-[1.5rem] sm:rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-50 transition duration-700" />
                <img
                  src="/palakbasak.webp"
                  alt="Palak Basak"
                  className="relative w-full aspect-square sm:aspect-auto object-cover rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl border-4 border-primary/10 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Professional Credentials & Platform Badges */}
            <div className="space-y-3 sm:space-y-4 w-full pt-2">
              <p className="text-xs sm:text-lg lg:text-xl font-black text-foreground/80 tracking-widest uppercase pl-2">
                Senior Developer
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pl-2">
                <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Web</span>
                <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Android</span>
                <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-500/10 text-slate-300 border border-slate-500/20">iOS</span>
                <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">React Native</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
