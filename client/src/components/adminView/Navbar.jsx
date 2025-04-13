import { Link, useNavigate } from "react-router-dom"
import { Separator } from "../ui/separator"
import { ChevronRight, LaptopMinimalCheck, LayoutGrid, User } from "lucide-react"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "../ui/menubar"
import { useState } from "react"

const AdminNavbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="flex flex-col">
    <Menubar className="sm:flex md:hidden lg:hidden absolute bg-transparent shadow-none top-16 left-3 z-50 border-none">
      <MenubarMenu>
        <MenubarTrigger
          onClick={() => setMenuOpen(prev => !prev)}
          className="flex items-center rounded-md border-none bg-transparent transition-all"
        >
          <ChevronRight
            size={18}
            className={`transform transition-transform duration-200 ${menuOpen ? 'rotate-90' : 'rotate-0'}`}
          />
        </MenubarTrigger>

        {menuOpen && (
          <MenubarContent className="mt-2 bg-white shadow-lg border rounded-md w-48">
            <MenubarItem className="flex justify-between items-center" onClick={() => navigate('/admin/dashboard')}>
              Dashboard <MenubarShortcut><LayoutGrid size={16} /></MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="flex justify-between items-center" onClick={() => navigate('/admin/projects')}>
              Projects <MenubarShortcut><LaptopMinimalCheck size={16} /></MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="flex justify-between items-center" onClick={() => navigate('/admin/contacts')}>
              Contacts <MenubarShortcut><User size={16} /></MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        )}
      </MenubarMenu>
    </Menubar>

      <div className="hidden md:flex flex-col sticky w-60 h-screen shadow-lg gap-4 p-5">
        <div className="flex w-full justify-center">
          <h1 className="font-extrabold text-lg">KNOWME</h1>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <Link to='/admin/dashboard' className="flex shadow-lg bg-gray-300 dark:bg-red-700 hover:bg-gray-200 dark:hover:bg-gray-400 items-center justify-center rounded-lg py-1">
            <h3 className="font-bold text-lg text-gray-600 dark:text-white">DASHBOARD</h3>
          </Link>
          <Link to='/admin/projects' className="flex shadow-lg bg-gray-300 dark:bg-red-700 hover:bg-gray-200 dark:hover:bg-gray-400 items-center justify-center rounded-lg py-1">
            <h3 className="font-bold text-lg text-gray-600 dark:text-white">PROJECTS</h3>
          </Link>
          <Link to='/admin/contacts' className="flex shadow-lg bg-gray-300 dark:bg-red-700 hover:bg-gray-200 dark:hover:bg-gray-400 items-center justify-center rounded-lg py-1">
            <h3 className="font-bold text-lg text-gray-600 dark:text-white">SKILLS</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar
