import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4">
      <section className="flex h-full min-h-screen flex-col  items-center justify-center gap-4">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold md:text-4xl ">
            Note<span className=" text-lime-600">GPT</span>
          </h1>
        </header>
        <div>
          <Link href="/notes">
            <Button size="lg" variant="outline">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
