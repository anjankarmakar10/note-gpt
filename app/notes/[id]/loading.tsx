import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <section className="mx-auto flex max-w-4xl grid-cols-12 flex-col gap-8 pt-8 lg:grid lg:gap-1">
      <article className="col-span-10">
        <header className=" mb-8 flex flex-col gap-2">
          <h1 className="max-w-3xl text-2xl font-bold leading-normal md:text-3xl">
            <Skeleton className="h-9 w-3/4" />
          </h1>
          <p className="text-muted-foreground">
            <Skeleton className="h-6 w-[146px]" />
          </p>
        </header>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
          </div>
        </div>
      </article>
      <div className="col-span-2 flex flex-col gap-2">
        <Skeleton className="h-10 w-full rounded-md md:w-[146px]" />
        <Skeleton className="h-10 w-full rounded-md md:w-[146px]" />
      </div>
    </section>
  );
};
export default loading;
