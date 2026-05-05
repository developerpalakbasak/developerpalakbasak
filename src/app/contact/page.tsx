import Contact from "@/components/Contact";

const infoCards = [
  {
    title: "Working Hours",
    details: [
      { text: "Saturday - Thursday: 9 AM - 5 PM BST (GMT+6)" },
      { text: "Available for urgent consultations after working hours." },
    ],
  },
  {
    title: "Collaboration FAQ",
    details: [
      { label: "Project Timeline", text: "1-2 weeks for landing pages, 4-8 weeks for full-scale apps." },
      { label: "Pricing", text: "Hourly or fixed-price based on project scope." },
    ],
  },
];

/**
 * Contact Page Component
 * Serves as the primary communication hub for potential clients and collaborators.
 */
export default function ContactPage() {
  return (
    <div className="page-fade-in">
      <div className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 2xl:gap-16 p-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-1 pb-12">
        <div className="pt-8 sm:pt-12 md:pt-16 2xl:pt-24">
          {/* Header Section: Encouragement for outreach */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-bold mb-4 sm:mb-6 italic border-b-4 border-primary inline-block text-center text-gradient">Get In Touch</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl text-muted-foreground leading-relaxed">
            Ready to start your next project? Fill out the form below or reach out via email.
            I typically respond within 24 hours.
          </p>
        </div>

        {/* Main Contact Form Component */}
        <Contact />

        {/* Additional Information Grid: Availability and quick FAQs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-card border border-card-border p-4 sm:p-6 md:p-8 lg:p-10 2xl:p-12 rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <h3 className="text-lg sm:text-xl 2xl:text-3xl font-bold mb-4 text-primary">{card.title}</h3>
              {card.details.map((detail, i) => (
                <p
                  key={i}
                  className={`text-muted-foreground ${card.title.includes("FAQ") ? "text-sm mb-2 last:mb-0" : ""}`}
                >
                  {detail.label && <strong>{detail.label}: </strong>}
                  {detail.text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
