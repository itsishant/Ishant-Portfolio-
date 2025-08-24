import { animate, hover } from "motion";
import ShinyText from "./ui/Shiny-text";
import { Button } from "@material-tailwind/react";
import { FaReact, FaJava, FaNodeJs, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiTailwindcss, SiPrisma, SiZod, SiPostman, SiJavascript, SiC, SiExpress, SiSocketdotio, SiVercel, SiRender, SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

 

export const Skills = () => {
  return (
    <div className="relative md:py-16 md:mt-12 px-4 md:px-10">
      
      <div className="bg-neutral-800 shadow-2xl w-44 mx-auto rounded-xl mb-12">
        <div className="bg-clip-text text-transparent text-4xl md:text-5xl font-bold py-2 text-center" style={{ fontFamily: "Poppins" }}>
          <ShinyText text="Skills" disabled={false} speed={2} />
        </div>
      </div>

      <h2 className="text-neutral-500 text-2xl font-semibold text-center mb-4">Languages</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-1 md:max-w-xl md:space-x-2 mx-1 md:mx-auto mb-12">
        <TechButton  name="JavaScript" colorClass="yellow-400" />
        <TechButton name="Java" colorClass="red-400" />
        
        <TechButton name="TypeScript" colorClass="indigo-400" />
      </div>

      <h2 className="text-neutral-500 text-2xl font-semibold text-center mb-4">Tools & Technologies</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2  md:grid-cols-3 md:gap-4 max-w-md md:max-w-xl mx-1 md:mx-auto">
        <TechButton name="React.js"  colorClass="gray-400" />
        <TechButton name="Tailwind CSS" colorClass="gray-400"  />
        <TechButton name="Express.js" colorClass="gray-400" />
        <TechButton name="MongoDB" colorClass="green-400" />
        <TechButton  name="MySQL" colorClass="sky-400" />
        <TechButton name="Prisma ORM" colorClass="purple-400" />
        <TechButton name="Zod" colorClass="pink-400" />
        <TechButton name="Git" colorClass="orange-400" />
        <TechButton name="Postman" colorClass="amber-400" />
        <TechButton className="mr-44" name="Docker" colorClass="sky-400" />
        <TechButton className="mr-44" name="Next.js" colorClass="sky-400" />
        <TechButton  name="WebSocket" colorClass="sky-400" />
        <TechButton  name="aws" colorClass="sky-400" />
        <TechButton  name="Vercel" colorClass="sky-400" />
        <TechButton  name="Render" colorClass="sky-400" />
      </div>
      
    </div>
  );
};
const TechButton = ({ name }) => {
  const colorMap = {
    "JavaScript": "text-neutral-200 border-lined hover:bg-gray-950",
    "Python": "text-neutral-200 border-lined hover:bg-gray-950",
    "Java": "text-neutral-200 border-lined hover:bg-gray-950",
    "TypeScript": "text-neutral-200 border-lined hover:bg-gray-950",
    "React.js": "text-neutral-200 border-lined hover:bg-gray-950",
    "Tailwind CSS": "text-neutral-200 border-lined hover:bg-gray-950",
    "Express.js": "text-neutral-200 border-lined hover:bg-gray-950",
    "MongoDB": "text-neutral-200 border-lined hover:bg-gray-950",
    "Prisma ORM": "text-neutral-200 border-lined hover:bg-gray-950",
    "Zod": "text-neutral-200 border-lined hover:bg-gray-950",
    "Git": "text-neutral-200 border-lined hover:bg-gray-950",
    "Postman": "text-neutral-200 border-lined hover:bg-gray-950",
    "Docker": "text-neutral-200 border-lined hover:bg-gray-950", 
    "Next.js": "text-neutral-200 border-lined hover:bg-gray-950", 
    "aws": "text-neutral-200 border-lined hover:bg-gray-950", 
    "WebSocket": "text-neutral-200 border-lined hover:bg-gray-950",  
    "Vercel": "text-neutral-200 border-lined hover:bg-gray-950",  
    "Render": "text-neutral-200 border-lined hover:bg-gray-950",  
    "MySQL": "text-neutral-200 border-lined hover:bg-gray-950",  


  };

const iconMap = {
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "Java": <FaJava className="text-red-500" />,
  "TypeScript": <SiTypescript className="text-blue-500" />,
  "React.js": <FaReact className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  "Express.js": <SiExpress className="text-gray-500" />,
  "MongoDB": <SiMongodb className="text-green-600" />,
  "MySQL": <SiMysql className="" />,
  "Prisma ORM": <SiPrisma className="text-purple-400" />,
  "Zod": <SiZod className="text-pink-400" />,
  "Git": <FaGitAlt className="text-orange-500" />,
  "Postman": <SiPostman className="text-amber-500" />,
  "Docker": <FaDocker className="text-sky-500" />,
  "Next.js": <RiNextjsFill className="text-gray-200" />,
  "aws": <FaAws className="text-gray-200 items" />,
  "WebSocket": <SiSocketdotio className="text-gray-200 items" />,
  "Vercel": <SiVercel className="text-gray-200 items" />,
  "Render": <SiRender className="text-gray-200 items" />

};


  return (
   <span className="flex items-center gap-3 border-dotted border-2 hover:text-neutral-300 transition px-2 py-1 rounded-lg font-semibold justify-center">
  {iconMap[name] && <span className="text-xl">{iconMap[name]}</span>}
  {name}
</span>


  );
};
