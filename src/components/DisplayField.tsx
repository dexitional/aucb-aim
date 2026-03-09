export default function DisplayField({ label , value, ucase = null }: any) {
  return (
    <div className="flex flex-col space-y-0 font-poppins">
        <span className="">{label}</span>
        <p className={`font-semibold ${ucase ? ucase : 'capitalize'}`}>{typeof value === 'string' ? value?.toLowerCase() : 'N/A' }</p>
    </div>
  )
}
