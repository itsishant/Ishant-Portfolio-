import ShinyText from "./ui/Shiny-text";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export const About = () => {
  const { isDark } = useTheme();
  return (
    <div>
      <div
        className={`${
          isDark ? "bg-neutral-800" : "bg-white border border-gray-200"
        } shadow-2xl w-42 mx-auto rounded-xl mb-8 mt-12`}
      >
        <div
          className={`bg-clip-text text-transparent text-3xl md:text-4xl font-bold py-2 text-center ${
            !isDark ? "!text-black" : ""
          }`}
          style={{ fontFamily: "Poppins" }}
        >
          <ShinyText text="About" disabled={false} speed={2} />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        style={{ fontFamily: "Poppins" }}
        className={`${
          isDark ? "text-neutral-400" : "text-black"
        } md:ml-0 ml-1 p-1 tracking-tight md:text-center`}
      >
        I like solving problems by writing clean and simple code that works
        well. When I'm not coding, I enjoy playing badminton or listening to
        music
        <div className="flex justify-center items-center">
          <span
            className={`${
              isDark ? "bg-neutral-700 text-white" : "bg-blue-100 text-blue-800"
            } p-0.2`}
          >
            open to work
          </span>
        </div>
      </motion.div>
    </div>
  );
};
