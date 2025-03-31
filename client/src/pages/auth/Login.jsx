import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"
import CommonForm from "@/common/CommonForm"
import { loginFormControls } from "@/config"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useDispatch } from "react-redux"
import { loginUser } from "@/store/auth-slice"


const initialState = {
    email: '',
    password: ''
}

const Login = () => {

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const { toast } = useToast();

    function onSubmit(event) {
        event?.preventDefault();

        if (!formData.email || !formData.password) {
            toast({
                title: 'You must fill all fields'
            })
        } else {

        dispatch(loginUser(formData)).then((data) => {
            if(data?.payload?.success) {
                toast({
                    title: data?.payload?.message
                })               
            } else {
                toast({
                    title: "Error",
                    description: data?.payload?.message || "Something went wrong!",
                    variant: "destructive",
                })
            }   
            
        })
    }
    }


    return (
        <Card className='min-h-[350px] min-w-[350px] mb-5'>
            <CardHeader>
                <CardTitle className='font-extrabold text-4xl self-center'>Sign In</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4 text-sm '>
                <CommonForm
                    formControls={loginFormControls}
                    onSubmit={onSubmit}
                    formData={formData}
                    setFormData={setFormData}
                />
                <Link className="self-center" to={'/auth/reset-password'}>Forgot Password?</Link>
            </CardContent>
            <Separator className='mb-5' />
            <CardFooter className='flex flex-col'>
                <p className="text-sm">Don't have an account? <Link to={'/auth/register'}>Sign Up</Link></p>
                <Button onClick={() => onSubmit()} className='mt-5 w-full bg-black text-white hover:bg-white hover:text-black dark:bg-purple-600 dark:text-white dark:hover:bg-white dark:hover:text-black'>Submit</Button>
            </CardFooter>
        </Card>
    )
}

export default Login;