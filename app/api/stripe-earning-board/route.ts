import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET() {
  const data = await prisma.user.findMany({
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json({ data }, { status: 200 });
}
