export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button className="px-4 py-2 bg-enerakd-700 rounded-md shadow-md text-emerald100 hover:bg-emerald-200 active:bg-emerald-300 transition-all" onClick={onClick} type={type}>
      {children}
    </button>
  )
}
