import { LogLevel } from "@ctypes/common";

export const dateStringToPrettyDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

export const log = (level: LogLevel = LogLevel.INFO, ...content: any) =>
  console.log(`[${level}]:\n`, ...content);
