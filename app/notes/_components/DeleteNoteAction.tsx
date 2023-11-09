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
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  note: Note;
}

const DeleteNoteAction = ({ note }: Props) => {
  const router = useRouter();

  const [isDeleting, setDeleting] = useState(false);

  if (!note) return null;

  const handleUndoDelete = async () => {
    try {
      await axios.post("/api/notes", note);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong!",
      });
    }
  };

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await axios.delete("/api/notes/" + note.id);
      router.push("/notes");
      router.refresh();
      toast({
        title: "Successfully deleted note",
        description: "Wanna undo the change",
        action: (
          <ToastAction
            onClick={handleUndoDelete}
            altText="Goto schedule to undo"
          >
            Undo
          </ToastAction>
        ),
      });
    } catch (error) {
      setDeleting(false);
      console.error(error);
      toast({
        title: "Something went wrong!",
      });
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
