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
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Notified</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => {
            return (
              <tr>
                <th>{record.name}</th>
                <th>{record.description}</th>
                <th>{dateStringToPrettyDate(record.deadline)}</th>

                <th className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={record.notified}
                    className="checkbox"
                  />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button 
        onClick={() => router.push('/add')}
        className="btn btn-secondary mt-1">+</button>
    </div>
  );
}
