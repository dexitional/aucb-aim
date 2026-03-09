import Photo from "/tanstack-circle-logo.png";

export default function BioCard({ data }:any) {

  return (
    <div className="flex flex-row gap-x-4">
        <img src={data?.photo || Photo} alt="Photo" className="h-18 w-18 object-cover object-top rounded-lg" />
        <div className="flex flex-col -space-y-1">
        <h2 className="font-semibold text-base sm:text-lg capitalize">
        {(`${data?.fname} ${data?.mname && data?.mname+' '}${data?.lname}`)?.toLowerCase()}
        </h2>
        <p className="text-sm sm:text-lg capitalize">{data?.program?.shortName?.toLowerCase()}</p>
        <p className="text-sm sm:text-base">Year {Math.ceil(data?.semesterNum/2)}</p>
        </div>
    </div>
  )
}
