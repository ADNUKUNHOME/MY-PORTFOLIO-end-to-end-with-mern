import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import blackAvatar from "../../assets/blackAvatar.png";
import bigAvatar from "../../assets/bigAvatar.png";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, BadgeCheck, Code2, Gamepad2, GraduationCap, Heart, HomeIcon, Mail, Rocket, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AboutDetailsDialog from "@/components/userView/AboutDetails";
import { useInView } from 'react-intersection-observer';
import HomeProjects from "@/components/userView/HomeProjects";
import HomeSkills from "@/components/userView/HomeSkills";
import Footer from "@/components/userView/Footer";

const Home = () => {
  const [changeImage, setChangeImage] = useState(true);
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(inView);
  }, [inView]);

  function handleAboutCardDialog(selectedItem) {
    setOpenDialog(true);
    setSelectedCard(selectedItem);
  }

  const aboutMeCardContent = [
    { name: "Who I Am", icon: <User className="w-12 h-12 text-blue-500" />, description: "Passionate full-stack developer." },
    { name: "Tech Stack", icon: <Code2 className="w-12 h-12 text-green-500" />, description: "Skilled in MongoDB, Express, React, and Node.js." },
    { name: "My Journey", icon: <HomeIcon className="w-12 h-12 text-orange-500" />, description: "Self-taught developer with a love for learning." },
    { name: "Education", icon: <GraduationCap className="w-12 h-12 text-purple-500" />, description: "Learning never stops." },
    { name: "Hobbies", icon: <Gamepad2 className="w-12 h-12 text-red-500" />, description: "Gaming and coding enthusiast." },
    { name: "Current Focus", icon: <Rocket className="w-12 h-12 text-yellow-500" />, description: "Exploring AI-integrated web development." },
    { name: "Let's Connect", icon: <Mail className="w-12 h-12 text-teal-500" />, description: "Open to collaboration, job opportunities, and networking." },
    { name: "Journey", icon: <Activity className="w-12 h-12 text-pink-500" />, description: "From curious beginner to confident developer." },
    { name: "Philosophy", icon: <Heart className="w-12 h-12 text-indigo-500" />, description: "I believe in building with passion and purpose." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      <div className="w-full bg-yellow-400 dark:bg-yellow-600 text-black dark:text-white text-center px-4 py-2 font-medium">
       🚨 I have created a <span className="font-bold">new portfolio</span>.  
        Please visit 👉{" "}
        <a
           href="https://muhammadadnank.vercel.app"
           target="_blank"
           rel="noopener noreferrer"
           className="underline text-blue-800 dark:text-blue-300 font-semibold"
        >
         New Portfolio
       </a>{" "}
         for the latest updates!
      </div>
      <div className="flex relative min-h-[300px] w-full items-center justify-between px-4 md:px-9 gap-5 mb-10">
        <div className="flex flex-col justify-start">
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
              FULL STACK <span>DEVELOPER</span>
            </p>
            <p className="text-sm font-semibold md:font-semibold mt-4 text-gray-400 line-clamp-3">
              Specializing in building dynamic web applications with the{" "}
              <span className="font-extrabold text-gray-500 md:bg-sky-500 md:text-white md:font-bold rounded-full md:px-3 md:py-1 md:dark:bg-red-700 md:dark:text-white inline-block">
                MERN Stack
              </span>.
            </p>
            <div className="flex gap-5 pt-4 items-center flex-wrap">
              <Button
                onClick={() => navigate("/user/contact")}
                className="px-3 md:px-5 py-3 font-bold text-white dark:text-white bg-sky-500 dark:bg-red-700 rounded-2xl hover:bg-white dark:hover:bg-gray-600 hover:text-sky-500 dark:hover:text-red-700 shadow-xl border-none"
              >
                Hire Me
              </Button>
              <a
                className="text-sm lg:text-lg font-bold text-sky-500 dark:text-red-700 shadow-xl rounded-xl"
                href="https://www.linkedin.com/in/muhammad-adnan-a479052a1"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                className="text-sm lg:text-lg font-bold text-sky-500 dark:text-red-700 shadow-xl rounded-xl"
                href="https://github.com/ADNUKUNHOME"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

            {/* 👇 Mobile Avatar Section */}
            <div className="flex md:hidden items-center justify-center mt-8">
              <div className="overflow-hidden rounded-full bg-sky-500 dark:bg-red-700 shadow-2xl cursor-pointer">
                <div
                  className="relative rounded-full w-[200px] h-[200px]"
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
            </div>
          </div>
        </div>

        {/* 👇 Desktop Avatar Section */}
        <div className="hidden md:flex items-center justify-between pt-5 gap-10">
          <div className="hidden md:flex flex-col items-center justify-between gap-20">
            <div className="flex">
              <p className="absolute top-[40px] left-1/2 transform -translate-x-1/2 text-[10px] inline-block py-1 px-2 font-bold bg-sky-500 dark:bg-red-700 text-white dark:text-white rounded-full shadow-xl rotate-[-10deg]">WEB DEVELOPER</p>
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
              <BadgeCheck className="absolute bottom-[10px] right-[100px] text-sm w-6 h-6 md:w-8 md:h-8 text-white dark:text-white bg-sky-500 dark:bg-red-700 rounded-full shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="flex flex-col bg-sky-500 dark:bg-red-700 min-h-[300px] px-14 md:px-28">
        <div className="flex flex-col w-full items-center justify-center py-8 text-white dark:text-white">
          <h1 className='font-extrabold text-3xl md:text-5xl'>About Me</h1>
          <Separator className='my-5' />
        </div>

        <Carousel opts={{ align: "start" }}>
          <CarouselContent className='mb-8' ref={ref}>
            {aboutMeCardContent.map((cardItem, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={hasAnimated ? { x: 0, opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                >
                  <Card
                    className="p-6 border rounded-xl h-[250px] bg-white dark:bg-gray-900 text-center shadow-lg hover:shadow-2xl dark:hover:border-blue-500 hover:border-red-700"
                    onClick={() => handleAboutCardDialog(cardItem.name)}
                  >
                    <CardHeader className="flex flex-col items-center gap-3">
                      <div className="text-4xl">{cardItem.icon}</div>
                      <CardTitle className="text-lg font-semibold hover:text-blue-600 dark:hover:text-red-700">
                        {cardItem.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-700 dark:text-gray-300 text-sm hover:text-gray-900 dark:hover:text-gray-100">
                      {cardItem.description}
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <AboutDetailsDialog open={openDialog} setOpen={setOpenDialog} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
        <div onClick={() => navigate('/user/about')} className="flex py-2 px-4 bg-white dark:white rounded-full text-sky-500 dark:text-red-700 hover:bg-sky-500 hover:text-white dark:hover:bg-red-800 dark:hover:text-white hover:shadow-xl border hover:border-white mb-8 items-center justify-center font-bold text-base md:text-xl">See More</div>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col min-h-[300px] bg-white dark:bg-slate-950 py-10">
        <HomeProjects />
      </section>

      {/* Skills Section */}
      <section className="flex flex-col min-h-[300px] bg-sky-500 dark:bg-red-700 py-10">
        <HomeSkills />
      </section>

      {/* Footer Section */}
      <section className="flex flex-col bg-sky-500 dark:bg-red-700">
        <Footer />
      </section>
    </div>
  );
};

export default Home;

