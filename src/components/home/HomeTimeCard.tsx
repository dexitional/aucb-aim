export default function HomeTimeCard() {
  return (
    <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-medium">Your next class</h2>
        <div className="relative shadow rounded-3xl flex space-x-4 bg-[var(--theme-secondary)]/5 overflow-hidden">
            <div className="px-4 py-3 h-32 w-24 rounded-2xl text-white bg-[var(--theme-primary)]/90 flex flex-col items-center justify-center space-y-1">
                <span className="text-xl sm:text-2xl font-semibold">MON</span>
                <span className="text-4xl sm:text-5xl font-semibold">06</span>
            </div>
            <div className="py-3 w-full space-y-2 flex flex-col justify-between text-[var(--theme-primary)]/90">
                <div className="w-full">
                    <h2 className="font-medium sm:font-semibold text-sm sm:text-base italic">AGEC 453</h2>
                    <h1 className="font-bold text-sm sm:text-base line-clamp-2">AGRICULTURE FINANCE INTRODUCTION PSYCHOLOGY</h1>
                </div>
                <div className="flex flex-col -space-y-1 font-medium text-sm sm:text-base">
                    <p>08:00 - 09:55</p>
                    <p className="line-clamp-1">Lecture Theatre 302</p>
                </div>
            </div>

            {/* Decorators */}
            <div className="absolute -bottom-14 -right-4 h-28 w-20 rotate-25 rounded-4xl bg-[var(--theme-secondary)]/20"></div>
            <div className="absolute -bottom-10 -right-9 h-28 w-20 rotate-35 rounded-4xl bg-[var(--theme-secondary)]/20"></div>
        </div>
    </div>
  )
}
