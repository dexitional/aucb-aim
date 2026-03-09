import { useRouter } from "@tanstack/react-router";
import { Menu } from "lucide-react";

export default function HomeHeader({ Icon = null, menuLink = null, title = 'Title' }: any) {
    const router = useRouter();  
    return (
    <div className="px-1 w-full flex items-center justify-between">
        <h1 className="ml-4 text-xl font-semibold">
           {title}
        </h1>
        <button
          onClick={() => menuLink ? router.navigate({ to:menuLink }) : null}
          className="px-2.5 py-2 bg-white/10 hover:bg-gray-700 rounded-md transition-colors"
          aria-label="Open menu"
        >
          { Icon ? <Icon size={26} /> : <Menu size={24} /> }
        </button>
    </div>
  )
}
