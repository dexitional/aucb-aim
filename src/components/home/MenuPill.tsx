import { Link } from '@tanstack/react-router'

export default function MenuPill({ Icon, title, link }: any) {
  return (
    <Link to={link} className="px-2 py-3 relative shadow rounded-2xl flex space-x-4 bg-[var(--theme-secondary)]/5 overflow-hidden">
        <div className="py-3 px-2 w-full space-y-2 flex flex-col justify-between text-[var(--theme-primary)]">
            <Icon size={24} />
            <h2 className="font-bold text-base sm:text-base">{title}</h2>
        </div>
        {/* Decorators */}
        <div className="absolute -bottom-14 -right-4 h-20 w-14 rotate-25 rounded-4xl bg-[var(--theme-secondary)]/10"></div>
        <div className="absolute -bottom-10 -right-9 h-20 w-14 rotate-35 rounded-4xl bg-[var(--theme-secondary)]/10"></div>
    </Link>
  )
}
