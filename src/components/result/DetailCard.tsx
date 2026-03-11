export default function DetailCard({ data }: any) {
  
  const remark = data?.scheme?.gradeMeta?.find((r:any) => r.grade == data.grade)?.remark;
  return (
    <div className="px-5 py-6 w-full shadow bg-(--theme-accent)/5 rounded-xl flex flex-col ">
        <div className="flex justify-between">
        <div className="text-(--theme-primary)/70">
            <h2 className="text-sm font-medium">{data?.courseId} ({data?.credit})</h2>
            <h1 className="text-sm font-bold">{data?.course?.title}</h1>
        </div>
        <div className="">
            <span className="text-6xl font-black text-(--theme-primary)/20">{ data.totalScore && (!!data?.status) ? data.grade : '-' }</span>
        </div>
        </div>
        <input type="range" className="w-full h-10 accent-(--theme-primary) border-none outline-none bg-transparent cursor-pointer range" value={data?.totalScore || 0} max={100} min={0} readOnly aria-valuenow={50} aria-valuetext='Score'/>
        <div className="flex items-center justify-between text-(--theme-primary)/70">
        <span className="text-base font-semibold">{ data.totalScore && (!!data?.status) ? remark : '' }</span>
        { data?.totalScore ? (<span className="text-base font-semibold">{data?.totalScore}/100</span>): '' }
        </div>
    </div>
  )
}
