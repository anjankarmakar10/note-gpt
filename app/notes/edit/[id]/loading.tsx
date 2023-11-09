import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <section className="mx-auto max-w-5xl">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold md:text-4xl">Edit Note</h1>
      </header>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-14 rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-[60px] rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-[96px] rounded-md" />
          <Skeleton className="h-[405px] w-full rounded-md" />
        </div>
        <Skeleton className="h-5 w-[125px] rounded-md" />
        <Skeleton className="h-10 w-[112px] rounded-md" />
      </section>
    </section>
  );
};
export default loading;
