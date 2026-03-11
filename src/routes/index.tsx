import { login } from "@/lib/queries";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import Logo from "@/assets/img/logo.png";
import { Preferences } from '@capacitor/preferences'
import { BiLoaderCircle } from "react-icons/bi";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: any) => { 
    e.preventDefault();
    setLoading(true)
    try {
      const data: any = await login(form);
      if (data) {
        // Store Token & User data
        Preferences.set({
          key: 'user',
          value: JSON.stringify(data)
        });
        // Stop Loading
        setLoading(false)
        // Redirect to Home Dashboard
        router.navigate({ to: '/home' });
      }
      
    } catch (error) {
      setLoading(false)
    } finally {
      setLoading(false)
    }
    
  };

  const onChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });


  return (
    <main className="h-screen w-full flex flex-col bg-(--theme-primary)">
      <div className="h-[65vh] flex flex-col items-center justify-center">
        <div className="space-y-2 flex flex-col items-center">
          <img src={Logo} className="h-36" />
          <div className="flex flex-col items-center space-y-0">
            <h2 className="text-white text-2xl sm:text-3xl">
              Academic Info Manager
            </h2>
            <p className="text-sm sm:text-base text-gray-200 italic font-inter">Official mobile app for AUCB Students</p>
          </div>
          <p className="text-2xl sm:text-3xl text-(--theme-secondary) font-extrabold font-inter">AUCB-AIM</p>
        </div>
      </div>
      <div className="w-full min-h-[35vh] bg-white bg-gradient-to-b from-white via-white to-(--theme-secondary)/10 rounded-t-4xl flex items-center justify-center">
        <form
          onSubmit={onSubmit}
          className="px-8 w-full sm:w-4/5 flex flex-col justify-center items-center space-y-4 text-lg"
        >
          <label htmlFor="username" className="w-full relative">
            <span className="px-1.5 py-0.5 absolute -top-2 left-4 text-xs text-(--theme-secondary) bg-white font-semibold tracking-wide rounded-lg">Username</span>
            <input
              type="email"
              name="username"
              onChange={onChange}
              placeholder="Username"
              className="px-5 py-3 w-full bg-white outline-none placeholder:text-(--theme-primary)/70 placeholder:text-base text-sm font-medium rounded-lg border-2 border-(--theme-primary)/50"
            />
          </label>
          <label htmlFor="password" className="w-full relative">
            <span className="px-1.5 py-0.5 absolute -top-2 left-4 text-xs text-(--theme-secondary) bg-white font-semibold tracking-wide rounded-lg">Password</span>
            <input
              type="password"
              name="password"
              onChange={onChange}
              placeholder="Password"
              className="px-5 py-3 w-full bg-white outline-none placeholder:text-(--theme-primary)/70 placeholder:text-base text-sm font-medium rounded-lg border-2 border-(--theme-primary)/50"
            />
          </label>
          <button
            type="submit"
            className="px-4 py-2 pb-4 w-full rounded-lg bg-(--theme-secondary) text-(--theme-primary)/80 font-bold border-b-8 border-(--theme-primary)/50 text-base cursor-pointer flex items-center justify-center"
          >
            { loading && (<div className="flex items-center justify-center space-x-3 text-base"><BiLoaderCircle size={24} className="animate-spin"/> <span>Authenticating ...</span></div>)}
            { !loading && (<span>Sign In</span>)}
          </button>
        </form>
      </div>
      <p className="py-2 text-white text-xs text-center font-inter">
        AUCB &copy; {new Date().getFullYear()}, All rights reserved.
      </p>
    </main>
  );
}
