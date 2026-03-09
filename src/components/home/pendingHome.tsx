import PageLayout from '../PageLayout'
import HomeHeader from '../HomeHeader'
import MenuCard from './MenuCard'

export default function pendingHome() {
  return (
    <PageLayout 
        Header={
          <HomeHeader 
            title="Home" 
            menuLink="/profile" 
          />  
        }>
       <main className="relative px-3 py-5 h-full flex flex-col space-y-10 overflow-y-scroll">
            {/* <HomeBioCard data={user} /> */}
            <div className="flex items-center justify-between ">
                <div className="flex flex-col space-y-1">
                    <p className="text-xl sm:text-2xl font-medium">Welcome!</p>
                    <h2 className="h-8 w-32 rounded-lg animate-pulse bg-gray-100 delay-75"></h2>
                </div>
                <div className="h-18 w-18 rounded-full bg-gray-100 animate-pulse" />
            </div>

            {/* <StatusCard /> */}
            <div className="flex flex-col space-y-4">
                <h2 className="text-lg font-medium">Your current academic status</h2>
                <div className="relative shadow rounded-3xl flex space-x-6 bg-red-50/60 overflow-hidden">
                    <div className="px-6 py-3 h-24 rounded-2xl text-white bg-red-900/80 flex flex-col items-center justify-center space-y-1">
                        <span className="text-lg font-bold">YEAR</span>
                        <span className="h-7 w-4 bg-white/50 rotate-12 rounded-xl animate-pulse delay-75"></span>
                    </div>
                    <div className="z-4 py-4 w-full space-y-1 flex flex-col items-start justify-start text-red-950">
                        <span className="font-bold text-lg sm:text-xl text-left">ACTIVE</span>
                        <div className="w-[90%] h-7 rounded-md text-xs sm:text-sm bg-white/50 animate-pulse"></div>
                    </div>
                    <div className="z-2 px-3 py-0.5 absolute top-0 -right-2 rounded-md font-bold italic text-xs sm:text-sm bg-red-200/30">
                      <span className="blur-xs text-gray-500 animate-pulse">Not Registered</span>
                    </div>
                    {/* Decorators */}
                    <div className="z-2 absolute -bottom-14 -right-4 h-28 w-20 -rotate-45 rounded-4xl bg-red-200/30"></div>
                    <div className="z-2 absolute -bottom-10 -right-9 h-28 w-20 -rotate-90 rounded-4xl bg-red-200/30"></div>
                </div>
            </div>

            {/* <HomeTimeCard /> */}
            <div className="flex flex-col space-y-4">
                <h2 className="text-lg font-medium">Your next class</h2>
                <div className="relative shadow rounded-3xl flex space-x-4 bg-red-50/60 overflow-hidden">
                    <div className="px-4 py-3 h-32 w-24 rounded-2xl text-white bg-red-950 flex flex-col items-center justify-center space-y-1">
                        <span className="text-xl sm:text-2xl font-semibold blur-xs animate-pulse">MON</span>
                        <span className="text-4xl sm:text-5xl font-semibold blur-xs animate-pulse">06</span>
                    </div>
                    <div className="py-3 w-full space-y-2 flex flex-col justify-between text-red-950">
                        <div className="w-full">
                            <h2 className="font-medium sm:font-semibold text-sm sm:text-base italic blur-xs animate-pulse">AGEC 453</h2>
                            <h1 className="font-bold text-sm sm:text-base line-clamp-2 blur-xs animate-pulse">AGRICULTURE FINANCE INTRODUCTION PSYCHOLOGY</h1>
                        </div>
                        <div className="flex flex-col -space-y-1 font-medium text-sm sm:text-base">
                            <p className="blur-xs animate-pulse">08:00 - 09:55</p>
                            <p className="line-clamp-1 blur-xs animate-pulse">Lecture Theatre 302</p>
                        </div>
                    </div>
                    {/* Decorators */}
                    <div className="absolute -bottom-14 -right-4 h-28 w-20 rotate-25 rounded-4xl bg-red-200/30"></div>
                    <div className="absolute -bottom-10 -right-9 h-28 w-20 rotate-35 rounded-4xl bg-red-200/30"></div>
                </div>
            </div>


            <MenuCard />
            {/* <NewsCard /> */}
            <div className="flex flex-col space-y-3">
                <h2 className="text-lg font-medium blur-xs animate-pulse">What's trending?</h2>
                <div className="">
                    <div className="relative w-full overflow-hidden">
                        <div className="py-3 px-2 w-full space-y-4 flex flex-col justify-between ">
                        <div className="h-40 w-full bg-gray-200 rounded-xl"></div>
                        <h2 className="text-base sm:text-lg font-medium tracking-wide blur-xs animate-pulse">AUCB Faculties Awarded new Laptops For Operations, Awarded new Laptops.</h2>
                        <div className="py-0.5 px-3 w-fit align-left rounded border border-red-950"> Read more</div>
                        </div>
                        {/* Decorators */}
                        <div className="absolute -bottom-14 -right-4 h-20 w-14 rotate-25 rounded-4xl bg-red-200/30"></div>
                        <div className="absolute -bottom-10 -right-9 h-20 w-14 rotate-35 rounded-4xl bg-red-200/30"></div>
                    </div>
                </div>
            </div>
        </main>
      </PageLayout>
  )
}
