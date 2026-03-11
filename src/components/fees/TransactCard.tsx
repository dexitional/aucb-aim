import { ReceiptCent } from "lucide-react";

export default function TransactCard({ title,subtitle,amount,currency }: any) {
  return (
    <div className="px-2 flex space-x-4 items-center justify-between shadow-sm  rounded-lg border-2 border-(--theme-primary)/20 bg-(--theme-primary)/5">
        <div className="flex space-x-4 items-center">
            <div className={`p-3 h-fit w-fit rounded-full flex items-center justify-center shadow ${ amount > 0 ? 'bg-(--theme-secondary)/80 text-red-800':'bg-green-50/80 text-green-800' }`}>
                <ReceiptCent size={30} />
            </div>
            <div className="py-2">
                <h2 className="font-semibold text-sm sm:text-base text-(--theme-primary)">{title}</h2>
                <p className="text-gray-500 text-xs sm:text-sm font-semibold tracking-wide">{subtitle}</p>
            </div>
        </div>
        <p className="mx-4 font-bold text-center"><span className={`italic text-gray-400`}>{currency}</span> {Math.abs(amount).toFixed(2)}</p>
    </div>
  )
}
