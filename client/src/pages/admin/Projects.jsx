import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CloudUpload, Link2, MousePointer } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import AddProjectDialog from "@/components/adminView/ProjectDialog"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProjects } from "@/store/admin-slice/projectSlice"
import ProjectDetailsDialog from "@/components/adminView/ProjectDetailsDialog"


const AdminProjects = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const { projects } = useSelector(state => state.project);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  useEffect(() => {
    dispatch(fetchAllProjects())
  }, [dispatch])


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
      {
        projects && projects.length > 0 ?
          projects.map((project, index) => (
            <div key={index} className="md:flex items-center justify-between w-full p-5">
              <Card className="w-full md:w-1/2 h-[400px] shadow-xl">
                <CardContent >
                  <div className="flex justify-center object-contain h-[400px]">
                    <img src={project.image1} className="" />
                  </div>
                </CardContent>
              </Card>
              <Card className='flex w-full md:w-1/2 h-[400px] shadow-xl bg-gradient-to-r from-slate-900 to-slate-700'>
                <CardContent className='w-full h-full flex items-center justify-center'>
                  <div className="flex flex-col items-center justify-center gap-7">
                    <div className="flex flex-col gap-2 items-center justify-center text-white">
                      <h1 className='font-bold text-3xl'>{project.title}</h1>
                      <Link className="flex items-center gap-1">
                        <Link2 className="text-sky-500 w-4 h-4" />
                        <p className="font-bold text-sky-500">{project.deployUrl}</p>
                      </Link>
                      <p className='font-bold text-gray-500'>{project.description}</p>
                      <div className="flex items-center gap-1">
                        <MousePointer className="w-5 h-5 transform rotate-90 text-sky-500 fill-sky-500" />
                        <p className="font-bold text-sm">{project.technologies}</p>
                      </div>
                    </div>
                    <Button onClick={() => setOpenDetailsDialog(true)}>View Details</Button>
                  </div>
                </CardContent>
              </Card>
              <ProjectDetailsDialog open={openDetailsDialog} setOpen={setOpenDetailsDialog} project={project} />
            </div>
          ))
          : null
      }

    </div>
  )
}

export default AdminProjects
