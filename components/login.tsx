import { useSession, signIn, signOut } from "next-auth/react"
import { useMockSession } from "../hooks/session-mock"

export default function Login() {
  const { data: session } = useMockSession()
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button className="btn btn-primary" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button className="btn btn-primary" onClick={() => signIn()}>Sign in</button>
    </>
  )
}

