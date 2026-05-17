// export const runtime = "nodejs";

import { db } from "@/lib/prisma";

export async function GET() {
  const users = await db.user.findMany();
  return Response.json(users);
}
