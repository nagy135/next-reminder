import { Record } from "@prisma/client";

export type TPostRecordResponse = Record;
export type TGetRecordsResponse = (Omit<Record, "deadline"> & {
  deadline: string;
})[];
