import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const NoteCardSkleton = () => {
  return (
    <div className="group relative h-fit cursor-pointer">
      <span
        className={`absolute inset-[2px] h-full w-full rounded-md bg-slate-600 transition-all group-hover:ml-1 group-hover:mt-1 dark:bg-slate-500`}
      ></span>
      <Card className={`relative`}>
        <CardHeader>
          <CardTitle className="line-clamp-1">
            <Skeleton className="h-6 w-[200px]" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-5 w-[125px]" />
          </CardDescription>
          <CardDescription>
            <Skeleton className="h-4 w-[60px] rounded-full" />
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <Skeleton className="h-5 w-full rounded-full" />
          <Skeleton className="h-5 w-full rounded-full" />
        </CardContent>
      </Card>
    </div>
  );
};
export default NoteCardSkleton;
