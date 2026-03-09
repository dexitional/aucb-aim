import Photo from "/tanstack-circle-logo.png";
import { motion } from "motion/react"

export default function HomeBioCard({ data }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="flex items-center justify-between"
    >
      <div className="flex flex-col -space-y-1">
        {/* <p className="text-xl sm:text-2xl font-medium">Good Morning.</p> */}
        <p className="text-xl sm:text-2xl font-medium">Welcome!</p>
        <h2 className="font-semibold text-3xl sm:text-4xl capitalize">{data?.user?.fname.toLowerCase()}</h2>
      </div>
      <img src={data?.photo || Photo} alt="Photo" className="h-18 w-18 object-cover object-top rounded-lg" />
    </motion.div>
  );
}
