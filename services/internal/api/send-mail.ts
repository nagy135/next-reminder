import { TSendDemoEmailRequest } from "@ctypes/request";

/**
 * Demo email test
 *
 * @author Viktor Nagy <viktor.nagy@01people.com>
 */
export default async (data: TSendDemoEmailRequest): Promise<any> => {
  return await (
    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
};
