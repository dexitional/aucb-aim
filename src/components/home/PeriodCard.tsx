import moment from "moment";
import { motion } from 'motion/react'

export default function PeriodCard( { data }: any) {

  const [event, period ] = data?.event;
  return (
    <div className="py-6 flex flex-col space-y-4 border-y-2 border-dashed border-(--theme-secondary)/50">
        <h2 className="text-lg font-medium">Current academic event</h2>
        <motion.div initial={{ scale: 0.5, opacity: 0, rotate: 4 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} transition={{ delay: 0.8, bounce: 0.5 }} className="px-3 py-4 relative shadow border rounded-xl flex flex-col space-x-4 bg-(--theme-secondary)/10 overflow-hidden">
            <div className="px-4 py-2 w-full rounded-md text-(--theme-primary) bg-(--theme-secondary)/80 flex items-center justify-center space-y-1">
                <span className="text-base sm:text-lg font-bold uppercase">{event}</span>
            </div>
            <div className="py-3 w-full space-y-2 flex flex-col justify-between text-(--theme-primary)/90">
                <div className="indent-5 w-full flex items-start space-x-4">
                  <h2 className="font-medium sm:font-semibold text-sm sm:text-base italic">STARTS</h2>
                  <h1 className="font-medium text-sm sm:text-base line-clamp-2 uppercase italic">{ moment(period?.start).format('LL') }</h1>
                </div>
                <div className="indent-5 w-full flex items-start space-x-4">
                  <h2 className="font-medium sm:font-semibold text-sm sm:text-base italic">ENDS&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                  <h1 className="font-medium text-sm sm:text-base line-clamp-2 uppercase italic">{ moment(period?.end).format('LL') }</h1>
                </div>
            </div>
            {/* Decorators */}
            <div className="absolute -bottom-14 -right-4 h-28 w-20 rotate-25 rounded-4xl bg-(--theme-secondary)/20"></div>
            <div className="absolute -bottom-10 -right-9 h-28 w-20 rotate-35 rounded-4xl bg-(--theme-secondary)/20"></div>
        </motion.div>
    </div>
  )
}
