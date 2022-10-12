import { TGetRecordsResponse } from "@ctypes/response";
import { useEffect, useState } from "react";
import GetRecords from "../services/internal/api/get-records";
import { useMockSession } from "../hooks/session-mock";
import { dateStringToPrettyDate } from "../utils/common";
import { useRouter } from "next/router";

export default function RecordList() {
  const { data: session } = useMockSession();
  const router = useRouter();
  const [records, setRecords] = useState<TGetRecordsResponse>([]);

  useEffect(() => {
    if (session?.user?.email)
      GetRecords(session.user.email).then((response) => setRecords(response));
  }, []);
  return (
    <div className="max-w-3xl t-2">
      <div className="flex justify-center mt-2">
        <button
          onClick={() => router.push("/add")}
          className="btn btn-lg btn-secondary m-auto w-1/2"
        >
          Add record
        </button>
      </div>
      {records.map((record, i) => (
        <div
          tabIndex={i}
          key={`collapse-item-${i}`}
          className="collapse border border-gray-600 bg-base-100 rounded-box my-1"
        >
          <div className="collapse-title text-xl font-medium">
            <p>{record.name}</p>
            <p>{dateStringToPrettyDate(record.deadline)}</p>
          </div>
          <div className="collapse-content">
            <p>{record.description}</p>
            <p>{record.notified}</p>
            <p>
              <input
                type="checkbox"
                checked={record.notified}
                readOnly={true}
                className="checkbox"
              />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
