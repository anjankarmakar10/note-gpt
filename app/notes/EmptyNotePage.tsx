import Link from "next/link";

const EmptyNotePage = () => {
  return (
    <section className=" bg-white text-gray-600 dark:bg-slate-900">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:px-24 md:py-10">
        <div className="md:w-1.5/2 mb-16 mt-5   flex flex-col items-center text-center md:mb-0 md:mt-0 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="mb-3 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            No Notes Found
          </h1>
          <p className="mb-8 pl-2  pr-2 leading-relaxed dark:text-gray-300 md:pl-0">
            Start your note-taking journey by creating a new one. Click the
            'Create New Note' button to begin capturing your thoughts, ideas,
            and tasks with Note GPT.
          </p>
          <div className="flex justify-center">
            <Link
              href="/notes/new"
              className="inline-flex rounded border-0 bg-emerald-600 px-6 py-2 text-lg text-white hover:bg-emerald-600 focus:outline-none"
            >
              Create New Note
            </Link>
          </div>
        </div>
        <div className="mb-5 w-3/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="rounded object-cover object-center"
            alt="hero"
            src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"
          />
        </div>
      </div>
    </section>
  );
};
export default EmptyNotePage;
