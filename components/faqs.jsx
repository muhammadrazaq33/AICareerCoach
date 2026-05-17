"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI Resume Builder work?",
    answer:
      "Our AI Resume Builder analyzes your professional details and automatically generates an ATS-optimized resume. Simply input your experience, education, and skills, and our Gemini AI will refine the content to highlight your achievements in the best way possible. You can then export it as a PDF in seconds.",
  },
  {
    question: "Can I use the platform for free?",
    answer:
      "Yes! We offer a 30-day free trial with full access to all features. No credit card is required to get started. After the trial, you can choose a paid plan that suits your needs, or continue with our free tier with limited features.",
  },
  {
    question: "How often is the industry insights data updated?",
    answer:
      "Our Industry Insights Dashboard is updated weekly using our automated cron job. We analyze real-time job market data to provide you with the most current salary ranges, top skills, and market trends for your target role.",
  },
  {
    question: "How does the Mock Interview feature work?",
    answer:
      "The Mock Interview generates role-specific questions tailored to your target position. You answer up to 10 questions, and our AI evaluates your responses, providing an objective score and personalized improvement tips to help you prepare better for real interviews.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Absolutely! We use industry-leading security measures with Clerk for authentication and Neon PostgreSQL for data storage. All your personal information is encrypted and protected according to the highest standards. We never share your data with third parties.",
  },
  {
    question: "Can I export my resume in different formats?",
    answer:
      "Currently, we support PDF export with ATS-compliant formatting. The PDF is fully customizable before download, allowing you to adjust fonts, colors, and layout to match your preferences.",
  },
  {
    question: "What companies are using CareerHub AI?",
    answer:
      "Our platform is trusted by over 500 companies globally and has helped 10,000+ professionals land their dream jobs. From startups to Fortune 500 companies, recruiters and HR teams use our insights to understand the job market better.",
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "You can cancel your subscription anytime from your account settings with just one click. No questions asked, no hidden charges. If you cancel within your billing cycle, you'll have access until the end of that period.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-32 relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary mb-2 block">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about CareerHub AI and how it can
            help your career journey
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full border-y border-primary/10"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-primary/10 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional help section */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Didn't find what you're looking for?
          </p>
          <a
            href="#"
            className="text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
}
