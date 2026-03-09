import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import PersonalContent from "@/components/profile/PersonalContent";
import ProgramContent from "@/components/profile/ProgramContent";
import { useState } from "react";
import ContactContent from "@/components/profile/ContactContent";
import {Edit} from 'lucide-react'
import BioCard from "@/components/profile/BioCard";
import ProfileNav from "@/components/profile/ProfileNav";
import { fetchProfile } from "@/lib/queries";
import { Preferences } from "@capacitor/preferences";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
  loader: async () => {
    
    const { value:dm }:any = await Preferences.get({ key: 'user' });
    const session:any = JSON.parse(dm);

    const profile = await fetchProfile(session);
    return { ...profile?.profile, photo: session?.photo } 
  }
});



function RouteComponent() {

  const [ page, setPage ] = useState<null| string>('index')
  const profile = Route.useLoaderData();
  
  const SubPage = () => {
    switch(page){
      case 'index': return (<PersonalContent data={profile} />); break;
      case 'program': return (<ProgramContent data={profile} />); break;
      case 'contact': return (<ContactContent data={profile} />); break;
      default: return (<PersonalContent data={profile} />); 
    }
  }

  return (
    <PageLayout Header={<PageHeader title="Profile" menuLink="/home" />} className="relative">
      <main className="relative px-3 py-5 h-[90vh] overflow-y-scroll">
        <BioCard data={profile}/>
        <ProfileNav setPage={setPage} page={page} />
        <div className="h-full">
          <SubPage />
        </div>
        
      </main>
      <Link to="/profile-form" className="px-4 py-1 absolute bottom-6 right-4 rounded-xl flex items-center space-x-2 bg-[var(--theme-primary)]/80 hover:bg-[var(--theme-primary)] text-white">
          <Edit size={16} />
          <span>Edit</span>
        </Link>
    </PageLayout>
  );
}
