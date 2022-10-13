import { prisma } from "../../services/internal";
import type { NextApiRequest, NextApiResponse } from "next";
import { log } from "@utils/common";
import { LogLevel } from "@ctypes/common";

const DAY_IN_MS = 24 * 60 * 60 * 1000;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case "POST":
      return await post(res, req.body);
    default:
      throw new Error("unknown request");
  }
}

const post = async (res: NextApiResponse, data: any) => {
  const records = await prisma.record.findMany();
  const now = new Date();
  for (const record of records) {
    if (record.deadline.getTime() < now.getTime()) {
      if (
        record.notified === null ||
        now.getTime() - record.notified.getTime() > DAY_IN_MS
      ) {
        log(LogLevel.INFO, 'notifying record deadline passed', record);
        await prisma.record.update({
          where: {
            id: record.id,
          },
          data: {
            notified: now,
          },
        });
      }
    }
  }
  return res.status(200).json({
    status: "ok",
    ...data,
  });
};
