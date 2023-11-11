import { noteSchema } from "@/lib/validationsSchemas";
import prisma from "@/prisma/prisma";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();
  const validation = noteSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const { userId } = auth();
  if (!userId)
    return NextResponse.json({ error: "Invalid user." }, { status: 400 });

  const note = await prisma.note.findUnique({
    where: { id: params.id },
  });

  if (!note)
    return NextResponse.json({ error: "Invalid note" }, { status: 404 });

  // I have no creadit in openai account

  // const embedding = await getEmbeddingForNote(
  //   body.title.trim(""),
  //   body.description,
  // );

  // const updatedNote = await prisma.$transaction(async (tx) => {
  //   const updatedNote = await tx.note.update({
  //     where: { id: params.id },
  //     data: {
  //       title: body.title.trim(""),
  //       description: body.description,
  //       priority: body.priority,
  //     },
  //   });

  //   await notesIndex.upsert([
  //     {
  //       id: params.id,
  //       values: embedding,
  //       metadata: { userId },
  //     },
  //   ]);

  //   return updatedNote;
  // });

  const updatedNote = await prisma.note.update({
    where: { id: params.id },
    data: {
      title: body.title.trim(""),
      description: body.description,
      priority: body.priority,
    },
  });

  return NextResponse.json(updatedNote, { status: 201 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { userId } = auth();
  if (!userId)
    return NextResponse.json({ error: "Invalid user." }, { status: 400 });

  const note = await prisma.note.findUnique({
    where: { id: params.id },
  });

  if (!note)
    return NextResponse.json({ error: "Invalid note" }, { status: 404 });

  // const result = await prisma.$transaction(async (tx) => {
  //   const result = await tx.note.delete({
  //     where: { id: params.id },
  //   });

  //   await notesIndex.deleteOne(params.id);

  //   return result;
  // });

  const result = await prisma.note.delete({
    where: { id: params.id },
  });

  return NextResponse.json(result, { status: 201 });
}
