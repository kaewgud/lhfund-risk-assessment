import { useSession } from "next-auth/react"

export default function MainAdmin() {
  const { data: sessionData } = useSession();
  return (
    <div className="flex h-screen items-center justify-center bg-neutral-100 p-6 px-20" >
      {/*
        <form
        className="bg-white p-6 rounded-md shadow-md"
      >
        <h1 className="text-2xl font-bold text-center">Admin Page</h1>
        <p className="text-center">Welcome, {sessionData?.user?.email}</p>
        <span className="text-center">Session Data:</span>
        <pre>{JSON.stringify(sessionData, null, 2)}</pre>
      </form>
      */}
      <div className="flex flex-row w-full h-full gap-5">
        <div className="bg-[#D9D9D9] w-1/3 rounded-xl">hell</div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-row gap-5 h-1/6">
            <div className="bg-white w-4/12 rounded-xl">awd</div>
            <div className="bg-white w-4/12 rounded-xl">awd</div>
            <div className="bg-white w-4/12 rounded-xl">awd</div>
          </div>
          <div className="bg-[#D9D9D9] h-2/4 rounded-xl">

          </div>
          <div className="flex flex-row h-1/2 gap-5">
            <div className="bg-white w-1/3 rounded-xl">wad</div>
            <div className="bg-white w-full rounded-xl">awd</div>
          </div>
        </div>
      </div>
    </div >
  );

}

