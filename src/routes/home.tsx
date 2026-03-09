import { createFileRoute } from '@tanstack/react-router'
import PageLayout from '@/components/PageLayout';
import HomeHeader from '@/components/HomeHeader';
import HomeBioCard from '@/components/home/HomeBioCard';
import HomeTimeCard from '@/components/home/HomeTimeCard';
import MenuCard from '@/components/home/MenuCard';
import StatusCard from '@/components/profile/StatusCard';
import { Preferences } from '@capacitor/preferences';
import pendingHome from '@/components/home/pendingHome';
import { lazy, Suspense } from 'react';
import { fetchAcademicStatus, fetchNewsTrends } from '@/lib/queries';
import { LogOut } from 'lucide-react';
import PeriodCard from '@/components/home/PeriodCard';


const NewsCard = lazy(() => import('@/components/home/NewsCard'));

export const Route = createFileRoute('/home')({
  component: RouteComponent,
  pendingComponent: pendingHome,
  errorComponent: ({ error }) => <div>{error.message}</div>,
  loader: async () => {
    // Get User Session
    let { value: user }:any = await Preferences.get({ key: 'user' });
      user = JSON.parse(user);
    const academ:any = await fetchAcademicStatus(user);
    return { user, academ: academ?.data }
  }
})

function RouteComponent() {
  const { user, academ } = Route.useLoaderData();
  return (
      <PageLayout 
        Header={
          // <HomeHeader 
          //   title="Home" 
          //   menuLink="/profile" 
          // />  
          <HomeHeader 
            title="Home" 
            menuLink="/logout" 
            Icon={LogOut}
          />  
        }>
       <main className="relative px-3 py-5 h-full flex flex-col space-y-10 overflow-y-scroll">
            <HomeBioCard data={user} />
            <StatusCard data={academ} />
            { academ?.student?.completeStatus == 0 ? <HomeTimeCard /> : null }
            <MenuCard data={academ} />
            <PeriodCard data={academ} />
            
            <Suspense fallback={(<div>loading ...</div>)}>
               <NewsCard />
            </Suspense>
        </main>
      </PageLayout>
  )
}
