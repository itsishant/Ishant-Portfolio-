import { animate, hover } from "motion";
import ShinyText from "./ui/Shiny-text";
import { Button } from "@material-tailwind/react";
 

export const Skills = () => {
  return (
    <div className="relative md:py-16 md:mt-12 px-4 md:px-10">
      
      <div className="bg-neutral-800 shadow-2xl w-44 mx-auto rounded-xl mb-12">
        <div className="bg-clip-text text-transparent text-4xl md:text-5xl font-bold py-2 text-center" style={{ fontFamily: "Poppins" }}>
          <ShinyText text="Skills" disabled={false} speed={2} />
        </div>
      </div>

      <h2 className="text-neutral-500 text-2xl font-semibold text-center mb-4">Languages</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-1 md:max-w-xl md:space-x-2 mx-1 md:mx-auto mb-12">
        <TechButton name="JavaScript" colorClass="yellow-400" />
        <TechButton name="Java" colorClass="red-400" />
        
        <TechButton name="TypeScript" colorClass="indigo-400" />
        <TechButton name="C" colorClass="violet-400" />
      </div>

      <h2 className="text-neutral-500 text-2xl font-semibold text-center mb-4">Tools & Technologies</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2  md:grid-cols-3 md:gap-4 max-w-md md:max-w-xl mx-1 md:mx-auto">
        <TechButton name="React.js" colorClass="blue-400" />
        <TechButton name="Tailwind CSS" colorClass="teal-400" />
        <TechButton name="Express.js" colorClass="gray-400" />
        <TechButton name="MongoDB" colorClass="green-400" />
        <TechButton name="Prisma ORM" colorClass="purple-400" />
        <TechButton name="Zod" colorClass="pink-400" />
        <TechButton name="Git" colorClass="orange-400" />
        <TechButton name="Postman" colorClass="amber-400" />
        <TechButton className="mr-44" name="Docker" colorClass="sky-400" />
      </div>
      
    </div>
  );
};
const TechButton = ({ name }) => {
  const colorMap = {
    "JavaScript": "text-yellow-400 border-yellow-400 hover:bg-yellow-400",
    "Python": "text-cyan-400 border-cyan-400 hover:bg-cyan-400",
    "Java": "text-red-400 border-red-400 hover:bg-red-400",
    "C": "text-white-400 border-neutral-500 hover:bg-indigo-400",
    "TypeScript": "text-indigo-400 border-indigo-400 hover:bg-violet-400",
    "React.js": "text-blue-400 border-blue-400 hover:bg-blue-400",
    "Tailwind CSS": "text-teal-400 border-teal-400 hover:bg-teal-400",
    "Express.js": "text-gray-400 border-gray-400 hover:bg-gray-400",
    "MongoDB": "text-green-400 border-green-400 hover:bg-green-400",
    "Prisma ORM": "text-purple-400 border-purple-400 hover:bg-purple-400",
    "Zod": "text-pink-400 border-pink-400 hover:bg-pink-400",
    "Git": "text-orange-400 border-orange-400 hover:bg-orange-400",
    "Postman": "text-amber-400 border-amber-400 hover:bg-amber-400",
    "Docker": "text-sky-400 border-sky-400 hover:bg-sky-400", 
  };

  return (
    <span className={`border  hover:text-black transition ml-8 mr-4 py-1 rounded-lg font-semibold text-center ${colorMap[name]}`}>
      {name}
    </span>
    

  );
};
