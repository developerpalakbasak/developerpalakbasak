import Offer from "@/components/Offer";
import Stars from "@/components/Stars";

/**
 * Services Page Component
 * Detailed breakdown of the developer's professional offerings across different platforms.
 */
export default function Services() {
  return (
    <div className="page-fade-in space-y-8">
      {/* Background Animated Stars Effect */}
      <Stars />
      
      <div className="max-w-4xl mx-auto px-6 pt-12">
        {/* Header Section: High-level overview of services */}
        <h1 className="text-4xl font-bold mb-6 italic border-b-4 border-primary inline-block text-center">
          Services
        </h1>
        <p className="text-xl text-muted-foreground">
          One developer, the full stack — web apps, mobile apps, and desktop software. I deliver
          end-to-end solutions that are fast to ship, easy to scale, and built to impress.
        </p>
      </div>

      {/* Detailed Services Component: Tabs for Web, Mobile, and Desktop details */}
      <Offer />
    </div>
  );
}
