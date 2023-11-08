import NoteForm from "../_components/NoteForm";

const CreateNotePage = () => {
  return (
    <section className="mx-auto max-w-5xl">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold md:text-4xl">New Note</h1>
      </header>
      <NoteForm />
    </section>
  );
};
export default CreateNotePage;
