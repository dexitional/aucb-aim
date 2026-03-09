import { useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export default function PageHeader({ Icon = null, menuLink = null, title = 'Title' }: any) {

  const router = useRouter();  
  return (
    <div className="flex items-center gap-x-4">
        <button
          onClick={() => menuLink ? router.navigate({ to:menuLink }) : null}
          className="px-2.5 py-2 bg-white/10 hover:bg-gray-700 rounded-md transition-colors"
          disabled={!menuLink}
          aria-label="Open menu"
        >
          { Icon ? <Icon size={26} /> : <ArrowLeft size={24} /> }
        </button>
        <h1 className="ml-2 text-xl">{title}</h1>
    </div>
  )
}

