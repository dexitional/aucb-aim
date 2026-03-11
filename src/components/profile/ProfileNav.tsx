export default function ProfileNav({ setPage, page }: any) {
  return (
    <nav className="my-4 sm:my-6 p-1.5 sm:p-2 w-full flex flex-row gap-2 sm:gap-4 bg-(--theme-secondary)/10 text-base sm:text-lg rounded-md sm:rounded-lg shadow-sm">
    <button onClick={() => setPage('index')} className={`px-3 sm:px-4 py-0.5 rounded-md transform transition-transform duration-100 ease-in-out ${ page == 'index' ? 'text-white font-bold bg-(--theme-primary) rounded-md sm:rounded-lg':'text-(--theme-primary)'}`}>Personal</button>
    <button onClick={() => setPage('program')} className={`px-3 sm:px-4 py-0.5 rounded-md transform transition-transform duration-300 ease-in-out ${ page == 'program' ? 'text-white font-bold bg-(--theme-primary) rounded-md sm:rounded-lg':'text-(--theme-primary)'}`}>Programme</button>
    <button onClick={() => setPage('contact')} className={`px-3 sm:px-4 py-0.5 rounded-md transform transition-transform duration-300 ease-in-out ${ page == 'contact' ? 'text-white font-bold bg-(--theme-primary) rounded-md sm:rounded-lg':'text-red-950'}`}>Contact</button>
  </nav>
  )
}
