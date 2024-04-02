import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
export default function Admin() {
  const { data: sessionData } = useSession();
  return (

    <div className="flex h-screen items-center justify-center" >
      <form
        className="bg-white p-6 rounded-md shadow-md"
      >
        <button
          className="rounded-full bg-black px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </form>
    </div >
  );
}

