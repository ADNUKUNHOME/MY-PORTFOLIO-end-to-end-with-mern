import { Button } from "@/components/ui/button"
import { Wrench } from "lucide-react"
import { Link } from "react-router-dom"

const WrongPage = ({ wrong }) => {
    return (
        <div className="flex flex-col w-screen min-h-screen">
            <div className="flex flex-col w-full h-screen gap-8 items-center justify-center p-5 rounded-xl shadow-xl bg-gray-50 dark:bg-slate-950">
                <Wrench onClick={() => window.location.reload()} className="rounded-xl cursor-pointer shadow-xl w-56 h-56 text-red-700 fill-red-700 p-5 dark:border-2 dark:border-slate-800" />
                <p className="font-extrabold text-xl md:text-3xl text-red-700">{wrong}</p>
                {
                    wrong === "You'r In Wrong Way!" ?
                        <div className='flex gap-5'>
                            <Link className="text-black">Go To : </Link>
                            <Link to={'/user/home'}>HOME</Link>
                            <Link to={'/auth/register'}>REGISTER</Link>
                            <Link to={'/auth/login'}>LOGIN</Link>
                        </div>
                        : <Button onClick={() => window.location.reload()} className='bg-red-700 text-white hover:bg-white hover:text-red-700'>Retry</Button>
                }

                <p className="font-bold text-sm md:text-xl text-red-300">You are in wrong page Or Your Connection has refused</p>
            </div>
        </div>
    )
}

export default WrongPage
