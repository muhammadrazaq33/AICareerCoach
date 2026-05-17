"use client";

import { Zap, Shield, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    stat: "< 5 seconds",
    description: "Generate complete resumes in under 5 seconds",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    stat: "100% Encrypted",
    description: "Your data is protected with enterprise-grade security",
  },
  {
    icon: Clock,
    title: "Save Time",
    stat: "70% faster",
    description: "Complete prep in hours instead of weeks",
  },
  {
    icon: Award,
    title: "Higher Success Rate",
    stat: "85% placement",
    description: "Users report significantly better interview outcomes",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-20 sm:py-32 relative bg-gradient-to-b from-background to-accent/3"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm font-semibold text-primary mb-2 block">
            MEASURABLE IMPACT
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Real Results. Proven Impact.
          </h2>
          <p className="text-lg text-muted-foreground">
            See the measurable impact on your career preparation and outcomes
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-xl bg-white border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Stat */}
                <div className="text-3xl font-bold text-primary mb-3">
                  {benefit.stat}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
