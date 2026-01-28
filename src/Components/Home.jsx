import { About } from "./About";
import { Skills } from "./Skills";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { TypewriterEffectSmooth } from "./ui/type-writer";
import ShinyText from "./ui/Shiny-text";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { FileSpreadsheet, X } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import {
  RiGithubFill,
  RiInstagramFill,
  RiInstagramLine,
  RiTwitchFill,
  RiTwitterFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Highlighter } from "./ui/text-highlighter";
import { GithubGraph } from "./GithubGraph";
import { WorkExperience } from "./WorkExperience";
import { useTheme } from "../context/ThemeContext";

const words = [
  {
    text: "Building The Future ",
    className:
      "text-blue-500 font-sans dark:text-blue-500 md:text-lg mt-12 text-lg text-center md:ml-0  ",
  },
];

export const Home = () => {
  const { isDark } = useTheme();

  return (
    <main className="mt-16 md:mt-16 pb-20 flex flex-col">
      <div className="mt-16 md:mt-24 pb-32 flex flex-col items-center">
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -7 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sans bg-clip-text text-transparent ${
              isDark
                ? "bg-gradient-to-b from-neutral-200 to-neutral-600"
                : "bg-gradient-to-b from-gray-900 to-gray-600"
            } mb-4`}
          >
            I'm Ishant
          </motion.h2>

          <div className="mt-4 grid grid-cols-1 gap-4 text-sm sm:text-base md:text-xl font-sans text-neutral-900">
            <div
              className={`${
                isDark ? "text-neutral-500" : "text-gray-600"
              } font-semibold flex flex-wrap items-center`}
            >
              <span className="ml-9 md:ml-0">
                {" "}
                Innovating solutions, designing experiences,{" "}
              </span>
              <span className="hidden sm:inline"> and&nbsp; </span>
              <span className="block md:inline-block mb-0 md:mb-3 ml-20 md:ml-0  text-center text-base sm:text-lg">
                <TypewriterEffectSmooth
                  words={words}
                  cursor
                  speed={70}
                  delay={1000}
                />
              </span>
            </div>
            <div className="flex justify-center items-center md:gap-8 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ rotateX: 20, rotateY: 10, y: -12 }}
                style={{
                  translateZ: 100,
                }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`${
                  isDark ? "bg-neutral-800/80" : "bg-blue-500"
                } h-10 w-32 flex justify-center items-center group relative shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)inset, 0px-1px_2px_0px_rgba(255,255,255,0.1)_inset] rounded-lg flex justify-center items-center`}
              >
                <motion.button
                  style={{ fontFamily: "Poppins", font: "extrabold" }}
                  className="hover:cursor-pointer bg-clip-text text-lg font-bold text-black"
                >
                  <a
                    href="Resume.pdf"
                    download
                    className={`flex justify-center items-center gap-1 ${
                      isDark ? "text-neutral-200" : "text-white"
                    } tracking-tight font-semibold`}
                  >
                    {" "}
                    Resume <FileSpreadsheet className="w-5 h-5" />{" "}
                  </a>
                  <span className="absolute insert-x-0 bottom-px bg-gradient-to-r from transparent via caret-indigo-500 to-transparent h-px  w-3/4 mx auto"></span>
                </motion.button>
              </motion.div>
              <Link
                to="https://cal.com/itsishant"
                className={`${
                  isDark ? "text-neutral-400" : "text-gray-700"
                } hover:tracking-tighter tracking-tight text-lg flex justify-center items-center`}
              >
                <Highlighter action="underline" color="#0000CD">
                  <span className="">Book a Meet</span>
                </Highlighter>
              </Link>
            </div>
          </div>
        </div>

        <GithubGraph />
      </div>

      <div className="relative md:py-12 md:mt-8 px-4 md:px-10">
        <div
          className={`${
            isDark ? "bg-neutral-800" : "bg-white border border-gray-200"
          } shadow-2xl w-58 mx-auto md:w-96 py-1 rounded-xl mb-8`}
        >
          <div
            className={`bg-clip-text text-transparent text-2xl tracking-wide md:text-4xl font-bold py-2 text-center ${
              !isDark ? "!text-black" : ""
            }`}
            style={{ fontFamily: "Poppins" }}
          >
            <ShinyText text="OS Contribution" disabled={false} speed={2} />
          </div>
        </div>

        {/* Circular Image - Mobile: Colored only, Desktop: B&W with hover to colored */}
        <a
          href="https://github.com/dodopayments/billingsdk/pull/336"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-start items-center my-8 cursor-pointer"
        >
          {/* Mobile Version - Colored Image Only */}
          <div className="md:hidden">
            <img
              src="/dodo_payments.png"
              alt="Dodo Payments"
              className="size-14 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>

          {/* Desktop Version - B&W with Hover to Colored */}
          <motion.div
            className="hidden md:block relative size-18 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            whileHover="hover"
            initial="initial"
          >
            {/* Black & White Image - Initially Visible */}
            <motion.img
              src="/dodo_payments_white_black.png"
              alt="Dodo Payments"
              className="absolute w-full h-full object-cover rounded-full"
              variants={{
                initial: { opacity: 1 },
                hover: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Colored Image - Hidden until Hover */}
            <motion.img
              src="/dodo_payments.png"
              alt="Dodo Payments"
              className="absolute w-full h-full object-cover rounded-full"
              variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Text Below */}
          <p
            className={`mt-4 text-sm font-semibold ${isDark ? "text-neutral-400" : "text-neutral-700"}`}
          >
            Dodo Payments
          </p>
        </a>
      </div>

      <div
        className={`border-t-2 border-dotted ${isDark ? "border-neutral-700" : "border-gray-300"} my-8 mx-8 md:hidden`}
      ></div>

      <WorkExperience />

      <div
        className={`border-t-2 border-dotted ${isDark ? "border-neutral-700" : "border-gray-300"} my-8 mx-8 md:hidden`}
      ></div>

      <Projects />

      <div
        className={`border-t-2 border-dotted ${isDark ? "border-neutral-700" : "border-gray-300"} my-8 mx-8 md:hidden`}
      ></div>

      <Skills />

      <div
        className={`border-t-2 border-dotted ${isDark ? "border-neutral-700" : "border-gray-300"} my-8 mx-8 md:hidden`}
      ></div>

      <About />

      <div
        className={`border-t-2 border-dotted ${isDark ? "border-neutral-700" : "border-gray-300"} my-8 mx-8 md:hidden`}
      ></div>

      <Contact />

      <div
        className={`w-full text-center ${
          isDark ? "border-neutral-700" : "border-gray-300"
        } border-t py-2 mt-10 ${isDark ? "text-white" : "text-gray-900"}`}
      >
        Made with ♥️ by Ishant
      </div>
    </main>
  );
};
