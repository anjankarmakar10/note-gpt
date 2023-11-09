import prisma from "@/prisma/prisma";
import NoteForm from "../../_components/NoteForm";

interface Props {
  params: {
    id: string;
  };
}

const EditNotePage = async ({ params }: Props) => {
  const note = await prisma.note.findUnique({
    where: { id: params.id },
  });

  if (!note) return null;

  return (
    <section className="mx-auto max-w-5xl">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold md:text-4xl">Edit Note</h1>
      </header>
      <NoteForm note={note} />
    </section>
  );
};
export default EditNotePage;
