export default function InputField({ label, name, defaultValue, onChange }: any) {
  return (
    <label className="flex flex-col space-y-1">
        <span className="text-[var(--theme-primary)]/80 font-semibold">{label}</span>
        <input type="text" placeholder="" defaultValue={defaultValue} name={name} onChange={onChange} className="py-2 px-4 w-full rounded-md border border-[var(--theme-secondary)]/50" />
    </label>
  )
}
