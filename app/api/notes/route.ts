import { getEmbeddingForNote } from "@/lib/openai";
import { notesIndex } from "./../../../lib/pinecone";
import { noteSchema } from "@/lib/validationsSchemas";
import prisma from "@/prisma/prisma";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = noteSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const { userId } = auth();

  if (!userId)
    return NextResponse.json({ error: "Invalid user." }, { status: 400 });

  const embedding = await getEmbeddingForNote(
    body.title.trim(""),
    body.description,
  );

  const note = await prisma.$transaction(async (tx) => {
    const note = await tx.note.create({
      data: {
        userId: userId,
        title: body.title.trim(""),
        description: body.description,
        priority: body.priority,
      },
    });

    await notesIndex.upsert([
      {
        id: note.id,
        values: embedding,
        metadata: { userId },
      },
    ]);

    return note;
  });

  return NextResponse.json(note, { status: 201 });
}
