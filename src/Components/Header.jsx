import { useNavigate, Link } from "react-router-dom";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiInstagramLine,
} from "react-icons/ri";
import { Home, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export const Header = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md ${
        isDark
          ? "bg-neutral-900/70 border-neutral-800"
          : "bg-white/70 border-gray-300"
      } border rounded-lg px-6 md:py-4 py-3 flex items-center gap-3 hover:gap-6 shadow-lg transition-all duration-300`}
    >
      <div className="flex justify-center items-center md:gap-4 gap-3">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`${
            isDark
              ? "text-neutral-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } transition`}
        >
          <Home className="w-5 h-5" />
        </Link>

        <span
          className={`${isDark ? "bg-neutral-500" : "bg-gray-400"} h-5 w-[1px]`}
        ></span>

        <a
          href="https://github.com/itsishant"
          target="_blank"
          className={`${
            isDark
              ? "text-neutral-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } transition`}
        >
          <RiGithubFill className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/ishant-gupta-652585328/"
          target="_blank"
          className={`${
            isDark
              ? "text-neutral-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } transition`}
        >
          <RiLinkedinBoxFill className="text-xl" />
        </a>
        <a
          href="https://x.com/Ishant23April"
          target="_blank"
          className={`${
            isDark
              ? "text-neutral-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } transition`}
        >
          <RiTwitterXFill className="text-xl" />
        </a>
        <a
          href="https://www.instagram.com/itsishant.0/"
          target="_blank"
          className={`${
            isDark
              ? "text-neutral-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } transition`}
        >
          <RiInstagramLine className="text-xl" />
        </a>

        <span
          className={`${isDark ? "bg-neutral-500" : "bg-gray-400"} h-5 w-[1px]`}
        ></span>

        <motion.div className="flex justify-center items-center">
          <motion.button
            className={`hover:cursor-pointer ${
              isDark
                ? "text-neutral-300 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
            whileTap={{ scale: 0.7 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={toggleTheme}
          >
            {isDark ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
