import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { fetchAllProjects } from "@/store/admin-slice/projectSlice"
import { Link2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"
import WrongPage from "./wrongPage"
import ProjectImgDialog from "@/components/userView/ProjectImgDialog"

const Projects = () => {

  const { projects } = useSelector(state => state.project);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const { ref, inView } = useInView({
    threshold: 0.1
  });

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, [dispatch])

  return (
    <div className="flex flex-col w-full min-h-screen p-5">
      <div className="flex w-full items-center justify-center py-5 mb-5">
        <p className="font-extrabold text-3xl md:text-4xl border-b-2 border-sky-500 dark:border-red-700">WHAT HAVE I DONE?</p>
      </div>
      {
        projects && projects.length > 0 ?
          projects.map((project, index) => (
            <div key={index} className="flex flex-col w-full" ref={ref}>
              <Card>
                <CardContent className="flex w-full h-[400px] shadow-xl pt-5 overflow-hidden p-0">
                  {[project.image1, project.image2, project.image3, project.image4].map((img, i) => (
                    <motion.div
                      initial={i <= 1 ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.1 }}
                    >
                      <div
                        key={i}
                        onClick={() => {
                          setSelectedImg([project.image1, project.image2, project.image3, project.image4]);
                          setOpenDialog(true)
                        }
                        }
                        className={`relative flex-1 h-full overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:rounded-xl ${i === 0 ? '' : i < 2 ? 'hidden md:block' : 'hidden lg:block'
                          }`}
                      >
                        <img src={img} className="w-full h-full object-cover" />
                          <Button
                            className="absolute bottom-2 right-4 px-2 py-5 text-white hover:bg-black/30 bg-black/40 backdrop-blur-sm text-lg rounded-md lg:hidden"
                          >
                            {`+${3 -i}`}
                          </Button>
                      </div>
                    </motion.div>
                  ))}
                  {
                    selectedImg && (<ProjectImgDialog open={openDialog} setOpen={setOpenDialog} images={selectedImg} />)
                  }
                </CardContent>
              </Card>
              <Card>
                <CardContent className='grid grid-cols-2 justify-between gap-4 md:flex shadow-xl pt-5 mb-5 items-center md:justify-between'>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Button className='w-full bg-sky-800 dark:bg-red-900 text-white dark:text-white hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black hover:shadow-xl text-[12px] md:text-sm'>TITLE HERE</Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p className='flex items-center justify-center font-bold text-2xl'>
                        {project.title}
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Button className='w-full bg-sky-500 dark:bg-red-700 text-white dark:text-white hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black hover:shadow-xl text-[11px] md:text-sm'>Technologies Used</Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p className='flex font-bold items-center justify-center'>
                        {project.technologies}
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Button className='w-full bg-sky-500 dark:bg-red-700 text-white dark:text-white hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black hover:shadow-xl text-[11px] md:text-sm'>Details</Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p className='flex font-bold text-gray-500 items-center justify-center'>
                        {project.description}
                      </p>

                    </HoverCardContent>
                  </HoverCard>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Button onClick={() => window.open(project.deployUrl, '_blank')} className=' w-full bg-sky-500 dark:bg-red-700 text-white dark:text-white hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black hover:shadow-xl text-[11px] md:text-sm'>Preview Now</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className='flex font-bold text-sky-500 items-center justify-center gap-1'>
                      <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 text-sky-500 font-bold hover:underline"
                      >
                        <Link2 className="w-5 h-5 text-sky-500" />
                        {project.deployUrl}
                      </a>
                    </HoverCardContent>
                  </HoverCard>
                </CardContent>
              </Card>
            </div>
          ))
          : <WrongPage wrong={"Check Your Connection...!"} />
      }


    </div>
  )
}

export default Projects
