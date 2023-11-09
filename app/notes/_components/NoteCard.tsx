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
        ? "blue-500"
        : priority === "HIGH"
        ? "rose-500"
        : "orange-500"
    }`;
  };

  const color = className(note.priority);

  return (
    <div className="group relative h-fit cursor-pointer">
      <span
        className={`absolute inset-[2px] h-full w-full rounded-md bg-${color} transition-all group-hover:ml-1 group-hover:mt-1`}
      ></span>
      <Card className={`relative`}>
        <CardHeader>
          <CardTitle className="line-clamp-1">{note.title}</CardTitle>
          <CardDescription>{createdUpdateAtTimestamp}</CardDescription>
          <CardDescription
            title={`Priority: ${note.priority}`}
            className="text-xs font-semibold"
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
