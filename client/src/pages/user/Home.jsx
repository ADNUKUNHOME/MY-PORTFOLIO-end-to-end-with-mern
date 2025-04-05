import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import blackAvatar from "../../assets/blackAvatar.png";
import bigAvatar from "../../assets/bigAvatar.png";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck, Gamepad2 } from "lucide-react";
import { useState } from "react";
import About from "./About";

const Home = () => {
  const [changeImage, setChangeImage] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">

      <div className="flex relative min-h-[300px] w-full items-center justify-between px-4 md:px-9 gap-5 mb-10">
        <div className="flex">
          <div className="hidden md:flex flex-col">
            <div className="flex items-center justify-end min-w-[30px] transform rotate-12">
              <Gamepad2 className="w-8 h-8 text-white dark:text-white bg-sky-500 dark:bg-red-700 rounded-full shadow-xl font-bold text-lg" />
            </div>
          </div>

          <div className="gap-1 md:gap-3 flex flex-col justify-center">
            <p className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-sky-500 dark:text-white mt-5">HI,</p>
            <p className="text-4xl md:text-7xl font-extrabold dark:text-white">
              I'AM{" "}
              <span className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-sky-500 dark:text-red-700">
                <span className="hover:text-black dark:hover:text-white">A</span>
                <span className="hover:text-black dark:hover:text-white">D</span>
                <span className="hover:text-black dark:hover:text-white">N</span>
                <span className="hover:text-black dark:hover:text-white">A</span>
                <span className="hover:text-black dark:hover:text-white">N</span>
              </span>
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 dark:text-white">
              FULLSTACK{" "} <span>DEVELOPER</span>
            </p>
            <p className="text-sm font-semibold md:font-semibold mt-4 text-gray-400 line-clamp-3">
              Specializing in building dynamic web applications with the{" "}
              <span className="font-extrabold text-gray-500 md:bg-sky-500 md:text-white md:font-bold rounded-full md:px-3 md:py-1 md:dark:bg-red-700 md:dark:text-white inline-block">
                MERN Stack
              </span>
              .
            </p>
            <div className="flex gap-5 pt-4 items-center">
              <Button
                onClick={() => navigate("/user/contact")}
                className="px-3 md:px-5 py-3 font-bold text-white dark:text-white bg-sky-500 dark:bg-red-700 rounded-2xl hover:bg-white dark:hover:bg-gray-600 hover:text-sky-500 dark:hover:text-red-700 shadow-xl border-none"
              >
                Hire Me
              </Button>
              <Link className="text-sm lg:text-lg font-bold text-sky-500 dark:text-red-700 shadow-xl rounded-xl">LinkedIn</Link>
              <Link className="text-sm lg:text-lg font-bold text-sky-500 dark:text-red-700 inline-block shadow-xl rounded-xl">GitHub</Link>
            </div>
          </div>
        </div>
        {/* IMAGE SECTION */}
        <div className="flex items-center justify-between pt-5 gap-10">

          <div className="hidden md:flex flex-col items-center justify-between gap-20">
            <div className="flex">
              <p className="absolute top-[40px] left-1/2 transform -traslate-x-1/2 text-[10px] inline-block py-1 px-2 font-bold bg-sky-500 dark:bg-red-700 text-white dark:text-white rounded-full shadow-xl rotate-[-10deg]" >WEB DEVELOPER</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-full bg-sky-500 dark:bg-red-700 shadow-2xl cursor-pointer">
            <div
              className="relative rounded-full w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]"
              onClick={() => setChangeImage((prev) => !prev)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={changeImage ? "blackAvatar" : "bigAvatar"}
                  src={changeImage ? blackAvatar : bigAvatar}
                  className="object-cover w-full h-full absolute"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.1, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="flex">
              <BadgeCheck className="absolute bottom-[10px] right-[100px] transform transilate-x-1/2  text-sm w-6 h-6 md:text-lg md:w-8 md:h-8 text-white dark:text-white bg-sky-500 dark:bg-red-700 rounded-full shadow-xl" />
            </div>
          </div>

        </div>
      </div>

      {/* {About Session} */}
      <section className="flex flex-col bg-sky-500 dark:bg-red-700 min-h-[300px]">
        <About/>
      </section>
    </div>
  );
};

export default Home;
