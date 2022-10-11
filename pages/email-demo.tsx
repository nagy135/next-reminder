import { NextPage } from "next";
import { useState } from "react";
import SendEmail from "../services/internal/api/send-mail";
import Layout from "../components/layout";

const EmailDemo: NextPage = () => {
  const [recipient, setRecipient] = useState("viktor.nagy@01people.com");
  const [subject, setSubject] = useState("test subject");
  const [body, setBody] = useState("<p>test<strong>TEST</strong></p>");
  const sendEmail = async () => {
    console.log('lul');
    SendEmail({
      to: recipient,
      subject,
      body,
    }).then(() => alert("sent!"));
  };

  return (
    <Layout>
      <div className="container-fluid">
        <button className="btn btn-large" onClick={sendEmail}>
          CLICK ME
        </button>
        <label className="label" htmlFor="recipient">
          Recipient
        </label>
        <input
          type="text"
          value={recipient}
          name="recipient"
          className="input input-bordered"
          onChange={(e) => setRecipient(e.target.value)}
        />

        <label className="label" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          value={subject}
          name="subject"
          className="input input-bordered"
          onChange={(e) => setSubject(e.target.value)}
        />

        <label className="label" htmlFor="body">
          Body
        </label>
        <textarea
          value={body}
          name="body"
          className="input input-bordered"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
    </Layout>
  );
};

export default EmailDemo;
