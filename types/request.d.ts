export type TGetRecordsRequest = {
  email: string;
};

export type TPostRecordRequest = {
  name: string;
  description: string;
  email: string;
  deadline: string;
};

export type TSendDemoEmailRequest = {
  to: string;
  subject: string;
  body: string;
};
