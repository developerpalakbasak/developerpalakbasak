import Offer from "@/components/Offer";

/**
 * Services Page Component
 * Detailed breakdown of the developer's professional offerings across different platforms.
 */
export default function Services() {
  return (
    <div className="page-fade-in space-y-8">
      <div className="max-w-4xl 2xl:max-w-6xl mx-auto p-2 sm:px-6 pt-8 sm:pt-12 md:pt-16 2xl:pt-24">
        {/* Header Section: High-level overview of services */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-bold mb-4 sm:mb-6 italic border-b-4 border-primary inline-block text-center text-gradient">
          Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl text-muted-foreground leading-relaxed">
          One developer, the full stack — web apps, mobile apps, and desktop software. I deliver
          end-to-end solutions that are fast to ship, easy to scale, and built to impress.
        </p>
      </div>

      {/* Detailed Services Component: Tabs for Web, Mobile, and Desktop details */}
      <Offer />
    </div>
  );
}
