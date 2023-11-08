import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

const SignInPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <SignIn appearance={{ variables: { colorPrimary: "#0f172a" } }} />
    </section>
  );
};

export const metadata: Metadata = {
  title: "NoteGPT | SignIn",
};

export default SignInPage;
