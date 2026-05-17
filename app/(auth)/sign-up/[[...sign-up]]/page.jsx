import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="text-white">
      <SignUp
        // routing="path"
        // path="/sign-up"
        // signInUrl="/sign-in"
        forceRedirectUrl="/onboarding"
      />
    </div>
  );
};

export default Page;
