import DisplayField from '../DisplayField'

export default function ProgramContent({ data }:any) {
  return (
    <main className="px-4 h-full flex flex-col space-y-4">
        <DisplayField label="Student ID" value={data?.id} />
        <DisplayField label="Index Number" value={data?.indexno} />
        <DisplayField label="Student Email Address" value={data?.instituteEmail} ucase="lowercase" />
        <DisplayField label="Programme" value={data?.program?.shortName} />
        <DisplayField label="Major" value={data?.major?.shortName} />
        <DisplayField label="Study Mode" value={data?.studyMode == 'M' ? 'Morning' : data?.studyMode == 'E' ? 'Evening': data?.studyMode == 'W' ? 'Weekend': data?.studyMode} />
        <DisplayField label="Year Group" value={Math.ceil(data?.semesterNum/2)?.toString()} />
        {/* <DisplayField label="Department" value={data?.program?.unit?.longName} /> */}
        <DisplayField label="Academic Status" value={data?.completeStatus ? 'Completed': data?.deferStatus ? 'Deferred':'Active'} />
    </main>
  )
}
