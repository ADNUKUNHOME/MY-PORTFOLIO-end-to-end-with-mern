import { Card, CardContent } from "@/components/ui/card"
import blackAvatar from '../../assets/blackAvatar.png'
import { Button } from "@/components/ui/button"
import { CloudUpload, Link2, MousePointer } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import AddProjectDialog from "@/components/adminView/ProjectDialog"


const AdminProjects = () => {

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="flex flex-col gap-10 w-full min-h-screen justify-center shadow-lg">
      <div className="w-full flex justify-start">
        <Card
          onClick={() => setOpenDialog(true)}
          className="cursor-pointer hover:shadow-2xl transition-shadow border-2 border-dashed border-slate-300 hover:border-sky-400 dark:hover:border-red-700 bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center h-52 w-full md:w-1/2 mx-auto"
        >
          <CardContent className="flex flex-col items-center justify-center gap-3">
            <CloudUpload className="w-10 h-10 text-sky-500 dark:text-red-700" />
            <p className="text-lg font-semibold text-gray-700 dark:text-white">
              Add New Project
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Click to upload or create</p>
          </CardContent>
        </Card>
        <AddProjectDialog open={openDialog} setOpen={setOpenDialog} />
      </div>
      <div className="md:flex items-center justify-between w-full p-5">
        <Card className="w-full md:w-1/2 h-[400px] shadow-xl">
          <CardContent >
            <div className="flex justify-center object-contain h-[400px]">
              <img src={blackAvatar} className="" />
            </div>
          </CardContent>
        </Card>
        <Card className='flex w-full md:w-1/2 h-[400px] shadow-xl bg-gradient-to-r from-slate-900 to-slate-700'>
          <CardContent className='w-full h-full flex items-center justify-center'>
              <div className="flex flex-col items-center justify-center gap-7">
                <div className="flex flex-col gap-2 items-center justify-center text-white">
                  <h1 className='font-bold text-3xl'>HEADING</h1>
                  <Link className="flex items-center gap-1">
                    <Link2 className="text-sky-500 w-4 h-4" />
                    <p className="font-bold text-sky-500">mysampleproject.com</p>
                  </Link>
                  <p className='font-bold text-gray-500'>description about the project</p>
                  <div className="flex items-center gap-1">
                    <MousePointer className="w-5 h-5 transform rotate-90 text-sky-500 fill-sky-500" />
                    <p className="font-bold text-sm">what are the tools I used for the project</p>
                  </div>
                </div>
                <Button>View Details</Button>
              </div>

          </CardContent>
        </Card>
      </div>
      <div className="md:flex items-center justify-between w-full p-5">
        <Card className="w-full md:w-1/2 h-[400px] shadow-xl">
          <CardContent >
            <div className="flex justify-center  h-[400px]">
              <img src={blackAvatar} className="object-contain h-full" />
            </div>
          </CardContent>
        </Card>
        <Card className='flex w-full md:w-1/2 h-[400px] shadow-xl bg-gradient-to-r from-slate-900 to-slate-700'>
          <CardContent className='w-full h-full flex items-center justify-center'>
              <div className="flex flex-col items-center justify-center gap-7">
                <div className="flex flex-col gap-2 items-center justify-center text-white">
                  <h1 className='font-bold text-3xl'>HEADING</h1>
                  <Link className="flex items-center gap-1">
                    <Link2 className="text-sky-500 w-4 h-4" />
                    <p className="font-bold text-sky-500">mysampleproject.com</p>
                  </Link>
                  <p className='font-bold text-gray-500'>description about the project</p>
                  <div className="flex items-center gap-1">
                    <MousePointer className="w-5 h-5 transform rotate-90 text-sky-500 fill-sky-500" />
                    <p className="font-bold text-sm">what are the tools I used for the project</p>
                  </div>
                </div>
                <Button>View Details</Button>
              </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AdminProjects
