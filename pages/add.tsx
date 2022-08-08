import { TPostRecordRequest } from "@ctypes/request";
import { useMockSession } from "../hooks/session-mock";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/layout";
import PostRecord from "../services/internal/api/post-record";

const AddRecord: NextPage = () => {
  const { data: session } = useMockSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleCreateNewRecord = async () => {
    if (!session?.user?.email) return;

    const data: TPostRecordRequest = {
      email: session.user.email,
      name,
      description,
      deadline: `${date}T${time}Z`,
    };

    PostRecord(data).then(() => router.push("/"));
  };

  return (
    <Layout>
      <div className="container max-w-2xl">
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Record name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Optional record description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Deadline (time)</span>
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
          <div className="flex justify-center mt-2">
        <button onClick={handleCreateNewRecord} className="btn btn-primary">
          Create
        </button>
        </div>
      </div>
    </Layout>
  );
};

export default AddRecord;
