import MenuPill from '@/components/home/MenuPill'
import PageHeader from '@/components/PageHeader'
import PageLayout from '@/components/PageLayout'
import { fetchCourses, fetchSlip } from '@/lib/queries'
import { Preferences } from '@capacitor/preferences'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowBigRight, BookA, InfoIcon, LucideEdit } from 'lucide-react'
import moment from 'moment'

export const Route = createFileRoute('/register')({
  component: RouteComponent,
  loader: async () => {
      try {
        
        const { value: dm }: any = await Preferences.get({ key: "user" });
        const session: any = JSON.parse(dm);
        const [ data,sl ] = await Promise.all([ fetchCourses(session), fetchSlip(session)]);
        // Update Compulsory & Locked Courses
        const courses = data?.courses?.filter((row: any) => row.type == "C" || (row.type == "E" && row.lock))?.map((row: any) => row.code);
        if(data?.courses?.length) {
          await Preferences.set({ key: "courses", value: JSON.stringify(data?.courses) });
          await Preferences.set({ key: "chosenCourses", value: JSON.stringify(courses) });
        }
        if(sl.length) await Preferences.set({ key: "slip", value: JSON.stringify(sl) });
        
        // return { courses: data?.courses, chosenCourses: courses, slip: sl, title: data?.session }
        return { slip: sl, title: data?.session, startPeriod: data?.registerStart, endPeriod: data?.registerEnd, latePeriod: data?.registerEndLate }
      
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
  }
})

function RouteComponent() {
  
  const { slip, title, startPeriod, endPeriod, latePeriod }:any = Route.useLoaderData();
  return (
      <PageLayout 
        Header={
          <PageHeader
            title="Registration" 
            menuLink="/home" 
          />  
        }>
       <main className="relative px-5 py-5 h-[85vh] flex flex-col space-y-10 overflow-y-scroll">
           <div className="h-fit bg-red-50/50 shadow rounded-xl overflow-hidden">
              <div className="relative px-4 py-1 h-10 bg-[var(--theme-secondary)]/10 text-[var(--theme-secondary)]/10 flex items-center overflow-hidden">
                <span className="text-sm sm:text-base text-left text-red-950/50 font-bold italic">SESSION :: {title}</span>
                <InfoIcon size={80} className='absolute right-0 top-0 rotate-25 translate-x-9' />
              </div>
              { !slip?.length && moment().isBefore(moment(latePeriod)) ? <p className="py-4 px-4 font-bold text-base sm:text-lg text-[var(--theme-primary)]/60 ">You have not registered your courses for the academic semester. You are to complete registration before <span className="text-[var(--theme-primary)]/80 italic">{moment(latePeriod).format('LL')} 23:59 GMT</span>, after which will attract a late registration fine.</p> : null }
              { slip?.length && moment().isBefore(moment(latePeriod)) ? <p className="py-4 px-4 font-bold text-base sm:text-lg text-[var(--theme-primary)]/60 ">You have completed your course registration. You can make changes until { moment(latePeriod).format('LL') } 23:59 GMT.</p> : null }
              
              { !slip?.length  && moment().isAfter(moment(latePeriod)) && moment().isBefore(moment(endPeriod)) ? <p className="py-4 px-4 font-bold text-base sm:text-lg text-[var(--theme-primary)]/60 ">You have not registered but within the late registration period accompanied with fine. This opportunity ends after{ moment(endPeriod).format('LL') } 23:59 GMT.</p> : null }
              { slip?.length  && moment().isAfter(moment(latePeriod))  ? <p className="py-4 px-4 font-bold text-base sm:text-lg text-[var(--theme-primary)]/60 ">Congrats! You have completed your course registration for the semester.</p> : null }
           </div>
           <div className="w-full grid grid-cols-2 gap-4">
              <MenuPill title="Read Instructions" link="/instruction" Icon={BookA} />
              { !slip?.length && moment().isBetween(moment(startPeriod),moment(latePeriod)) ? <MenuPill title="Goto Registration" link="/register-course" Icon={ArrowBigRight} /> : null}
              {/* { slip.length ? <MenuPill title="Print Registration" link="/register" Icon={ScrollIcon} /> : null} */}
              { slip?.length  && moment().isBetween(moment(startPeriod),moment(latePeriod)) ? <MenuPill title="Edit Registration" link="/register-course" Icon={LucideEdit} /> : null}
              {/* <MenuPill title="Change Option" link="/profile-form" Icon={RefreshCcw} /> */}
           </div>
        </main>
      </PageLayout>
  )
}
