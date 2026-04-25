import Contact from "@/components/Contact";

/**
 * Contact Page Component
 * Serves as the primary communication hub for potential clients and collaborators.
 */
export default function ContactPage() {
  return (
    <div className="page-fade-in space-y-8 pb-12">
      <div className="max-w-4xl mx-auto px-6 pt-12">
        {/* Header Section: Encouragement for outreach */}
        <h1 className="text-4xl font-bold mb-6 italic border-b-4 border-primary inline-block text-center text-gradient">Get In Touch</h1>
        <p className="text-xl text-muted-foreground">
          Ready to start your next project? Fill out the form below or reach out via email.
          I typically respond within 24 hours.
        </p>
      </div>

      {/* Main Contact Form Component */}
      <Contact />

      {/* Additional Information Grid: Availability and quick FAQs */}
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Working Hours Card */}
        <div className="bg-card border border-card-border p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl">
          <h3 className="text-xl font-bold mb-4 text-primary">Working Hours</h3>
          <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM EST</p>
          <p className="text-muted-foreground">Available for urgent consultations on weekends.</p>
        </div>

        {/* Quick FAQ Card: Project logistics at a glance */}
        <div className="bg-card border border-card-border p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl">
          <h3 className="text-xl font-bold mb-4 text-primary">Collaboration FAQ</h3>
          <p className="text-sm text-muted-foreground mb-2"><strong>Project Timeline:</strong> 1-2 weeks for landing pages, 4-8 weeks for full-scale apps.</p>
          <p className="text-sm text-muted-foreground"><strong>Pricing:</strong> Hourly or fixed-price based on project scope.</p>
        </div>
      </div>
    </div>
  );
}
