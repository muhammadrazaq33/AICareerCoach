import { getUserOnboardingStatus } from "@/actions/user";
import Benefits from "@/components/benefits";
import CTA from "@/components/cta";
import FAQ from "@/components/faqs";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}
