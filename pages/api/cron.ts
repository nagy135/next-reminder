import type { NextApiRequest, NextApiResponse } from "next";

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
  return res.status(200).json({
    status: 'ok',
    ...data
  });
};
