import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface Props {
  note: Note;
}

const NoteCard = ({ note }: Props) => {
  const wasUpdated = note.updatedAt > note.createdAt;

  const createdUpdateAtTimestamp = (
    wasUpdated ? note.updatedAt : note.createdAt
  ).toDateString();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <CardDescription>{createdUpdateAtTimestamp}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2">{note.description}</p>
      </CardContent>
    </Card>
  );
};
export default NoteCard;
