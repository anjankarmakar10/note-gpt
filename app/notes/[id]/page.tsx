import { Button } from "@/components/ui/button";
import prisma from "@/prisma/prisma";
import Markdown from "react-markdown";

interface Props {
  params: {
    id: string;
  };
}

const NotePage = async ({ params }: Props) => {
  const note = await prisma.note.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!note) return null;

  const wasUpdated = note.updatedAt > note.createdAt;

  const createdUpdateAtTimestamp = (
    wasUpdated ? note.updatedAt : note.createdAt
  ).toDateString();

  return (
    <section className="mx-auto flex max-w-4xl grid-cols-12 flex-col gap-8 lg:grid lg:gap-1">
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
        <Button className="font-medium" variant="outline">
          Edit Note
        </Button>
        <Button className="font-medium" variant="outline">
          Delete Note
        </Button>
      </div>
    </section>
  );
};
export default NotePage;