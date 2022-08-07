import { TGetRecordsRequest, TPostRecordRequest } from "@ctypes/request";
import { TGetRecordsResponse, TPostRecordResponse } from "@ctypes/response";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../services/internal";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TPostRecordResponse | TGetRecordsResponse>
) {
  switch (req.method) {
    case "GET":
      return await get(res, req.query as TGetRecordsRequest);
    case "POST":
      return await post(res, { ...req.body, ...req.query } as TPostRecordRequest);
    default:
      throw new Error("unknown request");
  }
}

const get = async (res: NextApiResponse, data: TGetRecordsRequest) => {
  if (!data.email) return res.status(400).send("No email provided");
  const records = await prisma.record.findMany({
    where: {
      userEmail: data.email
    }
  });
  return res.status(200).json(records);
};

const post = async (res: NextApiResponse, data: TPostRecordRequest) => {
  if (!data.name || !data.email || !data.deadline) return res.status(400).send("Not all the data provided");

  const record = await prisma.record.create({
    data: {
      name: data.name,
      description: data.description,
      userEmail: data.email,
      deadline: new Date(data.deadline)
    }
  });
  return res.status(200).json(record);
};
