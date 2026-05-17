import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="text-white">
      <SignIn />
    </div>
  );
};

export default Page;
