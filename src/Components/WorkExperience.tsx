import { FaSuitcase } from "react-icons/fa";
import ShinyText from "./ui/Shiny-text";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export const WorkExperience = () => {
  const { isDark } = useTheme();
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Goolluck Consulting LLP",
      duration: "September 2025 - Present",
      description:
        "designed efficient database schemas, and integrated backend services to ensure seamless data flow and scalability.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Next.js"],
    },
  ];

  return (
    <div className="relative py-6 md:py-12 px-3 mb-8 md:px-10">
      <div
        className={`${
          isDark ? "bg-neutral-800" : "bg-white border border-gray-200"
        } shadow-2xl w-52 md:w-80 mx-auto rounded-xl mb-6 md:mb-8`}
      >
        <div
          className={`bg-clip-text text-transparent text-xl md:text-3xl font-bold py-1.5 md:py-2 text-center ${
            !isDark ? "!text-black" : ""
          }`}
          style={{ fontFamily: "Poppins" }}
        >
          <ShinyText text="Work Experience" disabled={false} speed={2} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className={`${
              isDark
                ? "bg-neutral-900/40 border-neutral-800"
                : "bg-white/80 border-gray-200"
            } backdrop-blur-md border rounded-xl p-3 md:p-6 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all duration-500`}
          >
            <div className="flex flex-row justify-between items-start mb-2 md:mb-3">
              <div>
                <p
                  className={`${
                    isDark ? "text-neutral-100" : "text-gray-900"
                  } text-sm md:text-2xl font-medium mb-1 md:mb-2 tracking-tight`}
                >
                  {exp.company}
                </p>
                <h3
                  className={`${
                    isDark ? "text-neutral-400" : "text-gray-600"
                  } flex gap-1 md:gap-2 items-center text-xs md:text-base tracking-tight`}
                  style={{ fontFamily: "Poppins" }}
                >
                  <FaSuitcase
                    className={`${
                      isDark ? "text-gray-500" : "text-gray-400"
                    } text-[10px] md:text-base`}
                  />
                  {exp.role}
                </h3>
              </div>
              <span
                className={`${
                  isDark ? "text-neutral-400" : "text-gray-600"
                } text-[9px] md:text-sm px-1.5 md:px-3 py-[2px] md:py-1 rounded-full whitespace-nowrap ml-2`}
              >
                {exp.duration}
              </span>
            </div>

            <p
              className={`${
                isDark ? "text-neutral-500" : "text-gray-600"
              } text-[11px] md:text-base mb-2 md:mb-4 leading-relaxed`}
              style={{ fontFamily: "Poppins" }}
            >
              <span
                className={`${isDark ? "text-neutral-300" : "text-gray-900"}`}
              >
                Developed and maintained RESTful APIs,
              </span>{" "}
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-1 md:gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`text-[9px] md:text-sm px-1.5 md:px-3 py-[2px] md:py-1 ${
                    isDark
                      ? "bg-neutral-800/50 text-neutral-300 border-neutral-700"
                      : "bg-blue-100 text-blue-800 border-blue-200"
                  } rounded-lg border`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
