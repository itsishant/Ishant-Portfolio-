import GitHubCalendar from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const GithubGraph = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-3 py-10 mt-6 md:mt-1">
      <div className="w-full max-w-4xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)] p-5 sm:p-6 transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-neutral-400 tracking-tight text-sm sm:text-lg md:text-xl font-semibold">
            GitHub Contributions
          </h2>
          <Link
            to="https://github.com/itsishant"
            target="_blank"
            className="text-neutral-400 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base hover:text-white transition"
          >
            @itsishant <FaGithub className="text-sm sm:text-lg" />
          </Link>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="w-full sm:flex sm:justify-center">
            <div className="inline-block min-w-full sm:min-w-0">
              <GitHubCalendar
                username="itsishant"
                colorScheme="dark"
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
