import GetRecords from "../services/internal/api/get-records";
import { useMockSession } from "../hooks/session-mock";
import { dateStringToPrettyDate } from "../utils/common";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function RecordList() {
  const { data: session } = useMockSession();
  const router = useRouter();
  const { data: records } = useQuery(
    ["records", session?.user?.email],
    () => (!session?.user?.email ? [] : GetRecords(session.user.email)),
    {
      enabled: Boolean(session?.user?.email),
      initialData: [],
    }
  );
  const now = new Date();

  return (
    <>
      <div className="max-w-3xl t-2 mx-1">
        {records &&
          records.map((record, i) => {
            const offset = new Date(record.deadline).getTime() - now.getTime();
            const passed = offset < 0;
            return (
              <div
                tabIndex={i}
                key={`collapse-item-${i}`}
                className={`collapse border ${
                  passed ? "border-red-400" : "border-orange-400"
                }  bg-base-100 rounded-box my-1 pt-2`}
              >
                <div className="collapse-title text-xl font-medium">
                  <p>
                    <span className="text-orange-500 font-bold">
                      {record.name}
                    </span>
                  </p>
                  <div
                    className={`absolute right-2 top-1 ${
                      passed ? "text-red-600" : ""
                    }`}
                  >
                    {dateStringToPrettyDate(record.deadline)}
                  </div>
                </div>
                <div className="collapse-content">
                  <p className="mb-2 text-gray-400 text-right">
                    {dayjs(record.deadline).fromNow()}
                  </p>
                  <p className="mb-2">{record.description}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="fixed bottom-2 w-1/2 translate-x-1/4">
        <button
          onClick={() => router.push("/add")}
          className="btn btn-lg btn-primary m-auto w-1/2"
        >
          Add record
        </button>
      </div>
    </>
  );
}
