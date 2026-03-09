import PageLayout from '../PageLayout'
import PageHeader from '../PageHeader'
import { File } from 'lucide-react'

export default function PendingResult() {
  
  const sections:any = new Array(8);
  
  return (
    <PageLayout Header={<PageHeader title="Results" menuLink="/home" />}>
    {/* <h2 className="mx-4 mt-4 text-xl text-center text-red-950 font-semibold">Academic Result Statement</h2> */}
    <div className="flex flex-col items-center space-y-1">
      <h2 className="mx-4 mt-4 text-lg sm:text-xl text-center text-red-950 font-semibold">
        Academic Result Statement
      </h2>
      <p className="px-4 font-extrabold text-base sm:text-lg rounded border-2 border-red-950/50 text-red-950/50 blur-sm animate-pulse">
        CGPA: 0.00
      </p>
    </div>
    <main className="relative p-5 flex flex-col space-y-4 h-[90vh] overflow-y-scroll">
      { sections?.map((_:any,i:number) => (
        <div key={i} className="flex space-x-4 rounded-xl border-2 border-red-50">
            <div className="px-4 py-2 h-16 sm:h-20 w-fit flex items-center justify-center rounded-xl shadow bg-red-50/80 text-red-800">
                <File size={32} />
            </div>
            <div className="py-2 flex flex-col items-start">
            <h2 className="font-semibold text-base sm:text-lg text-red-900 blur-sm animate-pulse">Year 1, First Semester</h2>
            <p className="text-gray-500 text-sm sm:text-base font-semibold tracking-wide blur-sm animate-pulse">2021/2022 Academic Year</p>
            </div>
        </div>
       ))}


        <div className="flex space-x-4 rounded-xl border-2 border-red-50">
            <div className="px-4 py-2 h-16 sm:h-20 w-fit flex items-center justify-center rounded-xl shadow bg-red-50/80 text-red-800">
                <File size={32} />
            </div>
            <div className="py-2 flex flex-col items-start">
            <h2 className="font-semibold text-base sm:text-lg text-red-900 blur-sm animate-pulse">Year 1, First Semester</h2>
            <p className="text-gray-500 text-sm sm:text-base font-semibold tracking-wide blur-sm animate-pulse">2021/2022 Academic Year</p>
            </div>
        </div>
        <div className="flex space-x-4 rounded-xl border-2 border-red-50">
            <div className="px-4 py-2 h-16 sm:h-20 w-fit flex items-center justify-center rounded-xl shadow bg-red-50/80 text-red-800">
                <File size={32} />
            </div>
            <div className="py-2 flex flex-col items-start">
            <h2 className="font-semibold text-base sm:text-lg text-red-900 blur-sm animate-pulse">Year 1, First Semester</h2>
            <p className="text-gray-500 text-sm sm:text-base font-semibold tracking-wide blur-sm animate-pulse">2021/2022 Academic Year</p>
            </div>
        </div>
        <div className="flex space-x-4 rounded-xl border-2 border-red-50">
            <div className="px-4 py-2 h-16 sm:h-20 w-fit flex items-center justify-center rounded-xl shadow bg-red-50/80 text-red-800">
                <File size={32} />
            </div>
            <div className="py-2 flex flex-col items-start">
            <h2 className="font-semibold text-base sm:text-lg text-red-900 blur-sm animate-pulse">Year 1, First Semester</h2>
            <p className="text-gray-500 text-sm sm:text-base font-semibold tracking-wide blur-sm animate-pulse">2021/2022 Academic Year</p>
            </div>
        </div>
        <div className="flex space-x-4 rounded-xl border-2 border-red-50">
            <div className="px-4 py-2 h-16 sm:h-20 w-fit flex items-center justify-center rounded-xl shadow bg-red-50/80 text-red-800">
                <File size={32} />
            </div>
            <div className="py-2 flex flex-col items-start">
            <h2 className="font-semibold text-base sm:text-lg text-red-900 blur-sm animate-pulse">Year 1, First Semester</h2>
            <p className="text-gray-500 text-sm sm:text-base font-semibold tracking-wide blur-sm animate-pulse">2021/2022 Academic Year</p>
            </div>
        </div>
        <div className="flex space-x-4 rounded-xl border-2 border-red-50">
            <div className="px-4 py-2 h-16 sm:h-20 w-fit flex items-center justify-center rounded-xl shadow bg-red-50/80 text-red-800">
                <File size={32} />
            </div>
            <div className="py-2 flex flex-col items-start">
            <h2 className="font-semibold text-base sm:text-lg text-red-900 blur-sm animate-pulse">Year 1, First Semester</h2>
            <p className="text-gray-500 text-sm sm:text-base font-semibold tracking-wide blur-sm animate-pulse">2021/2022 Academic Year</p>
            </div>
        </div>
        <div className="flex space-x-4 rounded-xl border-2 border-red-50">
            <div className="px-4 py-2 h-16 sm:h-20 w-fit flex items-center justify-center rounded-xl shadow bg-red-50/80 text-red-800">
                <File size={32} />
            </div>
            <div className="py-2 flex flex-col items-start">
            <h2 className="font-semibold text-base sm:text-lg text-red-900 blur-sm animate-pulse">Year 1, First Semester</h2>
            <p className="text-gray-500 text-sm sm:text-base font-semibold tracking-wide blur-sm animate-pulse">2021/2022 Academic Year</p>
            </div>
        </div>
        <div className="flex space-x-4 rounded-xl border-2 border-red-50">
            <div className="px-4 py-2 h-16 sm:h-20 w-fit flex items-center justify-center rounded-xl shadow bg-red-50/80 text-red-800">
                <File size={32} />
            </div>
            <div className="py-2 flex flex-col items-start">
            <h2 className="font-semibold text-base sm:text-lg text-red-900 blur-sm animate-pulse">Year 1, First Semester</h2>
            <p className="text-gray-500 text-sm sm:text-base font-semibold tracking-wide blur-sm animate-pulse">2021/2022 Academic Year</p>
            </div>
        </div>
        <div className="flex space-x-4 rounded-xl border-2 border-red-50">
            <div className="px-4 py-2 h-16 sm:h-20 w-fit flex items-center justify-center rounded-xl shadow bg-red-50/80 text-red-800">
                <File size={32} />
            </div>
            <div className="py-2 flex flex-col items-start">
            <h2 className="font-semibold text-base sm:text-lg text-red-900 blur-sm animate-pulse">Year 1, First Semester</h2>
            <p className="text-gray-500 text-sm sm:text-base font-semibold tracking-wide blur-sm animate-pulse">2021/2022 Academic Year</p>
            </div>
        </div>
    </main>
  </PageLayout>
  )
}
