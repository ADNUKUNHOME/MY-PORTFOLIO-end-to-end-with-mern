import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AboutDetailsDialog from "@/components/userView/AboutDetails";
import { Activity, Code2, Gamepad2, GraduationCap, Heart, Home, Mail, Rocket, User } from "lucide-react";
import { useState } from "react";

const aboutMeCardContent = [
  { name: "Who I Am", icon: <User className="w-12 h-12 text-blue-500" />, description: "Passionate full-stack developer with a focus on building scalable and performant web applications." },
  { name: "Tech Stack", icon: <Code2 className="w-12 h-12 text-green-500" />, description: "Skilled in MongoDB, Express.js, React, and Node.js, along with modern tools like Next.js and Git." },
  { name: "My Journey", icon: <Home className="w-12 h-12 text-orange-500" />, description: "Self-taught developer — I transformed my bedroom into a classroom and the internet into my teacher." },
  { name: "Education", icon: <GraduationCap className="w-12 h-12 text-purple-500" />, description: "Learning never stops — I built my knowledge through online resources, tutorials, and hands-on practice." },
  { name: "Hobbies", icon: <Gamepad2 className="w-12 h-12 text-red-500" />, description: "Currently, I am completly exploring tech trends, and contributing to open-source projects." },
  { name: "Current Focus", icon: <Rocket className="w-12 h-12 text-yellow-500" />, description: "Exploring AI integration in web apps, improving UI/UX, and enhancing performance optimization skills." },
  { name: "Let's Connect", icon: <Mail className="w-12 h-12 text-teal-500" />, description: "Open to collaboration, job recommendations, freelance gigs, or just a tech chat. Reach out anytime!" },
  { name: "Journey", icon: <Activity className="w-12 h-12 text-pink-500" />, description: "From curious beginner to confident developer — my journey has been fueled by learning, failing, and growing." },
  { name: "Philosophy", icon: <Heart className="w-12 h-12 text-indigo-500" />, description: "I believe in building with empathy, writing clean code, and designing with the user in mind." },
];

const About = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleAboutCardDialog(selectedItem) {
    setOpenDialog(true);
    setSelectedCard(selectedItem);
  }


  return (
    <div className="flex flex-col items-center px-4 py-10 md:px-10">
      <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-8">
        WHO I AM?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {aboutMeCardContent.map((cardItem) => (
          <Card className="p-6 border rounded-xl bg-white dark:bg-gray-900 text-center 
              shadow-lg transition-all duration-300 hover:shadow-2xl 
              hover:border-blue-500 dark:hover:border-red-700"
              onClick={() => handleAboutCardDialog(cardItem.name)}>
            <CardHeader className="flex flex-col items-center gap-3">
              <div className="text-4xl">
                {cardItem.icon}
              </div>
              <CardTitle className="text-lg font-semibold hover:text-blue-600 dark:hover:text-red-700">
                {cardItem.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm hover:text-gray-900 dark:hover:text-gray-100">
              {cardItem.description}
            </CardContent>
          </Card>
        ))}
          <AboutDetailsDialog open={openDialog} setOpen={setOpenDialog} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      </div>

    </div>
  );
};

export default About;