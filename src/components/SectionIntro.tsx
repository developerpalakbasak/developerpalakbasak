interface SectionIntroProps {
  title: string;
  description: string;
}

/**
 * SectionIntro Component
 * A reusable header section for large content blocks, featuring a bold title and descriptive text.
 */
export default function SectionIntro({ title, description }: SectionIntroProps) {
  return (
    <div className="w-full bg-card border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 py-8 sm:py-12 md:py-16 2xl:py-24 text-center shadow-sm">
      {/* Dynamic Section Title */}
      <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-5xl font-bold mb-3 sm:mb-4 2xl:mb-8 text-gradient">{title}</h2>
      
      {/* Dynamic Section Description */}
      <p className="text-muted-foreground text-xs sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-2xl 2xl:leading-loose 2xl:max-w-5xl 2xl:mx-auto">{description}</p>
    </div>
  );
}
