import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Link, useNavigate } from "react-router-dom"
import CommonForm from "@/common/CommonForm"
import { registerFormControls } from "@/config"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useToast } from "@/hooks/use-toast"
import { registerUser } from "@/store/auth-slice"

const initialState = {
  userName: '',
  email: '',
  password: ''
}

const Register = () => {

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();


  function onSubmit(event) {
    event?.preventDefault();

    if (!formData.userName || !formData.email || !formData.password) {
      toast({
        title: 'You must fill all fields'
      })
    } else {

    dispatch(registerUser(formData)).then((data) => {
        if(data?.payload?.success) {
          toast({
            title: data?.payload?.message
          })
          navigate('/auth/login');
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
        <CardTitle className='font-extrabold text-4xl self-center'>Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <CommonForm
          formControls={registerFormControls}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
      </CardContent>
      <Separator className='mb-5' />
      <CardFooter className='flex flex-col'>
        <p className="text-sm">Already have an account? <Link to={'/auth/login'}>Sign In</Link></p>
        <Button onClick={() => onSubmit()} className='mt-5 w-full bg-black text-white hover:bg-white hover:text-black dark:bg-purple-600 dark:text-white dark:hover:bg-white dark:hover:text-black'>Submit</Button>
      </CardFooter>
    </Card>
  )
}

export default Register;