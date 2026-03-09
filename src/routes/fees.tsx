import TransactCard from '@/components/fees/TransactCard'
import PageHeader from '@/components/PageHeader'
import PageLayout from '@/components/PageLayout'
import PendingResult from '@/components/result/PendingResult'
import { fetchFees } from '@/lib/queries'
import { Preferences } from '@capacitor/preferences'
import { createFileRoute } from '@tanstack/react-router'
import moment from 'moment';

export const Route = createFileRoute('/fees')({
  component: RouteComponent,
  pendingComponent: PendingResult,
  errorComponent: ({ error }) => <div>{error.message}</div>,
  loader: async () => {
    // Get User Session
    const { value: dm }: any = await Preferences.get({ key: "user" });
    const session: any = JSON.parse(dm);

    // Get Results
    const fees = await fetchFees(session);
    console.log(fees);
    if (fees)
      await Preferences.set({
        key: "fees",
        value: JSON.stringify(fees?.fees),
      });

    return fees?.fees;
  },
})

function RouteComponent() {

  const fees = Route.useLoaderData();
  const sum = fees?.reduce((sum: number, cur: any) => (cur.amount || 0) + sum, 0) || 0;

  return (
    <PageLayout Header={<PageHeader title="Fees & Transactions" menuLink="/home" />}>
      <div className="flex flex-col items-center ">
        <h2 className="mx-4 mt-4 text-lg sm:text-xl text-center text-red-950 font-semibold">{ sum > 0 ? 'Student Net Debt' : 'Student Net Balance' }</h2>
        <p className="px-4 font-extrabold text-base sm:text-lg rounded shadow border border-red-950/50 text-red-950/50">{fees && fees[0].currency} {Math.abs(sum).toFixed(2)}</p>
      </div>
      <main className="relative p-4 flex flex-col space-y-2 h-[85vh] overflow-y-scroll">
      { fees?.map((row: any, i: number) => (
         <TransactCard key={i} title={row?.narrative} subtitle={ moment(row.createdAt).format('LL') } amount={row?.amount} currency={row.currency} />
      ))}
        {/* <TransactCard title="Payment " subtitle="2015/2016 Academic Year" amount={-40344} currency="GHC"/> */}
      </main>
    </PageLayout>
  )
}
