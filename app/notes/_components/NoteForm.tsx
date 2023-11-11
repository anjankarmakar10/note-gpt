"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { noteSchema } from "@/lib/validationsSchemas";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Priority } from "@prisma/client";
import { CirclePicker } from "react-color";
import NoteCard from "./NoteCard";
type NoteFormData = z.infer<typeof noteSchema>;

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
  loading: () => <Skeleton className="h-[405px] rounded-md" />,
});

interface Props {
  note?: Note;
}

const priorities: { label: string; value?: Priority }[] = [
  { label: "Low", value: "LOW" },
  { label: "Medium", value: "MEDIUM" },
  { label: "High", value: "HIGH" },
];

const NoteForm = ({ note }: Props) => {
  const [show, setShow] = useState(false);

  const className = (priority: string) => {
    return `${
      priority === "LOW"
        ? "text-blue-500"
        : priority === "HIGH"
        ? "text-rose-500"
        : "text-orange-500"
    } font-semibold`;
  };

  const form = useForm<NoteFormData>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      title: note?.title,
      description: note?.description,
      priority: note?.priority || "MEDIUM",
      color: note?.color,
    },
  });

  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const router = useRouter();

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      if (note) {
        await axios.patch("/api/notes/" + note.id, data);
      } else {
        await axios.post("/api/notes", data);
      }
      router.push("/notes");
      router.refresh();
    } catch (error) {
      console.error(error);
      setSubmitting(false);
      setError("An unexpected error occurred.");
    }
  });

  const data = form.watch();

  return (
    <>
      <Form {...form}>
        {error && (
          <Alert className="mb-4" variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
        <form onSubmit={onSubmit} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg ">Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg ">Priority</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger
                      className={className(note?.priority || data.priority!!)}
                    >
                      <SelectValue placeholder={note?.priority || "Medium"} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {priorities.map((priority) => (
                      <SelectItem
                        className={className(priority.value!!)}
                        key={priority.label}
                        value={priority.value!!}
                      >
                        {priority.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Description</FormLabel>
                <FormControl>
                  <SimpleMDE {...field} />
                </FormControl>
                <FormDescription>Supports full Markdown</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="color"
            render={({ field: { onChange } }) => (
              <FormItem>
                <FormLabel className="text-lg">Chose Color</FormLabel>
                <FormControl>
                  <CirclePicker
                    onChange={(data) => {
                      onChange(data.hex);
                    }}
                    width="100%"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-4">
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {note ? "Update Note" : "Create Note"}
            </Button>
            <Button onClick={() => setShow((p) => !p)} type="button">
              {show ? "Hide Preview" : "Show Preview"}
            </Button>
          </div>
        </form>
      </Form>
      <div className="pointer-events-none max-w-sm p-4">
        {show && (
          <NoteCard
            note={{
              ...data,
              createdAt: new Date(),
              updatedAt: new Date(),
              priority: data.priority!!,
            }}
          />
        )}
      </div>
    </>
  );
};
export default NoteForm;
