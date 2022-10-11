import nodemailer from "nodemailer";

export const emailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.GMAIL_SENDER!,
    pass: process.env.GMAIL_PASSWORD!,
  },
});
