import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

type GitHubContributionsResponse = {
  total: {
    lastYear: number;
  };
  contributions: Array<{
    date: string;
    count: number;
    level: number;
  }>;
};

function GitHubContributionsGraph({ username }: { username: string }) {
  const [data, setData] = useState<GitHubContributionsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
        );
        if (!response.ok) throw new Error("Failed to fetch contributions");
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load");
      } finally {
        setLoading(false);
      }
    };
    fetchContributions();
  }, [username]);

  if (loading) {
    return (
      <div
        className={`relative rounded-2xl p-6 ${
          isDark
            ? "bg-neutral-900/50 border-neutral-800"
            : "bg-white/90 border-gray-200"
        } backdrop-blur-md border`}
      >
        <h3 className="mb-4 text-lg font-medium">GitHub Contributions</h3>
        <div className="flex items-center gap-2 mb-4">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-base group relative inline-block font-[450] ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            @{username}
            <span
              className={`absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 ${
                isDark ? "bg-white" : "bg-gray-900"
              } transition-all duration-200 group-hover:max-w-full`}
            ></span>
          </a>
        </div>
        <div className="grid grid-cols-53 gap-1">
          {Array.from({ length: 371 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square w-full rounded ${
                isDark ? "bg-neutral-800" : "bg-gray-200"
              } animate-pulse`}
            />
          ))}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return null;
  }

  const contributions = data.contributions;

  const startDate = new Date("2025-02-02");
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  const filteredContributions = contributions.filter((contrib) => {
    const contribDate = new Date(contrib.date);
    return contribDate >= startDate && contribDate <= today;
  });

  const contribMap = new Map<
    string,
    { date: string; count: number; level: number }
  >();
  filteredContributions.forEach((contrib) => {
    contribMap.set(contrib.date, contrib);
  });

  const firstSunday = new Date(startDate);
  const firstDayOfWeek = firstSunday.getDay();
  firstSunday.setDate(firstSunday.getDate() - firstDayOfWeek);

  const totalDays = Math.ceil(
    (today.getTime() - firstSunday.getTime()) / (1000 * 60 * 60 * 24),
  );
  const totalWeeks = Math.ceil(totalDays / 7);

  const weeks: Array<
    Array<{ date: string; count: number; level: number } | null>
  > = [];

  for (let weekIndex = 0; weekIndex < totalWeeks; weekIndex++) {
    const week: Array<{ date: string; count: number; level: number } | null> =
      [];

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const currentDate = new Date(firstSunday);
      currentDate.setDate(currentDate.getDate() + weekIndex * 7 + dayIndex);

      const dateStr = currentDate.toISOString().split("T")[0];

      if (contribMap.has(dateStr)) {
        week.push(contribMap.get(dateStr)!);
      } else if (currentDate >= startDate && currentDate <= today) {
        week.push({ date: dateStr, count: 0, level: 0 });
      } else {
        week.push(null);
      }
    }

    weeks.push(week);
  }

  const getLevelColor = (level: number, count: number) => {
    if (count === 0) {
      return isDark ? "bg-neutral-900" : "bg-gray-100";
    }
    const lightColors = [
      "bg-emerald-100",
      "bg-emerald-300",
      "bg-emerald-500",
      "bg-emerald-600",
      "bg-emerald-700",
    ];
    const darkColors = [
      "bg-emerald-900/30",
      "bg-emerald-700/50",
      "bg-emerald-600/70",
      "bg-emerald-500/80",
      "bg-emerald-400/90",
    ];
    const colors = isDark ? darkColors : lightColors;
    return colors[Math.min(level, 4)] || colors[0];
  };

  return (
    <div
      className={`relative rounded-2xl p-2 md:p-6
  ${
    isDark
      ? "bg-neutral-900/50 border-neutral-800"
      : "bg-white/90 border-gray-200"
  }
  backdrop-blur-md border shadow-[0_0_30px_rgba(0,0,0,0.3)]
  transition-all duration-500
  hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]
`}
    >
      <div className="flex items-center justify-between md:justify-between mb-3 md:mb-4 mt-2 md:mt-0">
        <h3
          className={`text-sm md:text-lg font-medium ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          GitHub Contributions
        </h3>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-base group relative inline-block font-[450] text-sm ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          @{username}
          <span
            className={`absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 ${
              isDark ? "bg-white" : "bg-gray-900"
            } transition-all duration-200 group-hover:max-w-full`}
          ></span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 inline-block ml-1"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>

      <div
        className="overflow-x-auto pb-3"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: isDark ? "#22c55e #262626" : "#22c55e #f5f5f5",
        }}
      >
        <style>{`
          .graph-scroll::-webkit-scrollbar {
            height: 8px;
          }
          .graph-scroll::-webkit-scrollbar-track {
            background: ${isDark ? "#262626" : "#f5f5f5"};
            border-radius: 10px;
          }
          .graph-scroll::-webkit-scrollbar-thumb {
            background: #22c55e;
            border-radius: 10px;
          }
          .graph-scroll::-webkit-scrollbar-thumb:hover {
            background: #16a34a;
          }
        `}</style>
        <div className="flex gap-0.5 items-end min-w-fit graph-scroll">
          <div className="flex flex-col gap-1 pr-3 pb-2.5 pt-0.5 justify-end">
            <div className="h-5"></div>
            {["Sun", "", "Tue", "", "Thu", "", "Sat"].map((day, index) => (
              <div
                key={index}
                className={`text-[11px] ${
                  isDark ? "text-neutral-400" : "text-gray-500"
                } h-4 flex items-center font-medium px-2 py-0.5 rounded-sm ${
                  day
                    ? `visible ${
                        isDark ? "bg-neutral-950/80" : "bg-gray-50/80"
                      } backdrop-blur-sm`
                    : "invisible"
                } transition-colors duration-200`}
                style={{ width: "32px", height: "16px" }}
              >
                {day}
              </div>
            ))}
          </div>

          <div className="flex gap-1">
            {weeks.map((week, weekIndex) => {
              const weekDate = week.find((d) => d !== null);
              const weekMonth = weekDate
                ? new Date(weekDate.date).getMonth()
                : -1;
              const isNewMonth =
                weekIndex === 0 ||
                (() => {
                  const prevWeek = weeks[weekIndex - 1];
                  const prevWeekDate = prevWeek.find((d) => d !== null);
                  const prevMonth = prevWeekDate
                    ? new Date(prevWeekDate.date).getMonth()
                    : -1;
                  return weekMonth !== prevMonth;
                })();

              return (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {isNewMonth && weekDate && (
                    <div
                      className={`text-[11px] ${
                        isDark ? "text-neutral-400" : "text-gray-500"
                      } h-5 mb-0.5 whitespace-nowrap font-medium`}
                    >
                      {new Date(weekDate.date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </div>
                  )}
                  {!isNewMonth && <div className="h-5 mb-0.5"></div>}

                  <div className="flex flex-col gap-1">
                    {week.map((contrib, dayIndex) => {
                      if (contrib === null) {
                        return (
                          <div key={dayIndex} className="w-[14px] h-[14px]" />
                        );
                      }

                      return (
                        <motion.div
                          key={`${weekIndex}-${dayIndex}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: (weekIndex * 7 + dayIndex) * 0.002,
                          }}
                          className={`aspect-square fke w-[14px] h-[14px] rounded-[2px] transition-all duration-200 ${getLevelColor(
                            contrib.level,
                            contrib.count,
                          )} ${
                            contrib.count > 0
                              ? "hover:ring-2 hover:ring-emerald-400/50 hover:scale-110 cursor-pointer"
                              : ""
                          }`}
                          title={`${contrib.date || "No contributions"}: ${
                            contrib.count
                          } contribution${contrib.count !== 1 ? "s" : ""}`}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`flex items-center justify-between mt-5 pt-4 border-t ${
          isDark ? "border-neutral-800/50" : "border-gray-200/50"
        }`}
      >
        {data.total && (
          <div
            className={`text-sm ${
              isDark ? "text-neutral-400" : "text-gray-600"
            }`}
          >
            <span
              className={`font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {data.total.lastYear.toLocaleString()}
            </span>{" "}
            contributions in the last year
          </div>
        )}
        <div
          className={`flex items-center gap-2.5 text-[11px] ${
            isDark ? "text-neutral-400" : "text-gray-600"
          }`}
        >
          <span className="font-medium hidden md:block">Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`aspect-square hidden md:block w-[14px] h-[14px] rounded-[2px] ${getLevelColor(
                  level,
                  level > 0 ? 1 : 0,
                )}`}
              />
            ))}
          </div>
          <span className="font-medium hidden md:block">More</span>
        </div>
      </div>
    </div>
  );
}

export const GithubGraph = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-3 md:px-7 mt-10 md:mt-12 mr-0 md:mr-0 ml-0 md:ml-0">
      <div className="w-full md:max-w-5xl">
        <GitHubContributionsGraph username="itsishant" />
      </div>
    </div>
  );
};
