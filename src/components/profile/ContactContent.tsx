import DisplayField from '../DisplayField'

export default function ContactContent({ data }: any) {
  return (
    <main className="px-4 h-full flex flex-col space-y-4">
        <DisplayField label="Personal Phone Number" value={data?.phone} />
        <DisplayField label="Personal Email Address" value={data?.email} ucase="lowercase" />
        <DisplayField label="Residential Address" value={data?.address} ucase="uppercase"/>
        <DisplayField label="Emergency Contact Name" value={data?.guardianName} />
        <DisplayField label="Emergency Contact Phone Number" value={data?.guardianPhone} />
    </main>
  )
}
