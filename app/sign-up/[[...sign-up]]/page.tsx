import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

const SignUpPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <SignUp appearance={{ variables: { colorPrimary: "#0f172a" } }} />
    </section>
  );
};

export const metadata: Metadata = {
  title: "NoteGPT | SingUp",
};

export default SignUpPage;
