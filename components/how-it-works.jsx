"use client";

import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Share your professional details, experience, and career goals. Our smart form guides you through the process.",
  },
  {
    number: "02",
    title: "Generate Resume",
    description:
      "Let AI create your ATS-optimized resume. Refine descriptions with a single click using AI enhancement.",
  },
  {
    number: "03",
    title: "Explore Insights",
    description:
      "Discover top skills, salary ranges, and trends for your target role. Stay ahead of market demands.",
  },
  {
    number: "04",
    title: "Practice Interviews",
    description:
      "Take adaptive mock interviews. Get instant scoring and AI-generated improvement tips to excel.",
  },
  {
    number: "05",
    title: "Track Progress",
    description:
      "Monitor your improvement across all modules. Share results and celebrate milestones.",
  },
  {
    number: "06",
    title: "Land Your Job",
    description:
      "Apply with confidence using your enhanced profile. Track applications and interviews in one place.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="solutions"
      className="py-20 sm:py-32 relative bg-gradient-to-b from-background to-secondary/3"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm font-semibold text-primary mb-2 block">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Six Steps to Success
          </h2>
          <p className="text-lg text-muted-foreground">
            A seamless journey from profile creation to landing your dream job
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative">
              <Card className="p-8 bg-white border border-primary/10 h-full hover:border-primary/30 hover:shadow-lg transition-all">
                {/* Step number */}
                <div className="text-7xl font-bold text-primary/15 group-hover:text-primary/25 transition-all mb-4">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 -mt-8 relative z-10">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow indicator */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-md">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
