import { Button } from "@/components/ui/button";
import prisma from "@/prisma/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";
import Link from "next/link";
import NoteCard from "./_components/NoteCard";

const NotesPage = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const notes = await prisma.note.findMany({
    where: {
      userId: userId,
    },
  });

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
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {notes.map((note) => (
          <Link href={`/notes/${note.id}`} key={note.id}>
            <NoteCard note={note} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export const metadata: Metadata = {
  title: "NoteGPT | Notes",
};

export default NotesPage;
