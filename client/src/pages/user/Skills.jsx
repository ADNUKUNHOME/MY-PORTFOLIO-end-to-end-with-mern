import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Link } from "react-router-dom";
import {
  FileCode,
  LayoutDashboard,
  Code,
  BadgeCheck,
  Wand2,
  Server,
  Database,
  Leaf,
  Atom,
  Paintbrush2,
  TerminalSquare,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const skills = [
  {
    name: "HTML",
    icon: <FileCode className="w-5 h-5" />,
    bgColor: "bg-orange-400",
    textColor: "text-white",
    level: "Expert",
    projects: "/user/projects",
  },
  {
    name: "CSS",
    icon: <LayoutDashboard className="w-5 h-5" />,
    bgColor: "bg-blue-500",
    textColor: "text-white",
    level: "Expert",
    projects: "/user/projects",
  },
  {
    name: "JavaScript",
    icon: <Code className="w-5 h-5" />,
    bgColor: "bg-yellow-400",
    textColor: "text-black",
    level: "Expert",
    projects: "/user/projects",
  },
  {
    name: "Bootstrap",
    icon: <BadgeCheck className="w-5 h-5" />,
    bgColor: "bg-purple-600",
    textColor: "text-white",
    level: "expert",
    projects: "/user/projects",
  },
  {
    name: "JQuery",
    icon: <Wand2 className="w-5 h-5" />,
    bgColor: "bg-pink-500",
    textColor: "text-white",
    level: "Intermediate",
    projects: "/user/projects",
  },
  {
    name: "Node.JS",
    icon: <Server className="w-5 h-5" />,
    bgColor: "bg-green-600",
    textColor: "text-white",
    level: "Expert",
    projects: "/user/projects",
  },
  {
    name: "Express",
    icon: <Database className="w-5 h-5" />,
    bgColor: "bg-gray-700",
    textColor: "text-white",
    level: "Expert",
    projects: "/user/projects",
  },
  {
    name: "MongoDB",
    icon: <Leaf className="w-5 h-5" />,
    bgColor: "bg-emerald-600",
    textColor: "text-white",
    level: "Expert",
    projects: "/user/projects",
  },
  {
    name: "ReactJS",
    icon: <Atom className="w-5 h-5" />,
    bgColor: "bg-cyan-500",
    textColor: "text-white",
    level: "Advanced",
    projects: "/user/projects",
  },
  {
    name: "Tailwind CSS",
    icon: <Paintbrush2 className="w-5 h-5" />,
    bgColor: "bg-sky-400",
    textColor: "text-white",
    level: "Advanced",
    projects: "/user/projects",
  },
  {
    name: "Next.js",
    icon: <TerminalSquare className="w-5 h-5" />,
    bgColor: "bg-transparent border border-neutral-300",
    textColor: "text-black dark:text-white",
    level: "Starting",
    projects: "/user/projects",
  },
];

const SkillItem = ({ skill }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { toast } = useToast();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center my-24"
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <button
            className={`${skill.bgColor} ${skill.textColor} font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300 flex items-center gap-2`}
          >
            {skill.icon} {skill.name}
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="bg-white rounded-xl shadow-lg border p-4 w-64 dark:text-black">
          <h4 className="text-lg font-bold flex items-center gap-2">{skill.icon} {skill.name}</h4>
          <p className="text-sm mt-2">
            <strong>Level:</strong> {skill.level}
          </p>
          <p className="text-sm mt-1">
            <strong>Projects:</strong>{" "}
            <Link
              to={skill.projects}
              onClick={() => toast({
                title: 'Projects',
                description: "You'r in the Project's world"
              })}
              className="text-blue-600 underline">
              View Projects
            </Link>
          </p>
        </HoverCardContent>
      </HoverCard>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-white dark:bg-slate-950">
      {/* Vertical roadmap line */}
      <div className="absolute left-1/2 top-0 h-full w-1 border-dashed border-l-4 border-blue-400 transform -translate-x-1/2 z-0" />

      <div className="relative z-10 flex flex-col items-center py-20">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
