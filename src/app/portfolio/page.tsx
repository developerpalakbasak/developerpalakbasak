import Projects from "@/components/Projects";

const expertiseData = [
  {
    title: "Scalable SaaS Architectures",
    description: "Multi-tenant systems with secure data isolation, performance-optimized APIs, and dashboards that handle real-world traffic without breaking a sweat.",
  },
  {
    title: "Mobile App Projects",
    description: "Cross-platform React Native apps for Android & iOS — social platforms, productivity tools, e-commerce apps — with smooth animations and native-feel navigation.",
  },
  {
    title: "Modern E-commerce Platforms",
    description: "Lightning-fast storefronts with Next.js, real-time inventory sync, admin panels, and payment gateway integrations that convert visitors into buyers.",
  },
  {
    title: "Real-time & Cloud Apps",
    description: "Chat apps, live dashboards, and collaborative tools powered by WebSockets, deployed with Docker and Nginx for zero-downtime reliability.",
  },
];

/**
 * Portfolio Page Component
 * Displays a curated list of projects and key areas of architectural expertise.
 */
export default function Portfolio() {
  return (
    <div className="page-fade-in">
      <div className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 2xl:gap-16 p-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-1 pb-12">
        {/* Header Section: Statement of quality and impact */}
        <div className="pt-8 sm:pt-12 md:pt-16 2xl:pt-24">
          <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-bold mb-4 sm:mb-6 italic border-b-4 border-primary inline-block text-center text-gradient">
            My Portfolio
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl text-muted-foreground leading-relaxed">
            Real projects. Real results. A showcase of web apps, mobile apps, and
            full-stack systems built with precision — each one a story of a problem
            solved and a client delighted.
          </p>
        </div>

        {/* Primary Projects Section: Detailed project cards and filters */}
        <Projects />

        {/* Expertise Summary Grid: Highlights specific development niches and value propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-card-border p-4 sm:p-6 md:p-8 lg:p-10 2xl:p-12 rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-4xl font-bold mb-3 text-primary">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
