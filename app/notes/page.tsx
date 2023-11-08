import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

const NotesPage = () => {
  return (
    <section>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold md:text-4xl ">Notes</h1>
        <Link href="/notes/new">
          <Button size="sm" variant="outline">
            Create Note
          </Button>
        </Link>
      </header>
    </section>
  );
};

export const metadata: Metadata = {
  title: "NoteGPT | Notes",
};

export default NotesPage;
