import { animate, hover } from "motion";
import ShinyText from "./ui/Shiny-text";
import { Button } from "@material-tailwind/react";
import { useTheme } from "../context/ThemeContext";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaRust,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiZod,
  SiPostman,
  SiJavascript,
  SiC,
  SiExpress,
  SiSocketdotio,
  SiVercel,
  SiRender,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export const Skills = () => {
  const { isDark } = useTheme();

  return (
    <div className="relative md:py-12 md:mt-8 px-4 md:px-10">
      <div
        className={`${
          isDark ? "bg-neutral-800" : "bg-white border border-gray-200"
        } shadow-2xl w-28 md:w-36 mx-auto rounded-xl mb-4 md:mb-8`}
      >
        <div
          className={`bg-clip-text text-transparent text-2xl md:text-4xl font-bold py-1 md:py-2 text-center ${
            !isDark ? "!text-black" : ""
          }`}
          style={{ fontFamily: "Poppins" }}
        >
          <ShinyText text="Skills" disabled={false} speed={2} />
        </div>
      </div>

      <h2
        className={`${
          isDark ? "text-gray-600" : "text-gray-700"
        } text-base md:text-xl text-center tracking-tight mb-2 md:mb-3`}
      >
        Languages
      </h2>
      <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 md:max-w-lg mx-1 md:mx-auto mb-4 md:mb-8">
        <TechButton name="JavaScript" colorClass="yellow-400" isDark={isDark} />
        <TechButton name="Java" colorClass="red-400" isDark={isDark} />
        <TechButton name="TypeScript" colorClass="indigo-400" isDark={isDark} />
      </div>

      <h2
        className={`${
          isDark ? "text-gray-600" : "text-gray-700"
        } text-base md:text-xl tracking-tight text-center mb-2 md:mb-3`}
      >
        Tools & Technologies
      </h2>
      <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 max-w-md md:max-w-lg mx-1 md:mx-auto">
        <TechButton name="React.js" colorClass="gray-400" isDark={isDark} />
        <TechButton name="Tailwind CSS" colorClass="gray-400" isDark={isDark} />
        <TechButton name="Express.js" colorClass="gray-400" isDark={isDark} />
        <TechButton name="MongoDB" colorClass="green-400" isDark={isDark} />
        <TechButton name="MySQL" colorClass="sky-400" isDark={isDark} />
        <TechButton name="Prisma ORM" colorClass="purple-400" isDark={isDark} />
        <TechButton name="PostgreSQL" colorClass="sky-400" isDark={isDark} />
        <TechButton name="Zod" colorClass="pink-400" isDark={isDark} />
        <TechButton name="Git" colorClass="orange-400" isDark={isDark} />
        <TechButton name="Postman" colorClass="amber-400" isDark={isDark} />
        <TechButton name="Docker" colorClass="sky-400" isDark={isDark} />
        <TechButton name="Next.js" colorClass="sky-400" isDark={isDark} />
        <TechButton name="WebSocket" colorClass="sky-400" isDark={isDark} />
        <TechButton name="aws" colorClass="sky-400" isDark={isDark} />
        <TechButton name="Vercel" colorClass="sky-400" isDark={isDark} />
        <TechButton name="Render" colorClass="sky-400" isDark={isDark} />
      </div>
    </div>
  );
};

const TechButton = ({ name, isDark }) => {
  const colorMap = isDark
    ? {
        JavaScript: "text-neutral-200 border-lined hover:bg-gray-950",
        Python: "text-neutral-200 border-lined hover:bg-gray-950",
        Java: "text-neutral-200 border-lined hover:bg-gray-950",
        TypeScript: "text-neutral-200 border-lined hover:bg-gray-950",
        "React.js": "text-neutral-200 border-lined hover:bg-gray-950",
        "Tailwind CSS": "text-neutral-200 border-lined hover:bg-gray-950",
        "Express.js": "text-neutral-200 border-lined hover:bg-gray-950",
        MongoDB: "text-neutral-200 border-lined hover:bg-gray-950",
        "Prisma ORM": "text-neutral-200 border-lined hover:bg-gray-950",
        Zod: "text-neutral-200 border-lined hover:bg-gray-950",
        Git: "text-neutral-200 border-lined hover:bg-gray-950",
        Postman: "text-neutral-200 border-lined hover:bg-gray-950",
        Docker: "text-neutral-200 border-lined hover:bg-gray-950",
        "Next.js": "text-neutral-200 border-lined hover:bg-gray-950",
        aws: "text-neutral-200 border-lined hover:bg-gray-950",
        WebSocket: "text-neutral-200 border-lined hover:bg-gray-950",
        Vercel: "text-neutral-200 border-lined hover:bg-gray-950",
        Render: "text-neutral-200 border-lined hover:bg-gray-950",
        MySQL: "text-neutral-200 border-lined hover:bg-gray-950",
        PostgreSQL: "text-neutral-200 border-lined hover:bg-gray-950",
      }
    : {
        JavaScript: "text-gray-800 border-lined hover:bg-gray-200",
        Python: "text-gray-800 border-lined hover:bg-gray-200",
        Java: "text-gray-800 border-lined hover:bg-gray-200",
        TypeScript: "text-gray-800 border-lined hover:bg-gray-200",
        "React.js": "text-gray-800 border-lined hover:bg-gray-200",
        "Tailwind CSS": "text-gray-800 border-lined hover:bg-gray-200",
        "Express.js": "text-gray-800 border-lined hover:bg-gray-200",
        MongoDB: "text-gray-800 border-lined hover:bg-gray-200",
        "Prisma ORM": "text-gray-800 border-lined hover:bg-gray-200",
        PostgreSQL: "text-gray-800 border-lined hover:bg-gray-200",
        Zod: "text-gray-800 border-lined hover:bg-gray-200",
        Git: "text-gray-800 border-lined hover:bg-gray-200",
        Postman: "text-gray-800 border-lined hover:bg-gray-200",
        Docker: "text-gray-800 border-lined hover:bg-gray-200",
        "Next.js": "text-gray-800 border-lined hover:bg-gray-200",
        aws: "text-gray-800 border-lined hover:bg-gray-200",
        WebSocket: "text-gray-800 border-lined hover:bg-gray-200",
        Vercel: "text-gray-800 border-lined hover:bg-gray-200",
        Render: "text-gray-800 border-lined hover:bg-gray-200",
        MySQL: "text-gray-800 border-lined hover:bg-gray-200",
      };

  const iconMap = {
    JavaScript: <SiJavascript className="text-yellow-400" />,
    Java: <FaJava className="text-red-500" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    "React.js": <FaReact className="text-cyan-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
    "Express.js": <SiExpress className="text-gray-500" />,
    MongoDB: <SiMongodb className="text-green-600" />,
    MySQL: <SiMysql className="" />,
    "Prisma ORM": <SiPrisma className="text-purple-400" />,
    PostgreSQL: <SiPostgresql className="text-gray-200 items" />,
    Zod: <SiZod className="text-pink-400" />,
    Git: <FaGitAlt className="text-orange-500" />,
    Postman: <SiPostman className="text-amber-500" />,
    Docker: <FaDocker className="text-sky-500" />,
    "Next.js": <RiNextjsFill className="text-gray-200" />,
    aws: <FaAws className="text-gray-200 items" />,
    WebSocket: <SiSocketdotio className="text-gray-200 items" />,
    Vercel: <SiVercel className="text-gray-200 items" />,
    Render: <SiRender className="text-gray-200 items" />,
  };

  return (
    <span
      className={`flex items-center gap-1 md:gap-2 border-dotted border-2 ${
        isDark ? "hover:text-neutral-300" : "hover:text-gray-900"
      } transition px-1.5 md:px-2 py-1 md:py-1.5 rounded-lg text-xs md:text-base font-semibold justify-center ${
        colorMap[name]
      }`}
    >
      {iconMap[name] && (
        <span className="text-sm md:text-lg">{iconMap[name]}</span>
      )}
      {name}
    </span>
  );
};
