
const Navbar = () => {
  return (
    <div className="py-3 px-10 flex items-center justify-between">
        <span className="text-2xl">Hubstaff Directory</span>
        <div>
          <ul className="flex items-center justify-center gap-8 uppercase text-sm">
            <li>How it works</li>
            <li>browse <i class="fa-solid fa-angle-down"></i></li>
            <li>Search</li>
            <li className="text-blue-400">Start a Profile</li>
            <li className="text-blue-400">add your agency</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
