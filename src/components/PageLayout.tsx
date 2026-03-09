import { Preferences } from "@capacitor/preferences";
import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

export default function PageLayout({ Header, children }: any) {
  
  const router = useRouter();
  
  const checkSession = async () => {
     const { value: user } = await Preferences.get({ key: 'user'});
     if(!user) router.navigate({ to: '/'});
  }

  useEffect(() => {
    checkSession();
  }, [])

  return (
    <main className="h-screen w-full flex flex-col bg-[var(--theme-primary)]">
      <header className="h-[8vh] relative flex flex-col items-center justify-center overflow-hidden">
        <div className="z-2 absolute top-20 -left-24 w-72 h-36 rotate-44 rounded-full bg-[var(--theme-secondary)]/10"></div>
        <div className="z-2 absolute bottom-20 -right-24 w-72 h-36 rotate-44 rounded-full bg-[var(--theme-secondary)]/10"></div>
        <main className="z-4 w-full h-full p-2 flex items-center text-[var(--theme-accent)] shadow-lg">
            {Header}
        </main>
      </header>
      <div className="z-10 h-[92vh] bg-white rounded-t-2xl">
        {children}
      </div>
    </main>
  )
}
