"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-background to-primary/3">
      {/* Gradient background orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl -z-10" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA card */}
          <div className="rounded-2xl border border-primary/20 bg-white p-12 sm:p-16 text-center space-y-8 shadow-lg">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center shadow-md">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance leading-tight">
              Ready to Transform Your{" "}
              <span className="text-primary">Career?</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Join 10,000+ professionals who have already landed their dream
              roles. Start your AI-powered journey today—completely free.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-12 w-full sm:w-auto font-semibold shadow-md cursor-pointer"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-12 font-semibold border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:text-[#000] bg-transparent cursor-pointer"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>No card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
