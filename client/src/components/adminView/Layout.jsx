import { Outlet } from "react-router-dom"
import AdminHeader from "./AdminHeader"
import AdminNavbar from "./Navbar"

const AdminLayout = () => {
    return (
        <div className="flex flex-col w-screen h-screen overflow-hidden gap-5">
            <AdminHeader />
            <div className="flex flex-1 overflow-hidden">
                <AdminNavbar />
                <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-950 gap-5 px-5">
                    <Outlet />
                </main>
            </div>

        </div>
    )
}

export default AdminLayout
