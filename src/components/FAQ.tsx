import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I register for the event?",
      answer: "Click the 'Register Now' button on this page and complete the online registration form. You'll receive a confirmation email with your unique registration ID and further instructions.",
    },
    {
      question: "When and where can I collect my race bib?",
      answer: "Bib collection will be available at Jawaharlal Nehru Stadium on 27th and 28th February 2026, from 10 AM to 6 PM. Please bring a valid ID and your registration confirmation.",
    },
    {
      question: "What are the age criteria for different categories?",
      answer: "21 KM Half Marathon: 16+, 10 KM Impact Run: 16+, 5 KM Speed Run: 14+, 2.5 KM Fun Run: Open to all ages. Age will be calculated as on the event date (1 March 2026).",
    },
    {
      question: "What safety protocols are in place?",
      answer: "We have medical support units stationed every 2 KM, ambulances on standby, trained first-aid volunteers, and emergency response teams. All participants are covered under event insurance.",
    },
    {
      question: "What is the refund and transfer policy?",
      answer: "Registrations are non-refundable but can be transferred to another person up to 7 days before the event. Please contact our support team for transfer requests.",
    },
    {
      question: "Where can I find the route map?",
      answer: "The detailed route map will be shared via email 7 days before the event and will be available on our website. All routes are certified and start/finish at Jawaharlal Nehru Stadium.",
    },
    {
      question: "Is parking available at the venue?",
      answer: "Yes, designated parking areas will be available at the stadium. We recommend carpooling or using public transport. Detailed parking information will be sent before the event.",
    },
    {
      question: "How many hydration and aid stations will be there?",
      answer: "Hydration stations are placed every 2 KM along all routes. We encourage BYOB (Bring Your Own Bottle) to reduce plastic waste. Refill stations will have water and electrolyte drinks.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about The Capital Run
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border hover:border-primary transition-smooth rounded-xl px-6 data-[state=open]:shadow-orange"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
