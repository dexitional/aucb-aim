import PageHeader from '@/components/PageHeader'
import PageLayout from '@/components/PageLayout'
import BioCard from '@/components/profile/BioCard'
import InputField from '@/components/profile/InputField'
import SelectField from '@/components/profile/SelectField'
import { fetchMajors, fetchProfile, saveProfile } from '@/lib/queries'
import { Preferences } from '@capacitor/preferences'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { Save } from 'lucide-react'
import { useState } from 'react'
import { MdCancel } from 'react-icons/md'

export const Route = createFileRoute('/profile-form')({
  component: RouteComponent,
  loader: async () => {
    
    const { value:dm }:any = await Preferences.get({ key: 'user' });
    const session:any = JSON.parse(dm);

    const [ profile, majors ]  = await Promise.all([ fetchProfile(session), fetchMajors(session)]);

    return { ...profile?.profile, photo: session?.photo, majors } 
  }
})

function RouteComponent() {
  
  const profile = Route.useLoaderData();
  const router = useRouter();
  
  const [form, setForm] = useState({
      phone: profile?.phone,
      email: profile?.email,
      ghcardNo: profile?.ghcardNo,
      majorId: profile?.majorId
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { value:dm }:any = await Preferences.get({ key: 'user' });
    const session:any = JSON.parse(dm);

    const data: any = await saveProfile(form, session);
    if (data) {
       
      // Redirect to Home Dashboard
      router.navigate({ to: '/profile' });
    }
  };

  const onChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <PageLayout 
        Header={
        <PageHeader 
            title="Edit Profile" 
            menuLink="/profile" 
            Icon={MdCancel}
        />  
    }>
      <main className="relative px-3 py-5 h-[90vh] overflow-y-scroll flex flex-col space-y-5">
          <BioCard data={profile} />
          <form onSubmit={onSubmit} className="py-5 border-t-2 border-dotted border-[var(--theme-secondary)]/50 flex flex-col space-y-4">
            <InputField label="Personal Phone Number" name="phone" defaultValue={form?.phone} onChange={onChange} />
            <InputField label="Personal Email Address" name="email" defaultValue={form?.email} onChange={onChange} />
            <InputField label="Ghana Card Number" name="ghcardNo" defaultValue={form?.ghcardNo} onChange={onChange} />
            {/* <InputField label="Passport Number" name="phone" defaultValue="05508641826" onChange={onChange} /> */}
            {/* <SelectField label="Study Mode" name="studyMode" defaultValue={form?.studyMode} onChange={onChange} options={[{ label: 'Morning',value:'MORNING'} ]} /> */}
            { profile?.semesterNum == 5}
            <SelectField label="Program Major" name="majorId" defaultValue={form?.majorId} onChange={onChange} options={profile?.majors?.filter( (r:any) => r?.programId == profile?.programId)?.map(((r: any) => ({ label: r.shortName?.toLowerCase(), value: r.id })))} />
            
            <hr className="pt-5 border-t-2 border-dotted border-[var(--theme-secondary)]/50" />
            <button type='submit' className="-mt-4 px-4 py-3 border-b-8 bg-[var(--theme-secondary)]/90 text-lg tracking-wide text-[var(--theme-primary)]/90 border-[var(--theme-primary)]/50 font-bold rounded-lg flex items-center justify-center space-x-3">
               <Save size={24} />
               <span>Update Profile</span>
            </button>
          </form>
      </main>
    </PageLayout>
  )
}
