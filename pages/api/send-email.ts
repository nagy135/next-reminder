import { TSendDemoEmailRequest } from "@ctypes/request";
import { emailTransporter } from "../../services/internal/email";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case "POST":
      return await post(res, req.body as TSendDemoEmailRequest);
    default:
      throw new Error("unknown request");
  }
}

const post = async (res: NextApiResponse, data: TSendDemoEmailRequest) => {
  await emailTransporter.sendMail({
    from: `"Master Email Sender" ${process.env.GMAIL_SENDER!}>`,
    to: data.to,
    subject: data.subject,
    html: data.body,
  });
  return res.status(200).json({
    status: 'ok'
  });
};
