import Spiner from "@/components/Spiner";

/**
 * ProfileCard Component
 * A featured summary card displaying the developer's identity, technical orbit (Spiner), and platform expertise.
 * Utilizes high-end visual effects like glowing gradients and scale-aware responsiveness.
 */
export default function ProfileCard() {
  return (
    <div className="w-full py-6 px-6 bg-card/80 border border-card-border rounded-3xl flex flex-col md:flex-row items-center gap-6 md:gap-8 overflow-hidden shadow-2xl relative">
      {/* Decorative Glow Backgrounds */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Left Column: Interactive Technical Orbit (Spiner) */}
      <div className="w-full md:w-3/5 flex items-center justify-center scale-[0.45] sm:scale-60 md:scale-65 lg:scale-70 xl:scale-75">
        <Spiner />
      </div>

      {/* Right Column: Identity, Portrait, and Core Focus Areas */}
      <div className="w-full md:w-2/5 flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10">
        <div className="w-full max-w-[240px] sm:max-w-[250px] md:max-w-[260px] lg:max-w-[280px] xl:max-w-[300px] space-y-4 flex flex-col items-center md:items-start md:pl-10">
          
          {/* Identity Title with high-contrast gradient text */}
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-black tracking-tighter bg-gradient-to-br from-primary via-emerald-500 to-cyan-600 bg-clip-text text-transparent drop-shadow-md py-1 whitespace-nowrap">
            Palak Basak
          </h1>

          <div className="relative w-full">
            {/* Visual connector: Glowing vertical line for structural flow */}
            <div className="absolute left-2 top-0 bottom-0 w-1 rounded-full hidden md:block opacity-90 animate-glow-cycle" />

            {/* Profile Portrait with interactive glow effect */}
            <div className="relative group w-full ml-10">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-cyan-500 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-50 transition duration-700" />
              <img
                src="/palakbasak.jpg"
                alt="Palak Basak"
                className="relative w-full object-cover rounded-[2.5rem] shadow-2xl border-4 border-primary/10 transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Professional Credentials & Platform Badges */}
          <div className="space-y-4 w-full pt-2">
            <p className="text-base sm:text-lg lg:text-xl font-black text-foreground/80 tracking-widest uppercase pl-2">
              Senior Developer
            </p>
            <div className="flex flex-wrap gap-2 pl-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">Web</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Android</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-500/10 text-slate-300 border border-slate-500/20">iOS</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">React Native</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
