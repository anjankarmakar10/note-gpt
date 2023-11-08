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

  return (
    <div className="relative h-fit cursor-pointer">
      <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-green-500 "></span>
      <Card className="relative border-green-500">
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
          <CardDescription>{createdUpdateAtTimestamp}</CardDescription>
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
