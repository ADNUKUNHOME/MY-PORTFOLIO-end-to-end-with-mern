import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <Card  className='min-h-[350px] min-w-[300px] mb-5'>
            <CardHeader>
                <CardTitle className='font-extrabold text-4xl self-center'>Sign In</CardTitle>
            </CardHeader>
            <CardContent>
                <Label htmlFor='email'>Your Email Address</Label>
                <Input type='email' id='email'  className='mb-3' placeholder='Enter Your Email' />
                <Label htmlFor='password'>Password</Label>
                <Input id='password' placeholder='Enter Your password' />
                <Separator  className='my-5'/>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select You" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="hr">HR</SelectItem>
                        <SelectItem value="jobseeker">Job Seeker</SelectItem>
                        <SelectItem value="looking">Just For look</SelectItem>
                    </SelectContent>
                </Select>
            </CardContent>
            <Separator className='mb-5'/>
            <CardFooter className='flex flex-col'>
                <p className="text-sm">Don't have an account? <Link to={'/auth/register'}>Sign Up</Link></p>
                <Button className='mt-5 w-full bg-black text-white hover:bg-white hover:text-black dark:bg-purple-600 dark:text-white dark:hover:bg-white dark:hover:text-black'>Submit</Button>
            </CardFooter>
        </Card>
    )
}

export default Login;