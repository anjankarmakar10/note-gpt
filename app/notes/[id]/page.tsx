import { Button } from "@/components/ui/button";
import prisma from "@/prisma/prisma";
import Link from "next/link";
import Markdown from "react-markdown";
import DeleteNoteAction from "../_components/DeleteNoteAction";
import { cache } from "react";

interface Props {
  params: {
    id: string;
  };
}

const fetchNote = cache((noteId: string) =>
  prisma.note.findUnique({
    where: {
      id: noteId,
    },
  }),
);

const NotePage = async ({ params }: Props) => {
  const note = await fetchNote(params.id);

  if (!note) return null;

  const wasUpdated = note.updatedAt > note.createdAt;

  const createdUpdateAtTimestamp = (
    wasUpdated ? note.updatedAt : note.createdAt
  ).toDateString();

  return (
    <section className="mx-auto flex max-w-4xl grid-cols-12 flex-col gap-8 pt-8 lg:grid lg:gap-1">
      <article className="col-span-10">
        <header className=" mb-8 flex flex-col gap-2">
          <h1 className="max-w-3xl text-2xl font-bold leading-normal md:text-3xl">
            {note?.title}
          </h1>
          <p className="text-muted-foreground">{createdUpdateAtTimestamp}</p>
        </header>

        <div className="prose">
          <Markdown>{note?.description}</Markdown>
        </div>
      </article>
      <div className="col-span-2 flex flex-col gap-2">
        <Button asChild className="font-medium" variant="outline">
          <Link href={`/notes/edit/${note.id}`}>Edit Note</Link>
        </Button>
        <DeleteNoteAction note={note} />
      </div>
    </section>
  );
};
export default NotePage;
