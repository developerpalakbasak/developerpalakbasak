import Contact from "@/components/Contact";

/**
 * Contact Page Component
 * Serves as the primary communication hub for potential clients and collaborators.
 */
export default function ContactPage() {
  return (
    <div className="page-fade-in space-y-8 pb-12">
      <div className="max-w-4xl 2xl:max-w-6xl mx-auto p-2 sm:px-6 pt-8 sm:pt-12 md:pt-16 2xl:pt-24">
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
      <div className="max-w-4xl 2xl:max-w-6xl mx-auto p-2 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
        {/* Working Hours Card */}
        <div className="bg-card border border-card-border p-2 sm:p-4 md:p-6 lg:p-8 2xl:p-12 rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] shadow-sm">
          <h3 className="text-lg sm:text-xl 2xl:text-3xl font-bold mb-4 text-primary">Working Hours</h3>
          <p className="text-muted-foreground">Saturday - Thursday: 9 AM - 5 PM BST (GMT+6)</p>
          <p className="text-muted-foreground">Available for urgent consultations after working hours.</p>
        </div>

        {/* Quick FAQ Card: Project logistics at a glance */}
        <div className="bg-card border border-card-border p-2 sm:p-4 md:p-6 lg:p-8 2xl:p-12 rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] shadow-sm">
          <h3 className="text-lg sm:text-xl 2xl:text-3xl font-bold mb-4 text-primary">Collaboration FAQ</h3>
          <p className="text-sm text-muted-foreground mb-2"><strong>Project Timeline:</strong> 1-2 weeks for landing pages, 4-8 weeks for full-scale apps.</p>
          <p className="text-sm text-muted-foreground"><strong>Pricing:</strong> Hourly or fixed-price based on project scope.</p>
        </div>
      </div>
    </div>
  );
}
