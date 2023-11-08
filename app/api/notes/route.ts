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

  const note = await prisma.note.create({
    data: {
      userId: userId,
      title: body.title.trim(""),
      description: body.description,
    },
  });

  return NextResponse.json(note, { status: 201 });
}
