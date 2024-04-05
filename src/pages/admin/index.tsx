import { useSession } from "next-auth/react"
import Selectport from "~/components/Selectport";
import Showchart from "~/components/Showchart";
import Managefund from "~/components/Managefund";
import Rank from "~/components/Rank";
import Simulation from "~/components/Simulation";
import Risklevel from "~/components/Risklevel";

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
        <div className="bg-primary-200 w-2/3 rounded-xl ">
              <div className="mt-8 ml-5">
                <p className="text-primary-300 mb-3 text-base font-semibold" >Adjust Port Ratio</p>
                <Selectport/>
                <Showchart/> 
                <Managefund/>
              </div>
            </div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-row gap-5 h-1/6">
            <div className="bg-white w-4/12 rounded-xl"> <Rank level="lv (3)" percent="66" user="1,255"/></div>
            <div className="bg-white w-4/12 rounded-xl"><Rank level="lv (1)" percent="32" user="155"/> </div>
            <div className="bg-white w-4/12 rounded-xl"><Rank level="lv (5)" percent="12" user="89"/> </div>
          </div>
          <div className="bg-primary-200 h-2/4 rounded-xl">
              <Simulation/>
          </div>
          <div className="flex flex-row h-1/2 gap-5">
            <div className="bg-white w-full rounded-xl">
              <Risklevel/>
            </div>

          </div>
        </div>
      </div>
    </div >
  );

}
