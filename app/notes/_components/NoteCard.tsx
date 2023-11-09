import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ReactMarkdown from "react-markdown";

interface Props {
  note: Note;
}

const NoteCard = ({ note }: Props) => {
  const wasUpdated = note.updatedAt > note.createdAt;

  const createdUpdateAtTimestamp = (
    wasUpdated ? note.updatedAt : note.createdAt
  ).toDateString();

  const className = (priority: string) => {
    return `${
      priority === "LOW"
        ? "bg-blue-500"
        : priority === "HIGH"
        ? "bg-rose-500"
        : "bg-orange-500"
    }`;
  };

  const bg = className(note.priority);

  return (
    <div className="group relative h-fit cursor-pointer">
      <span
        className={`absolute inset-[2px] h-full w-full rounded-md bg-slate-600  transition-all group-hover:ml-1 group-hover:mt-1`}
      ></span>
      <Card className={`relative`}>
        <CardHeader>
          <CardTitle className="line-clamp-1">{note.title}</CardTitle>
          <CardDescription>{createdUpdateAtTimestamp}</CardDescription>
          <CardDescription
            title={`Priority: ${note.priority}`}
            className={`text-xs font-semibold ${bg} w-fit rounded-full px-2 text-white`}
          >
            {note.priority}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ReactMarkdown className="prose line-clamp-2 text-sm text-muted-foreground">
            {note.description}
          </ReactMarkdown>
        </CardContent>
      </Card>
    </div>
  );
};
export default NoteCard;
