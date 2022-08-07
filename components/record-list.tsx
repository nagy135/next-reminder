import { TGetRecordsResponse } from "@ctypes/response";
import { useEffect, useState } from "react";
import GetRecords from "../services/internal/api/get-records";
import { useMockSession } from "../hooks/session-mock";

export default function RecordList() {
  const { data: session } = useMockSession();
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
                <th>{record.deadline}</th>
                <th>{record.notified}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
