import PageHeader from '@/components/PageHeader'
import PageLayout from '@/components/PageLayout'
import CoursePill from '@/components/register/CoursePill'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { MdCancelPresentation } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { useLayoutEffect, useState } from 'react';
import { Preferences } from '@capacitor/preferences';
import { saveCourses } from '@/lib/queries';
import { Toast } from '@capacitor/toast';

export const Route = createFileRoute('/register-course')({
  component: RouteComponent,
})

function RouteComponent() {
  
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [chosenCourses, setChosenCourses] = useState([]);
 
  const choose = (code:any) => {
    let newcourses:any = [...chosenCourses];
    const hasCode = newcourses.find((course:any) => course == code)
    newcourses = hasCode ? [...newcourses.filter((course:any) => course != code)] : [...newcourses,code]
    setChosenCourses(newcourses);
 }

 const chosenCredit = courses?.reduce((sum:any, cur:any) => {
   const isChosen = chosenCourses.find((course: any) => course == cur.code);
   if (isChosen) return sum + cur.credit;
   return sum + 0;
 }, 0);

 const reset = () => {
   const cdata:any = courses
     ?.filter((row: any) => row.type == "C" || (row.type == "E" && row.lock))
     ?.map((row: any) => row.code);
     setChosenCourses(cdata);
 };

 const submit = async () => {
     
     const { value: dm }: any = await Preferences.get({ key: "user" });
     const session: any = JSON.parse(dm);
  
     const cdata = courses?.filter((row: any) => {
       const isChosen = chosenCourses.find((course: any) => course == row.code);
       return !!isChosen;
     });
     if (cdata.length) {
       try {
         const resp = await saveCourses(cdata, session);
         console.log("Response Reg: ", resp)
         if (resp?.totalCourses){
           await Toast.show({ text: 'SUCCESS - COURSES REGISTERED !'});
           router.navigate({ to: "/register" });
         } else {
          await Toast.show({ text: 'Invalid credentials' });
          //  await Toast.show({ text: resp?.message });
         }
       } catch (error) {
         await Toast.show({ text: String(error) });
         console.error(error);
       }
     }
 }

  useLayoutEffect(() => {

    const loadData = async () => {
      const { value: chosenCourses }:any = await Preferences.get({ key: "chosenCourses" });
      setChosenCourses(JSON.parse(chosenCourses));
      const { value: courses }:any = await Preferences.get({ key: "courses" });
      setCourses(JSON.parse(courses));
    }
    loadData();
  }, []);

  return (
      <PageLayout 
        Header={
          <PageHeader
            title="Select Semester Courses" 
            menuLink="/register" 
            Icon={MdCancelPresentation}
          />  
        }>
       <main className="relative px-5 py-5 h-[85vh] flex flex-col space-y-6 overflow-y-scroll">
           <div className="bg-[var(--theme-secondary)]/10 shadow rounded-xl">
              <div className="relative px-4 h-14 bg-[var(--theme-primary)]/10 text-[var(--theme-primary)]/10 flex items-center justify-start overflow-hidden">
                <span className="text-base sm:text-base text-left text-red-950/50 font-bold italic">Please select courses for this semester</span>
               <BsCardChecklist size={80} className='absolute right-0 top-0 rotate-25 translate-x-9' />
              </div>
              <div className="px-4 flex items-center justify-between">
                <p className="py-4 px-4 font-bold text-base text-[var(--theme-primary)]/90 italic">SELECTED COURSES</p>
                <div className="flex items-center space-x-2">
                  {/* <span className="px-2 rounded-full bg-red-800/30 font-bold text-lg italic text-red-950">{chosenCourses?.length}</span> */}
                  <div className='px-2 rounded-sm bg-[var(--theme-accent)]/30 font-bold text-sm italic text-[var(--theme-primary)]/80'>
                    <span>CS: {chosenCourses?.length}</span>
                  </div>
                  <div className='px-2 rounded-sm bg-[var(--theme-accent)]/30 font-bold text-sm italic text-[var(--theme-primary)]/80'>
                    <span>CR: {chosenCredit}</span>
                  </div>

                </div>
              </div>
           </div>
           <div className="w-full grid gap-4">
             { courses.map((course: any) => { 
              const chosen = chosenCourses.find(r => r == course.code);
              return (<CoursePill key={course?.code} course={course} chosen={!!chosen} onClick={() => !(course.type == "C" || (course.type == "E" && course.lock)) && choose(course?.code)} />)}
            )}
           </div>
           <button onClick={submit} className="px-4 py-4 rounded-lg bg-[var(--theme-secondary)]/90 text-lg tracking-wide text-[var(--theme-primary)]/90 font-bold"> Submit Courses</button>
        </main>
      </PageLayout>
  )
}
