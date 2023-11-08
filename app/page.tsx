import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";
export default function Home() {
  return (
    <main className="bg-home-bg flex h-screen flex-col items-center justify-center gap-6 bg-slate-800 bg-cover bg-center bg-no-repeat px-4">
      <h1 className="text-center text-4xl font-bold text-slate-100 md:text-5xl lg:text-6xl ">
        AI Powered Note Taking App
      </h1>
      <section className="flex  flex-col items-center justify-center gap-4 sm:flex-row">
        <header className="flex flex-col items-center gap-2  sm:flex-row">
          <Image
            className="drop-shadow-xl"
            src={logo}
            alt="Logo"
            width={100}
            height={100}
          />
          <h1 className="text-2xl font-bold md:text-4xl ">
            Note<span className=" text-lime-600">GPT</span>
          </h1>
        </header>

        <Link href="/notes">
          <Button className="font-semibold" size="lg" variant="outline">
            Get Started
          </Button>
        </Link>
      </section>
    </main>
  );
}
