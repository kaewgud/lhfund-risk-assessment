import { useSession } from "next-auth/react"

export default function MainAdmin() {
  const { data: sessionData } = useSession();
  return (
    <div className="flex h-screen items-center justify-center" >
      <form
        className="bg-white p-6 rounded-md shadow-md"
      >
        <h1 className="text-2xl font-bold text-center">Admin Page</h1>
        <p className="text-center">Welcome, {sessionData?.user?.email}</p>
        <span className="text-center">Session Data:</span>
        <pre>{JSON.stringify(sessionData, null, 2)}</pre>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          type="submit"
        >
          Sign Out
        </button>

      </form>
    </div >
  );

}

