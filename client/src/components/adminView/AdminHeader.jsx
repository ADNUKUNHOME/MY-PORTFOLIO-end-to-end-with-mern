import { Glasses } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import ThemeToggle from "../darkMode/themeToggle"
import { useDispatch } from "react-redux"
import { logoutUser } from "@/store/auth-slice"
import { useToast } from "@/hooks/use-toast"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../ui/alert-dialog"
import { Separator } from "../ui/separator"
import { useState } from "react"

const AdminHeader = () => {

    const dispatch = useDispatch();
    const { toast } = useToast();
    const [logoutAlert, setLogoutAlert] = useState(false);


    function handleLogout() {
        dispatch(logoutUser()).then((data) => {
            if (data.payload?.success) {
                toast({
                    title: data.payload?.message
                })
            } else {
                toast({
                    title: data.payload?.message
                })
            }
        })
    }

    return (
        <header className="sticky top-0 w-full h-20 z-40">
            <div className="flex items-center justify-between px-4 py-2 md:py-4 md:px-6 shadow-lg">
                <Link to='/admin/dashboard' className="flex gap-2 font-extrabold text-lg items-center text-black hover:text-black dark:hover:text-white dark:text-white">
                    <Glasses className="fill-sky-500 text-sky-500" />
                    <p>KNOWME</p>
                </Link>
                <ThemeToggle />
                <Button className='bg-sky-500 dark:bg-red-700 dark:text-white hover:bg-white hover:text-black dark:hover:bg-gray-500 dark:hover:text-white border-none shadow-xl text-sm md:text-lg font-bold px-3 md:px-8' onClick={() => setLogoutAlert(true)}>LOGOUT</Button>
                <AlertDialog open={logoutAlert} onOpenChange={setLogoutAlert}>
                    <AlertDialogContent>
                        <AlertDialogHeader className='items-center justify-center'>
                            <AlertDialogTitle className='text-xl font-bold'>Are You Sure?</AlertDialogTitle>
                            <Separator />
                            <AlertDialogDescription>Are You Sure want to Logout</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>No</AlertDialogCancel>
                            <AlertDialogAction className='bg-red-600 text-white' onClick={() => handleLogout()}>Sure</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </header>
    )
}

export default AdminHeader
