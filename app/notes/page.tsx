import { Button } from "@/components/ui/button";
import prisma from "@/prisma/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";
import Link from "next/link";
import EmptyNotePage from "./EmptyNotePage";
import Notes from "./Notes";

const NotesPage = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const notes = await prisma.note.findMany({
    where: {
      userId: userId,
    },
  });

  if (notes.length === 0) return <EmptyNotePage />;

  return (
    <section>
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold md:text-4xl ">Notes</h1>
        <Link href="/notes/new">
          <Button size="sm" variant="outline">
            Create Note
          </Button>
        </Link>
      </header>
      <Notes notes={notes} />
    </section>
  );
};

export const metadata: Metadata = {
  title: "NoteGPT | Notes",
};

export default NotesPage;
