import { CheckIcon } from 'lucide-react'

export default function CoursePill({ course, chosen, onClick }: any) {
  return (
    <button onClick={onClick} className={`p-2 min-h-28 w-full relative shadow rounded-2xl flex ${!chosen ? 'bg-[var(--theme-secondary)]/5 border-none':'bg-[var(--theme-secondary)]/5 border border-green-300/40'}  overflow-hidden`}>
        <div className="py-1 px-2 w-full space-y-2 flex items-center justify-between text-[var(--theme-primary)]/80">
          <div className="flex flex-col items-start">
            <h2 className="font-medium">{course?.code} | {course?.credit} Credits</h2>
            <h2 className="font-extrabold text-left">{course?.course}</h2>
            {course?.type == "R" ? <p className="font-medium italic text-[var(--theme-accent)]">~ Resit</p> : null}
            {course?.type == "O" ? <p className="font-medium italic text-[var(--theme-accent)]">~ Optional</p> : null}
            {course?.type == "C" ? <p className="font-medium italic text-[var(--theme-accent)]">~ Compulsory</p> : null}
            {course?.type == "E" ? <p className="font-medium italic text-[var(--theme-accent)]">~ Elective</p> : null}
          </div>
          { chosen ? (
          <div className={`p-2 px-2 h-9 w-9 shadow rounded-lg text-white ${['C'].includes(course?.type) ? 'bg-[var(--theme-secondary)]/50':'bg-[var(--theme-secondary)]'}`}>
            <CheckIcon size={20} />
          </div>
          ): null }
        </div>
        {/* Decorators */}
        <div className="absolute -bottom-14 -right-4 h-20 w-14 rotate-25 rounded-4xl bg-[var(--theme-secondary)]/10"></div>
        <div className="absolute -bottom-10 -right-9 h-20 w-14 rotate-35 rounded-4xl bg-[var(--theme-secondary)]/10"></div>
    </button>
  )
}
