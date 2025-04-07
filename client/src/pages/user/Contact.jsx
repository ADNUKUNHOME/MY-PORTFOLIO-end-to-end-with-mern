import CommonForm from "@/common/CommonForm"
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { userContactControlls } from "@/config";
import { useState } from "react"

const Contact = () => {

  const [formData, setFormData] = useState([]);

  const onSubmit = () => {

  }

  return (
    <div className="flex w-full min-h-screen">
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
    </div>
  )
}

export default Contact
