"use client";
import Link from "next/link";
import NoteCard from "./_components/NoteCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Props {
  notes: Note[];
}

const Notes = ({ notes }: Props) => {
  const [animationParent] = useAutoAnimate({
    easing: "ease-in",
  });

  return (
    <div
      ref={animationParent}
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {notes.map((note) => (
        <Link href={`/notes/${note.id}`} key={note.id}>
          <NoteCard note={note} />
        </Link>
      ))}
    </div>
  );
};
export default Notes;
