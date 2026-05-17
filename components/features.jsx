"use client";

import { FileText, TrendingUp, CheckCircle2, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: FileText,
    title: "AI Resume Builder",
    description:
      "Generate ATS-optimized resumes instantly. Our Gemini-powered engine refines your experience descriptions to stand out.",
    highlights: [
      "PDF Export",
      "ATS Optimized",
      "AI Refinement",
      "Multiple Templates",
    ],
  },
  {
    icon: TrendingUp,
    title: "Industry Insights",
    description:
      "Real-time market data showing top skills, salary ranges, and hiring trends updated weekly.",
    highlights: [
      "Weekly Updates",
      "Role Analytics",
      "Skill Recommendations",
      "Salary Benchmarks",
    ],
  },
  {
    icon: Briefcase,
    title: "Interview Preparation",
    description:
      "Practice with role-specific questions. Get AI-generated feedback and improvement tips after each session.",
    highlights: [
      "Adaptive Questions",
      "Instant Scoring",
      "AI Feedback",
      "Progress Tracking",
    ],
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 sm:py-32 relative bg-gradient-to-b from-background to-primary/3"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm font-semibold text-primary mb-2 block">
            POWERFUL FEATURES
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI-powered tools designed to transform your career
            preparation experience
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="group p-8 bg-white border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3">
                  {feature.highlights.map((highlight, hidx) => (
                    <li
                      key={hidx}
                      className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
