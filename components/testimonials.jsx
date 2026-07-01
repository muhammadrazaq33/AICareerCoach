"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Tech Corp",
    content:
      "CareerForge AI helped me land my dream job at a top tech company. The AI resume builder was incredibly intuitive, and the mock interviews gave me the confidence I needed.",
    rating: 5,
    image: "👩‍💻",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "Innovation Labs",
    content:
      "The industry insights feature is game-changing. I was able to understand the market demand for my skills and negotiated a 30% higher salary because of the data insights.",
    rating: 5,
    image: "👨‍💼",
  },
  {
    name: "Emily Rodriguez",
    role: "Data Scientist",
    company: "AI Solutions Inc",
    content:
      "Within 3 weeks of using CareerForge AI, I got interview calls from 5 different companies. The platform is genuinely useful and the AI feedback is spot-on.",
    rating: 5,
    image: "👩‍🔬",
  },
  {
    name: "David Park",
    role: "UX Designer",
    company: "Creative Studios",
    content:
      "The adaptive mock interviews helped me prepare for real interviews better than anything else I tried. Highly recommended for anyone serious about their career growth.",
    rating: 5,
    image: "👨‍🎨",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-32 relative bg-gradient-to-b from-background to-primary/2"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm font-semibold text-primary mb-2 block">
            WHAT USERS SAY
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Trusted by Professionals
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from job seekers who have successfully transformed their
            careers with our platform
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="p-6 bg-white border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
