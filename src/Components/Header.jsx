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

export const Header = () => {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);

  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-neutral-900/70 border border-neutral-800 rounded-lg px-6 md:py-4 py-3 flex items-center gap-3 hover:gap-6 shadow-lg transition-all duration-300">
      <div className="flex justify-center items-center md:gap-4 gap-3">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-neutral-300 hover:text-white transition"
        >
          <Home className="w-5 h-5" />
        </Link>

        <span className="bg-neutral-500 h-5 w-[1px]"></span>

        <a
          href="https://github.com/itsishant"
          target="_blank"
          className="text-neutral-300 hover:text-white transition"
        >
          <RiGithubFill className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/ishant-gupta-652585328/"
          target="_blank"
          className="text-neutral-300 hover:text-white transition"
        >
          <RiLinkedinBoxFill className="text-xl" />
        </a>
        <a
          href="https://x.com/Ishant23April"
          target="_blank"
          className="text-neutral-300 hover:text-white transition"
        >
          <RiTwitterXFill className="text-xl" />
        </a>
        <a
          href="https://www.instagram.com/itsishant.0/"
          target="_blank"
          className="text-neutral-300 hover:text-white transition"
        >
          <RiInstagramLine className="text-xl" />
        </a>

        <span className="bg-neutral-500 h-5 w-[1px]"></span>

        <motion.div className="flex justify-center items-center">
          <motion.button
            className="hover:cursor-pointer"
            whileTap={{ scale: 0.7 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={() => setDark(!dark)}
          >
            {dark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
