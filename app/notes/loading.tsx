import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import NoteCardSkleton from "./_components/NoteCardSkleton";

const loading = () => {
  return (
    <section>
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold md:text-4xl ">Notes</h1>
        <Skeleton className="h-9 w-[120px]" />
      </header>
      <div className="mb-8 flex max-w-xs flex-col gap-2 ">
        <Label>Filter By Priority</Label>
        <Skeleton className="h-9 w-[320px]" />
      </div>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array(8)
          .fill("0")
          .map((_, index) => (
            <NoteCardSkleton key={index} />
          ))}
      </section>
    </section>
  );
};
export default loading;
