"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  noteId: string;
}

const DeleteNoteAction = ({ noteId }: Props) => {
  const router = useRouter();

  const [isDeleting, setDeleting] = useState(false);

  console.log(noteId);

  if (!noteId) return null;

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await axios.delete("/api/notes/" + noteId);
      router.push("/notes");
      router.refresh();
      toast({
        title: "Succesfully deleted note",
      });
    } catch (error) {
      setDeleting(false);
      console.error(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={isDeleting}
          className="font-medium "
          variant="outline"
        >
          {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Delete Note
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action delete your note from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteNoteAction;
