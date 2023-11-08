"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

type NoteFormData = z.infer<typeof noteSchema>;

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
  loading: () => <Skeleton className="h-[405px] rounded-md" />,
});

const NoteForm = () => {
  const form = useForm<NoteFormData>({
    resolver: zodResolver(noteSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

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
          <Button type="submit">Create Note</Button>
        </form>
      </Form>
    </>
  );
};
export default NoteForm;
