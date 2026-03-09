import { File } from 'lucide-react'

export default function ResultCard({ title,subtitle }: any) {
 
  

  return (
    <div className="flex space-x-4 rounded-xl border-2 border-[var(--theme-secondary)]/10">
        <div className="px-4 py-2 h-16 sm:h-20 w-fit flex items-center justify-center rounded-xl shadow bg-[var(--theme-secondary)]/5 text-[var(--theme-accent)]/80">
            <File size={32} />
        </div>
        <div className="py-2 flex flex-col items-start">
          <h2 className="font-semibold text-base sm:text-lg text-[var(--theme-secondary)]/90">{title}</h2>
          <p className="text-[var(--theme-primary)]/70 text-sm sm:text-base font-semibold tracking-wide">{subtitle}</p>
        </div>
    </div>
  )
}
 