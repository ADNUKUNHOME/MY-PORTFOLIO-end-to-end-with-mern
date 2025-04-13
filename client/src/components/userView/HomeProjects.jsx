import { Link } from "react-router-dom"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchAllProjects } from "@/store/admin-slice/projectSlice"
import { useInView } from "react-intersection-observer"


const HomeProjects = () => {

    const {projects} = useSelector(state => state.project);
    const dispatch = useDispatch();
    const {ref, inView} = useInView({
        threshold: 0.3
    })

    useEffect(() => {
        dispatch(fetchAllProjects());
    }, [dispatch])

  return (
    <div className="max-w-6xl mx-auto text-center px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          A glimpse of what I've been working on. Dive deeper into the full list on the projects page!
        </p>

        <div className="grid gap-8 grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" ref={ref}>
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl border hover:border-sky-500 dark:hover:border-red-700 transition-all"
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 100}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
            >
              <img src={project.image1} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <Link to="/user/projects" className="text-sky-600 dark:text-red-700  font-medium hover:underline">
                  View More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Button asChild className="bg-sky-500 text-white hover:bg-white hover:text-sky-500 dark:bg-red-700 dark:text-white dark:hover:bg-white dark:hover:text-red-700 hover:shadow-xl rounded-lg border hover:border-sky-500 dark:hover:border-red-700">
            <Link to="/user/projects">Explore All Projects</Link>
          </Button>
        </div>
      </div>
  )
}

export default HomeProjects
