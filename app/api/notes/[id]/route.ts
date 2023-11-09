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
