import { Button } from "@/components/ui/button";
import prisma from "@/prisma/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";
import Link from "next/link";
import EmptyNotePage from "./EmptyNotePage";
import Notes from "./Notes";
import Filter from "./Filter";
import { Label } from "@/components/ui/label";
import { Priority } from "@prisma/client";

export interface NoteQuery {
  priority: Priority;
}

interface Props {
  searchParams: NoteQuery;
}

const NotesPage = async ({ searchParams }: Props) => {
  const { userId } = auth();

  if (!userId) return null;

  const priorities = Object.values(Priority);

  const priority = priorities.includes(searchParams.priority)
    ? searchParams.priority
    : undefined;

  const notes = await prisma.note.findMany({
    where: {
      userId: userId,
      priority: priority,
    },
  });

  if (notes.length === 0 && !priority) return <EmptyNotePage />;

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
      <div className="mb-8 flex max-w-xs flex-col gap-2 ">
        <Label>Filter By Priority</Label>
        <Filter />
      </div>
      <Notes notes={notes} />
    </section>
  );
};

export const metadata: Metadata = {
  title: "NoteGPT | Notes",
};

export default NotesPage;
