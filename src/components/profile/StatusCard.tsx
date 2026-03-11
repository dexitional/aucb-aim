import { Link } from "@tanstack/react-router";
import { FaUserGraduate } from "react-icons/fa";

export default function StatusCard({ data }: any) {

  return (
    <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-medium">Your current academic status</h2>
        <div className="relative shadow rounded-3xl flex space-x-6 bg-(--theme-secondary)/5 overflow-hidden">
            
            {/* Completed Status */}
            { data?.student?.completeStatus == 1 ? 
             (<>
            <div className="px-6 py-3 h-24 rounded-2xl text-white bg-red-900/80 flex flex-col items-center justify-center space-y-1">
                {/* <span className="text-xl font-semibold italic">FGPA</span>
                <span className="text-2xl font-semibold">3.56</span> */}
                <FaUserGraduate size={30} />
            </div>
            <div className="py-4 w-full space-y-1 flex flex-col items-start justify-start text-red-950">
                <span className="font-bold text-xl text-left">COMPLETED</span>
                <Link to="/result" className="px-2 py-0.5 rounded-md border-2 border-red-700/50 text-red-800/50 font-semibold">View Academic Transcript</Link>
            </div>
            </>) : null }
            
            
            {/* Active Student */}
            { data?.student?.completeStatus == 0 && data?.student?.deferStatus == 0 ? 
            (<>
            <div className="px-6 py-3 h-24 rounded-2xl text-white bg-(--theme-primary)/80 flex flex-col items-center justify-center space-y-1">
                <span className="text-lg font-bold">YEAR</span>
                <span className="text-2xl sm:text-3xl font-extrabold italic">{ Math.ceil(data?.student?.semesterNum / 2) }</span>
            </div>
            <div className="z-4 py-4 w-full space-y-1 flex flex-col items-start justify-start text-(--theme-primary)/60">
                <span className="font-bold text-lg sm:text-xl text-left">ACTIVE</span>
                <Link to="/result" className="px-2 py-0.5 rounded-md shadow border border-(--theme-primary)/10 text-xs sm:text-sm text-(--theme-primary)/70 bg-white font-semibold">{data?.session?.year} {data?.session?.semester == 'SEM1' ? 'FIRST SEMESTER': 'SECOND SEMESTER'}</Link>
            </div>
            <div className="z-2 px-3 py-0.5 absolute top-0 -right-2 rounded-md font-bold italic text-xs sm:text-sm text-gray-500 bg-(--theme-secondary)/30">{ data?.isRegistered ? 'Not Registered' : 'Registered'} </div>
            </>) : null }

            
            {/* Deferred Student */}
            { data?.student?.completeStatus == 0 && data?.student?.deferStatus == 1 ? 
            (<>
            <div className="px-6 py-3 h-24 rounded-2xl text-white bg-red-900/80 flex flex-col items-center justify-center space-y-1">
                <span className="text-lg font-bold">YEAR</span>
                <span className="text-3xl font-extrabold italic">{ Math.ceil(data?.student?.semesterNum / 2) }</span>
            </div>
            <div className="z-4 py-4 w-full space-y-1 flex flex-col items-start justify-start text-red-950">
                <span className="font-bold text-xl text-left">DEFERRED</span>
                <Link to="/result" className="px-2 py-0.5 rounded-md border-2 border-red-700/50 text-sm text-red-800/70 bg-white font-semibold">2025/2026 FIRST SEMESTER 2</Link>
            </div>
            </>) : null }
           
            {/*  */}
            {/* Decorators */}
            <div className="z-2 absolute -bottom-14 -right-4 h-28 w-20 -rotate-45 rounded-4xl bg-(--theme-secondary)/10"></div>
            <div className="z-2 absolute -bottom-10 -right-9 h-28 w-20 -rotate-90 rounded-4xl bg-(--theme-secondary)/10"></div>
        </div>
    </div>
  )
}
