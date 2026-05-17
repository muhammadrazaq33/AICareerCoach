import { industries } from "@/data/industries";
import React from "react";
import { OnboardingForm } from "./_components/onboarding-form";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import { checkUser } from "@/lib/checkUser";

const OnboardingPage = async () => {
  await checkUser();
  //check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
};

export default OnboardingPage;

// onboarding
