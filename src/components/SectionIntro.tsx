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
    <div className="w-full bg-card/80 border border-card-border rounded-3xl py-6 px-6 sm:py-10 md:py-12 text-center shadow-sm">
      {/* Dynamic Section Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-3 sm:mb-4">{title}</h2>
      
      {/* Dynamic Section Description */}
      <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl">{description}</p>
    </div>
  );
}
