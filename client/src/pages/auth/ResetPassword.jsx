import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { passwordResetOtp, resetPassword } from "@/store/auth-slice"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const ResetPassword = () => {

    const { resetOtpSent } = useSelector(state => state.auth);
    const [email, setEmail] = useState(null);
    const [sendOtp, setSentOtp] = useState(false);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [otpSubmitted, setOtpSubmitted] = useState(false);
    const [newPass, setNewPass] = useState('');
    const inputRefs = useRef([]);
    const { toast } = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function handleSendResetOtp(email) {
        if (!email) {
            toast({
                title: 'Oops!',
                description: 'Enter Your Email...',
                variant: 'destructive'
            })
        } else {
            dispatch(passwordResetOtp(email)).then((data) => {
                if (data?.payload?.success) {
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

    function handleResetPassword() {
        dispatch(resetPassword({ email, otp, newPassword: newPass })).then((data) => {
            console.log(data);
            if(data?.payload?.success) {
                toast({
                    title: 'Success',
                    description: data?.payload?.message
                })
                navigate('/auth/login');
            } else {
                toast({
                    title: 'Error',
                    description: data?.payload?.message,
                    variant: 'destructive'
                })
                setSentOtp(false);
            }
        });
    }
    



    const handleInput = (e, index) => {
        if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text').slice(0, 6).split('');
        const newOtp = [...otp];
    
        paste.forEach((char, index) => {
            if (inputRefs.current[index]) {
                inputRefs.current[index].value = char;
                newOtp[index] = char;
            }
        });
    
        setOtp(newOtp);
    };
    

    useEffect(() => {
        if (resetOtpSent) {
            setSentOtp(true);
        }
    }, [resetOtpSent]);


    return (
        <Card className='bg-slate-500 dark:bg-gradient-to-br dark:from-blue-500 dark:to-purple-700 flex flex-col items-center justify-center p-10 border-slate-400'>
            {
                sendOtp ?
                    <Button onClick={() => setSentOtp(false)} className='self-start font-bold shadow-lg p-0 rounded-3xl bg-transparent'><ArrowLeft /></Button>
                    : null
            }
            <CardHeader>
                <CardTitle className='text-white dark:text-white font-extrabold text-2xl'>{sendOtp ? 'Reset Password OTP' : 'Enter Your Registered Email ID' }</CardTitle>
            </CardHeader>
            <CardContent className='items-center justify-center'>
                {
                    sendOtp &&  !otpSubmitted ? (
                        <div className="flex flex-col">
                            <p className="font-semibold text-slate-800 dark:text-muted-foreground">Enter the 6 digit code sent to your email id</p>
                            <div className="flex justify-between mt-5" onPaste={handlePaste}>
                                {
                                    Array(6).fill(0).map((_, index) => (
                                        <Input type='text' maxLength='1' key={index} required
                                            className='w-12 h-12 rounded-md bg-[#333A5c] dark:bg-[#333A5c] text-white dark:text-white text-center text-xl'
                                            ref={(el) => (inputRefs.current[index] = el)}
                                            onInput={(e) => handleInput(e, index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            onChange={(e) => {
                                                const newOtp = [...otp];
                                                newOtp[index] = e.target.value;
                                                setOtp(newOtp.join(""));
                                            }} />
                                    ))
                                }
                            </div>
                            <Button onClick={() => setOtpSubmitted(true)} className='py-3 px-4 mt-7 w-full rounded-3xl text-white bg-gradient-to-r from-indigo-600 to-indigo-950 dark:text-white dark:bg-gradient-to-r dark:from-black dark:to-indigo-950'>Verify OTP</Button>
                        </div>
                    ) : (
                        <div className={`${otpSubmitted ? 'hidden' : 'flex flex-col items-center' }`}>
                            <p className="font-semibold text-slate-800 mb-5 dark:text-muted-foreground">Reset Password Authentication</p>
                            <div className="flex rounded-full bg-white w-full max-w-xs items-center">
                                <Input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='example@gmail.com' className='border-none font-semibold text-black dark:text-black outline-none bg-transparent px-4 py-2 flex-1 focus:ring-0 focus:border-transparent focus-visible:ring-0 focus:outline-none  focus-visible:border-transparent shadow-none' />
                                <div onClick={() => handleSendResetOtp(email)} className='bg-black rounded-full py-3 px-6 text-white text-lg cursor-pointer'><ArrowRight /></div>
                            </div>
                        </div>)
                }
                {
                    otpSubmitted ?
                        
                            <div className='flex flex-col items-center'>
                                <p className="font-semibold text-slate-800 mb-5 dark:text-muted-foreground">Enter New Password</p>
                                <div className="flex rounded-full bg-white w-full max-w-xs items-center">
                                    <Input onChange={(e) => setNewPass(e.target.value)} value={newPass} type='password' placeholder='enter new password' className='border-none font-semibold text-black dark:text-black outline-none bg-transparent px-4 py-2 flex-1 focus:ring-0 focus:border-transparent focus-visible:ring-0 focus:outline-none  focus-visible:border-transparent shadow-none' />
                                    <div onClick={(e) => handleResetPassword(e)} className='bg-black rounded-full py-3 px-6 text-white text-lg cursor-pointer'><ArrowRight /></div>
                                </div>
                            </div>  : null
                    }
            </CardContent>
        </Card>
    )
}

export default ResetPassword
