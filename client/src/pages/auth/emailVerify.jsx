import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { emailVerify, sendVerifyOtp } from "@/store/auth-slice";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const EmailVerify = () => {

  const [sendOtp, setSendOtp] = useState(false);
  const [email, setEmail] = useState(null);
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleSendVerifyOtp(getEmail) {
    if (!getEmail) {
      toast({
        title: 'Oops!',
        description: 'Enter Your Email...',
        variant: 'destructive'
      })
    } else {
      dispatch(sendVerifyOtp({ email: getEmail })).then((data) => {
        if (data?.payload?.success) {
          toast({
            title: data?.payload?.message
          })
          setSendOtp(true);
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

  function handleVerifyOtp(getOtp) {
    if (!getOtp || getOtp.length !== 6) {
      toast({
        title: 'Oops!',
        description: 'Enter a valid OTP',
        variant: 'destructive'
      })
    } else {
      dispatch(emailVerify({ email, otp: getOtp })).then((data) => {
        if (data?.payload?.success) {
          toast({
            title: 'Success',
            description: data?.payload?.message
          })
          navigate('/auth/login')
        } else {
          toast({
            title: 'Oops!',
            description: data?.payload?.message,
            variant: 'destructive'
          })
        }
      })
    }
  }


  function InputOTPDemo() {
    return (
      <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
        <InputOTPGroup className='bg-gray-400 rounded-lg'>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup className='bg-gray-400 rounded-lg'>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
  }

  return (
    <Card className='bg-slate-500 dark:bg-gradient-to-br dark:from-blue-500 dark:to-purple-700 flex flex-col items-center justify-center p-10 border-slate-400'>
      {
        !sendOtp ? 
        <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={() => navigate('/auth/login')} className='self-start font-bold shadow-lg p-0 rounded-3xl bg-transparent dark:text-white dark:hover:text-black'><ArrowLeft /></Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-semibold">Back</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
          :
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={() => setSendOtp(false)} className='self-start font-bold shadow-lg p-0 rounded-3xl bg-transparent'><ArrowLeft /></Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold">Resend OTP</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
      }
      <CardHeader>
        <CardTitle className='text-white dark:text-white font-extrabold text-2xl  mb-6 self-center'>
          {
            !sendOtp ? 'Verify Your Email Address' : 'Enter OTP To Verify'
          }
        </CardTitle>
        <CardContent>
          {
            !sendOtp ?
              <div className={'flex flex-col items-center justify-center'}>
                <p className="font-semibold text-slate-800 mb-5 dark:text-muted-foreground">Verify Your Email Address to login</p>
                <div className="flex rounded-full bg-white w-full max-w-xs items-center">
                  <Input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='example@gmail.com' className='border-none font-semibold text-black dark:text-black outline-none bg-transparent px-4 py-2 flex-1 focus:ring-0 focus:border-transparent focus-visible:ring-0 focus:outline-none  focus-visible:border-transparent shadow-none' />
                  <div onClick={() => handleSendVerifyOtp(email)} className='bg-black rounded-full py-3 px-6 text-white text-lg cursor-pointer'><ArrowRight /></div>
                </div>
              </div>
              :
              <div className="flex flex-col items-center justify-center gap-3">

                <p className="font-semibold text-slate-800 mb-5 dark:text-muted-foreground">We Sent An OTP to Your email. Enter it here to continue</p>
                <InputOTPDemo />
                <Button onClick={() => handleVerifyOtp(otp)} className='py-3 px-4 mt-7 w-full rounded-3xl text-white bg-gradient-to-r from-indigo-600 to-indigo-950 dark:text-white dark:bg-gradient-to-r dark:from-black dark:to-indigo-950'>Verify OTP</Button>
              </div>
          }
        </CardContent>
      </CardHeader>
    </Card>
  )
}

export default EmailVerify
