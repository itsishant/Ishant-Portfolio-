import GitHubCalendar from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export const GithubGraph = () => {
  const { isDark } = useTheme();
  return (
    <div className="flex flex-col justify-center items-center w-full px-3 py-10 mt-6 md:mt-1">
      <div
        className={`w-full max-w-4xl ${
          isDark
            ? "bg-neutral-900/40 border-neutral-800"
            : "bg-white/80 border-gray-200"
        } backdrop-blur-md border rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)] p-5 sm:p-6 transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]`}
      >
        <div className="flex flex-row justify-between items-center mb-4">
          <h2
            className={`${
              isDark ? "text-neutral-400" : "text-gray-700"
            } tracking-tight text-sm sm:text-lg md:text-xl font-semibold`}
          >
            GitHub Contributions
          </h2>
          <Link
            to="https://github.com/itsishant"
            target="_blank"
            className={`${
              isDark
                ? "text-neutral-400 hover:text-white"
                : "text-gray-700 hover:text-gray-900"
            } flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base transition`}
          >
            @itsishant <FaGithub className="text-sm sm:text-lg" />
          </Link>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="w-full sm:flex sm:justify-center">
            <div className="inline-block min-w-full sm:min-w-0">
              <GitHubCalendar
                username="itsishant"
                colorScheme={isDark ? "dark" : "light"}
                blockSize={window.innerWidth < 640 ? 6 : 12}
                blockMargin={window.innerWidth < 640 ? 2 : 4}
                fontSize={window.innerWidth < 640 ? 8 : 14}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
