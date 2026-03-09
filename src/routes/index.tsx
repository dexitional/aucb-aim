import { login } from "@/lib/queries";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import Logo from "@/assets/img/logo.png";
import { Preferences } from '@capacitor/preferences'

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const router = useRouter();
  const [form, setForm] = useState({});

  const onSubmit = async (e: any) => {
    e.preventDefault();
   

    const data: any = await login(form);
    if (data) {
      // Store Token & User data
      Preferences.set({
        key: 'user',
        value: JSON.stringify(data)
      });
      // Redirect to Home Dashboard
      router.navigate({ to: '/home' });
    }
  };

  const onChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });


  return (
    <main className="h-screen w-full flex flex-col bg-[var(--theme-primary)]">
      <div className="h-[65vh] flex flex-col items-center justify-center">
        <div className="space-y-2 flex flex-col items-center">
          <img src={Logo} className="h-36" />
          <div className="flex flex-col items-center space-y-0">
            <h2 className="text-white text-2xl sm:text-3xl">
              Academic Info Manager
            </h2>
            <p className="text-sm sm:text-base text-gray-200 italic">Official mobile app for AUCB Students</p>
          </div>
          <p className="text-2xl sm:text-3xl text-[var(--theme-secondary)] font-extrabold">AUCB-AIM</p>
        </div>
      </div>
      <div className="h-[35vh] bg-white rounded-t-4xl flex flex-col justify-center">
        <form
          onSubmit={onSubmit}
          className="-translate-y-5 flex flex-col justify-center items-center space-y-3 text-lg"
        >
          <label htmlFor="username">
            <input
              type="email"
              name="username"
              onChange={onChange}
              placeholder="Username"
              className="px-6 py-2 w-72 bg-red-50/50 outline-none placeholder:text-[var(--theme-primary)]/70 placeholder:text-base text-base font-semibold rounded-lg border-2 border-[var(--theme-primary)]"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              onChange={onChange}
              placeholder="Password"
              className="px-6 py-2 w-72 bg-red-50/50 outline-none placeholder:text-[var(--theme-primary)]/70 placeholder:text-base text-base font-semibold rounded-lg border-2 border-[var(--theme-primary)]"
            />
          </label>
          <button
            type="submit"
            className="px-4 py-2 pb-4 w-72 rounded-lg bg-[var(--theme-secondary)] text-[var(--theme-primary)]/80 font-bold border-b-8 border-[var(--theme-primary)]/50 cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
      <p className="py-2 text-white text-xs text-center">
        AUCB &copy; {new Date().getFullYear()}, All rights reserved.
      </p>
    </main>
  );
}
