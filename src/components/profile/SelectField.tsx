export default function SelectField({ label, name, defaultValue, onChange, options }: any) {
  return (
    <label className="flex flex-col space-y-1">
        <span className="text-[var(--theme-primary)]/80 font-semibold">{label}</span>
        <select name={name} onChange={onChange} defaultValue={defaultValue} className="py-2 px-4 w-full rounded-md border border-[var(--theme-primary)]/50 file:px-3 capitalize">
             <option>No Major</option>
            { options?.map((row:any, i:number) => (<option key={i} value={row?.value}>{row?.label}</option>)) }
        </select>
    </label>
  )
}
