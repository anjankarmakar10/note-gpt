import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-wrap">
      <div className="mb-10 w-full sm:w-8/12">
        <div className="container mx-auto h-full sm:p-10">
          <section className="flex items-center justify-between px-4">
            <div className="flex items-center gap-1 text-4xl font-bold">
              <Image
                className="drop-shadow-xl"
                src={logo}
                alt="Logo"
                width={80}
                height={80}
              />
              Note<span className="text-green-700">GPT.</span>
            </div>
            <div>
              <img
                src="https://image.flaticon.com/icons/svg/497/497348.svg"
                alt=""
                className="w-8"
              />
            </div>
          </section>
          <header className="container mt-10 h-full items-center px-4 lg:mt-0 lg:flex">
            <div className="w-full">
              <h1 className="text-4xl font-bold lg:text-6xl">
                Enhanced by Dynamic Conversations with {""}
                <span className="text-green-700">AI</span>
              </h1>
              <div className="my-4 h-2 w-20 bg-green-700"></div>
              <p className="mb-10 text-xl">
                Experience the future of note-taking with Note GPT! Transform
                your notes into dynamic conversations with Note GPT. Talk to
                your data and experience productivity like never before.
              </p>
              <Link href="/notes">
                <Button
                  size="lg"
                  className="rounded bg-green-600 px-4 py-4 text-2xl font-medium text-white shadow dark:hover:bg-slate-700"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </header>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt="Leafs"
        className="h-48 w-full object-cover sm:h-screen sm:w-4/12"
      />
    </main>
  );
}
