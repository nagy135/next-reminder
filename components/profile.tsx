import { signOut } from "next-auth/react";
import { useMockSession } from "../hooks/session-mock";
import Image from "next/image";

export default function Profile() {
  const { data: session } = useMockSession();
  if (session) {
    return (
      <div className="fixed flex flex-col top-0 right-0">
        {session.user?.image ? (
          <Image
            src={session.user.image}
            alt="Avatar"
            width={"100%"}
            height={"100%"}
          />
        ) : null}
        <span className="font-bold text-center">{session.user?.name}</span>
        <button className="btn btn-secondary btn-xs mt-1" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }
  return <> Never happens! </>;
}
