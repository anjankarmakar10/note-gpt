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
    <div className="relative h-fit cursor-pointer">
      <span
        className={`absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-${color}`}
      ></span>
      <Card className={`relative border-${color}`}>
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
