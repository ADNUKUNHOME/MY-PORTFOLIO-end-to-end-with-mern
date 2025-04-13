import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileCode,
  LayoutDashboard,
  Code,
  BadgeCheck,
  Wand2,
  Server,
  Database,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const homeSkills = [
  {
    name: "HTML",
    icon: <FileCode className="w-4 h-4" />,
    bgColor: "bg-orange-400",
    textColor: "text-white",
  },
  {
    name: "CSS",
    icon: <LayoutDashboard className="w-4 h-4" />,
    bgColor: "bg-blue-500",
    textColor: "text-white",
  },
  {
    name: "JavaScript",
    icon: <Code className="w-4 h-4" />,
    bgColor: "bg-yellow-400",
    textColor: "text-black",
  },
  {
    name: "Bootstrap",
    icon: <BadgeCheck className="w-4 h-4" />,
    bgColor: "bg-purple-600",
    textColor: "text-white",
  },
  {
    name: "Node.js",
    icon: <Server className="w-4 h-4" />,
    bgColor: "bg-green-600",
    textColor: "text-white",
  },
  {
    name: "MongoDB",
    icon: <Database className="w-4 h-4" />,
    bgColor: "bg-emerald-600",
    textColor: "text-white",
  },
];

const HomeSkills = () => {

    const {ref, inView} = useInView({
        threshold: 0.4
    })

  return (
    <section className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 dark:text-white">Top Skills</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10" ref={ref}>
          {homeSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={inView ? {opacity: 1, y: 0} : { opacity: 0, y: 100 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              className={`${skill.bgColor} ${skill.textColor} flex items-center gap-2 px-4 py-2 rounded-full shadow-sm text-sm font-semibold `}
            >
              {skill.icon} {skill.name}
            </motion.div>
          ))}
        </div>

        <Link
          to="/user/skills"
          className="inline-block px-6 py-2 bg-sky-500 text-white dark:bg-red-700 dark:text-white hover:bg-white hover:text-sky-500 dark:hover:bg-white dark:hover:text-red-700 border hover:border-sky-500 dark:hover:border-red-700 hover:shadow-xl rounded-full font-semibold shadow transition"
        >
          View All Skills
        </Link>
      </div>
    </section>
  );
};

export default HomeSkills;
