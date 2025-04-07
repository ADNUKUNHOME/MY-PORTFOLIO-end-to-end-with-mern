import { LogOut, Menu } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Label } from "../ui/label"
import { userViewHeaderMenuItems } from "@/config"
import { useSelector } from "react-redux"
import ThemeToggle from "../darkMode/themeToggle"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../ui/alert-dialog"
import { useState } from "react"
import { Separator } from "../ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

const UserHeader = () => {

    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const [sheetOpen, setSheetOpen] = useState(false);


    const RightHeaderContent = () => {

        const [openDialog, setOpenDialog] = useState(false);
        const [confirmEmailChange, setconfirmEmailChange] = useState(false);


        return <div className="flex">
            <div className="mr-5">
                <ThemeToggle />
            </div>
            {
                !user ? <Button
                    className='bg-sky-500 dark:bg-slate-800 text-white dark:text-white hover:bg-white hover:text-black hover:border-white dark:hover:border-transparent dark:hover:bg-slate-700 shadow-xl hover:shadow-xl px-4 py-2c cursor-pointer'
                    onClick={() => navigate('/auth/login')}
                >SIGN UP</Button> :
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar>
                                <AvatarFallback className='text-xl font-extrabold'>{user.userName[0].toUpperCase() || 'BR'}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>
                                My Account
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setOpenDialog(true)}>
                                My Profile
                                <DropdownMenuShortcut>Ctrl+P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem disabled>
                                Add Account
                                <DropdownMenuShortcut>Ctrl+A</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-red-500'>
                                <LogOut />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
            }
            {
                <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
                    <AlertDialogContent>
                        <AlertDialogHeader className='items-center justify-center'>
                            <AlertDialogTitle>Your logged in Email Id</AlertDialogTitle>
                            <Separator />
                            <AlertDialogDescription className="text-xl font-bold text-green-600">{user?.email || 'Not Logged In'}</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Back</AlertDialogCancel>
                            <AlertDialogAction className='bg-red-600 text-white' onClick={() => setconfirmEmailChange(true)}>Change ID</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            }
            {
                <AlertDialog open={confirmEmailChange} onOpenChange={setconfirmEmailChange}>
                    <AlertDialogContent>
                        <AlertDialogHeader className='items-center justify-center'>
                            <AlertDialogTitle className='text-xl font-bold'>Are You Sure?</AlertDialogTitle>
                            <Separator />
                            <AlertDialogDescription>Are you sure to change your email id? you will be logged out and redirect to the login session</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>No</AlertDialogCancel>
                            <AlertDialogAction className='bg-red-600 text-white'>Sure</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            }
        </div>
    }


    const MenuItems = () => {

        const handleNavigate = (getMenuItem) => {
            navigate(getMenuItem.path);
            setSheetOpen(false);
        }

        return <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
            {
                userViewHeaderMenuItems
                    .map(menuItem =>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Label
                                        onClick={() => handleNavigate(menuItem)}
                                        className='text-sm font-medium cursor-pointer text-black dark:text-white hover:border-b-2 hover:border-sky-500 pb-1 dark:hover:border-red-700'
                                        key={menuItem.id} >
                                        {menuItem.label}
                                    </Label>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="font-semibold">{menuItem.tooltip}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )
            }
        </nav >
    }





    return (
        <header className="sticky top-0 h-16 z-40 w-full border-b bg-background ">
            <div className="flex h-full items-center justify-between px-4 md:px-6">
                <Link to="/user/home" className="flex items-center gap-2 text-black dark:text-white" >
                    <span className="font-bold">KNOWME</span>
                </Link>
                <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild >
                        <Button variant='outline' size='icon' className='lg:hidden text-black dark:text-white'>
                            <Menu className="w-6 h-6" />
                            <span className="sr-only">Toggle Header Menu</span>
                        </Button>
                    </SheetTrigger >
                    <SheetContent side='left' className='w-full max-w-xs'>
                        <SheetTitle className='mb-7 font-bold'>Pages</SheetTitle>
                        <Separator />
                        <MenuItems />
                        <RightHeaderContent />
                    </SheetContent>
                </Sheet >
                <div className="hidden lg:block">
                    <MenuItems />
                </div>
                {
                    <div className="hidden lg:block">
                        <RightHeaderContent />
                    </div>
                }
            </div >
        </header >
    )
}

export default UserHeader
