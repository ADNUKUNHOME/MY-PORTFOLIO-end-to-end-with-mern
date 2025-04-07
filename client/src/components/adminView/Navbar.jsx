import { Link } from "react-router-dom"
import { Separator } from "../ui/separator"

const AdminNavbar = () => {
  return (
    <div className="hidden md:flex flex-col sticky w-60 h-screen shadow-lg gap-4 p-5">
      <div className="flex w-full justify-center">
        <h1 className="font-extrabold text-lg">KNOWME</h1>
      </div>
     <Separator/>
     <div className="flex flex-col gap-4">
        <Link to='/admin/dashboard' className="flex shadow-lg bg-gray-300 dark:bg-red-700 hover:bg-gray-200 dark:hover:bg-gray-400 items-center justify-center rounded-lg py-1">
            <h3 className="font-bold text-lg text-gray-600 dark:text-white">DASHBOARD</h3>
        </Link>
        <Link to='/admin/projects' className="flex shadow-lg bg-gray-300 dark:bg-red-700 hover:bg-gray-200 dark:hover:bg-gray-400 items-center justify-center rounded-lg py-1">
            <h3 className="font-bold text-lg text-gray-600 dark:text-white">PROJECTS</h3>
        </Link>
        <Link to='/admin/skills' className="flex shadow-lg bg-gray-300 dark:bg-red-700 hover:bg-gray-200 dark:hover:bg-gray-400 items-center justify-center rounded-lg py-1">
            <h3 className="font-bold text-lg text-gray-600 dark:text-white">SKILLS</h3>
        </Link>
     </div>
    </div>
  )
}

export default AdminNavbar
