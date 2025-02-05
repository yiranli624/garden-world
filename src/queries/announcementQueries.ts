import "server-only";
import { db } from "@/database";
import { Announcement } from "@/types";

export default async function getAnnouncements(): Promise<Announcement[]> {
  return await db.selectFrom("announcement").selectAll().execute();
}
