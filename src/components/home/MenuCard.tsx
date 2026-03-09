import { Wallet } from 'lucide-react'
import MenuPill from './MenuPill'
import { BsPersonFillCheck } from 'react-icons/bs'
import { CgList } from "react-icons/cg";
import { GoTasklist } from "react-icons/go";



export default function MenuCard({ data }: any) {
  return (
    <div className="flex flex-col space-y-3">
        <h2 className="text-lg font-medium">What would you like to do?</h2>
        <div className="grid grid-cols-2 gap-4">
          <MenuPill title="View Profile" link="/profile" Icon={BsPersonFillCheck} />
          { data?.student?.completeStatus == 0 ? <MenuPill title="Register Courses" link="/register" Icon={GoTasklist} /> : null }
          <MenuPill title="Check Results" link="/result" Icon={CgList} />
          <MenuPill title="Paid Fees" link="/fees" Icon={Wallet} />
        </div>
    </div>
  )
}
