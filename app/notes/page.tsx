import { Button } from "@/components/ui/button";
import prisma from "@/prisma/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";
import Link from "next/link";
import EmptyNotePage from "./EmptyNotePage";
import Notes from "./Notes";
import { Priority } from "@prisma/client";
import Filters from "./Filters";

export interface NoteQuery {
  priority: Priority;
  orderByTitle: string;
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

  const orders = Object.values({
    a: "asc",
    d: "desc",
  });

  const order = orders.includes(searchParams.orderByTitle)
    ? searchParams.orderByTitle === "asc"
      ? "asc"
      : "desc"
    : undefined;

  const notes = await prisma.note.findMany({
    where: {
      userId: userId,
      priority: priority,
    },
    orderBy: { title: order },
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
      <Filters />
      <Notes notes={notes} />
    </section>
  );
};

export const metadata: Metadata = {
  title: "NoteGPT | Notes",
};

export default NotesPage;
