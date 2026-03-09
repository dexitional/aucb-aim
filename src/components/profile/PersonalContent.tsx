import moment from 'moment'
import DisplayField from '../DisplayField'

export default function PersonalContent({ data }: any) {
  return (
    <main className="px-4 h-full flex flex-col space-y-4">
        <DisplayField label="Username" value={data?.instituteEmail} ucase="lowercase"/>
        <DisplayField label="Surname" value={data?.lname} />
        <DisplayField label="Other Names" value={`${data?.fname} ${data?.mname}`} />
        <DisplayField label="Gender" value={data?.gender == 'M' ? 'Male':'Female'} />
        <DisplayField label="Date of Birth" value={moment(data?.dob).format('MMMM DD, YYYY')} />
        {/* <DisplayField label="Passport Number" value="N/A" /> */}
        <DisplayField label="Ghana Card Number" value={data?.ghcardNo} />
        <DisplayField label="Country" value={data?.country?.longName} />
        <DisplayField label="Region" value={data?.region?.title} />
        <DisplayField label="Hometown" value={data?.hometown} />
        <DisplayField label="Religion" value={data?.religion?.title} />
    </main>
  )
}
