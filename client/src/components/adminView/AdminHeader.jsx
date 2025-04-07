import { Glasses } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import ThemeToggle from "../darkMode/themeToggle"
import { useSelector } from "react-redux"

const AdminHeader = () => {

    const {user} = useSelector(state => state.auth);

    return (
        <header className="sticky top-0 w-full h-20 z-40">
            <div className="flex items-center justify-between px-4 py-2 md:py-4 md:px-6 shadow-lg">
                <Link to='/admin/dashboard' className="flex gap-2 font-extrabold text-lg items-center text-black hover:text-black dark:hover:text-white dark:text-white">
                    <Glasses  className="fill-sky-500 text-sky-500" />
                    <p>KNOWME</p>
                </Link>
                <ThemeToggle/>
                {
                    user ? <Button className='bg-sky-500 dark:bg-red-700 dark:text-white hover:bg-white hover:text-black dark:hover:bg-gray-500 dark:hover:text-white border-none shadow-xl text-sm md:text-lg font-bold px-3 md:px-8'>LOGOUT</Button>
                    : <Button className='bg-sky-500 dark:bg-red-700 dark:text-white hover:bg-white hover:text-black dark:hover:bg-gray-500 dark:hover:text-white border-none shadow-xl text-sm md:text-lg font-bold px-3 md:px-8'>LOGIN</Button>
                }
            </div>
        </header>
    )
}

export default AdminHeader
