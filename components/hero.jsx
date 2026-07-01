"use client";

import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Gradient background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-primary/8 border border-primary/20 hover:border-primary/40 transition-all">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              AI-Powered Career Transformation
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-pretty text-foreground leading-tight tracking-tight">
            Master Your Career <br /> with{" "}
            <span className="text-primary">AI Intelligence</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Transform your job search with intelligent resume generation,
            real-time industry insights, and adaptive mock interviews. All
            powered by advanced AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href={"/dashboard"}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-12 font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href={"/demo"}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-12 font-semibold border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:text-[#000] bg-transparent cursor-pointer"
              >
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Stats row */}
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Job Seekers</div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
