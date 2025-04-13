import CommonForm from "@/common/CommonForm"
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/userView/Footer";
import { userContactControlls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { userContactSubmission } from "@/store/user/contactSlice";
import { useState } from "react"
import { useDispatch } from "react-redux";

const Contact = () => {

  const [formData, setFormData] = useState([]);
  const dispatch = useDispatch();
  const { toast } = useToast();


  const onSubmit = (e) => {
    e.preventDefault();
    if (formData) {
      dispatch(userContactSubmission(formData)).then((data) => {
        if (data.payload?.success) {
          toast({
            title: 'Form Submitted',
            description: data?.payload?.message
          })
        } else {
          toast({
            title: 'Oops!',
            description: data?.payload?.message,
            variant: 'destructive'
          })
        }
      })
    } else {
      toast({
        title: 'Error!',
        description: 'You need to fill all fields!',
        variant: 'destructive'
      })
    }
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col  w-full h-full items-center justify-center p-5">
        <Card className='w-[350px] md:w-[500px] pt-12 px-7'>
          <CardContent>
            <div className="w-full">
              <h1 className="font-extrabold text-2xl self-center">JOIN ME</h1>
            </div>
            <Separator className='my-5' />
            <CommonForm formControls={userContactControlls} formData={formData} setFormData={setFormData} onSubmit={onSubmit} buttonText={"Let's Connect"} />
          </CardContent>
        </Card>
      </div>
      <div className="w-full  rounded-2xl">
        <Footer />
      </div>
    </div>
  )
}

export default Contact
