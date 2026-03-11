import PageHeader from '@/components/PageHeader'
import PageLayout from '@/components/PageLayout'
import DetailCard from '@/components/result/DetailCard'
import { createFileRoute } from '@tanstack/react-router'

type DataSearch = {
  data: any;
  gpa: string;
  cgpa: string;
  title: string;
  subtitle: string;
}

export const Route = createFileRoute('/result/$id')({
  validateSearch: (search: Record<string, any>): DataSearch => {
    return {
      data: search?.data,
      gpa: search?.gpa,
      cgpa: search?.cgpa,
      title: search?.title,
      subtitle: search?.subtitle,
    }
  },
  component: ResultDetail,
})

export default function ResultDetail() {
  let { data,gpa,cgpa,title,subtitle } = Route.useSearch();
  data = JSON.parse(data);
  
  return (
    <PageLayout Header={<PageHeader title="Results Details" menuLink="/result" />}>
      <div className="flex flex-col items-center space-y-0 border-b-4  border-(--theme-accent)/20">
        <h2 className="mx-4 mt-4 text-xl sm:text-2xl text-center text-(--theme-primary) font-semibold">{title}</h2>
        <p className="font-semibold text-base sm:text-lg text-(--theme-primary)/70">{subtitle}</p>
        <div className="flex items-center justify-center space-x-2">
          <p className=" my-2 px-2 font-extrabold text-sm sm:text-lg rounded-full border-2 border-(--theme-primary)/50 text-(--theme-primary)/50">CGPA: {cgpa}</p>
          <p className=" my-2 px-2 font-extrabold text-sm sm:text-lg rounded-full border-2 border-(--theme-primary)/50 text-(--theme-primary)/50">GPA: {gpa}</p>
        </div>
      </div>
      <main className="relative p-5 flex flex-col space-y-4 overflow-y-scroll">
        { data.map((row: any, i: number) => (
           <DetailCard key={i} data={row} />
        ))}
      </main>
    </PageLayout>
  )
}
