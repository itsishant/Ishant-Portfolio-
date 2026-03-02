import { ExternalLinkIcon } from "lucide-react";
import ShinyText from "./ui/Shiny-text";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

export const Projects = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState("web");

  return (
    <motion.div>
      <div
        className={`${
          isDark ? "bg-neutral-800" : "bg-white border border-gray-200"
        } shadow-2xl w-58 md:w-96 mx-auto rounded-xl mb-8`}
      >
        <div
          className={`bg-clip-text text-transparent  text-3xl md:text-5xl font-bold py-2 text-center ${
            !isDark ? "!text-black" : ""
          }`}
          style={{ fontFamily: "Poppins" }}
        >
          <ShinyText text="Proof of Work" disabled={false} speed={2} />
        </div>
      </div>

      <div className="flex gap-8 text-base md:text-lg justify-center items-center mb-6">
        <button
          onClick={() => setActiveTab("web")}
          className={`relative font-medium transition-colors ${
            activeTab === "web"
              ? isDark
                ? "text-white"
                : "text-gray-900"
              : isDark
                ? "text-neutral-400 hover:text-neutral-200"
                : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Web Dev
          {activeTab === "web" && (
            <motion.div
              layoutId="projectTab"
              className={`absolute -bottom-2 left-0 right-0 h-0.5 ${
                isDark ? "bg-white" : "bg-gray-900"
              }`}
              initial={false}
            />
          )}
        </button>
        <span className={isDark ? "text-neutral-600" : "text-gray-400"}>|</span>
        <button
          onClick={() => setActiveTab("blockchain")}
          className={`relative font-medium transition-colors ${
            activeTab === "blockchain"
              ? isDark
                ? "text-white"
                : "text-gray-900"
              : isDark
                ? "text-neutral-400 hover:text-neutral-200"
                : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Android
          
          {activeTab === "blockchain" && (
            <motion.div
              layoutId="projectTab"
              className={`absolute -bottom-2 left-0 right-0 h-0.5 ${
                isDark ? "bg-white" : "bg-gray-900"
              }`}
              initial={false}
            />
          )}
        </button>
      </div>

      {activeTab === "web" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-10 gap-8 p-8 justify-items-center items-center"
        >

           <div
            className={`${
              isDark ? "bg-black" : "bg-white"
            } h-[375px] md:h-[375px] w-[350px] md:w-[360px] rounded-md border border-dashed ${
              isDark ? "border-neutral-500" : "border-gray-800"
            }`}
          >
            <div>
              <video
                src="loopify.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-xl p-2 w-full h-auto"
              />
              <div className="flex items-center ml-4 mt-1 space-x-4">
                <a
                  href="https://github.com/itsishant/loopify"
                  className={`flex items-center text-lg ${
                    isDark
                      ? "text-neutral-100 hover:text-neutral-300"
                      : "text-gray-700 hover:text-gray-900"
                  } tracking-tight transition`}
                  target="_blank"
                >
                  GitHub
                  <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
                </a>

                 <a
                  href="https://loopify-ishant.vercel.app/"
                  className={`flex items-center text-lg ${
                    isDark
                      ? "text-neutral-100 hover:text-neutral-300"
                      : "text-gray-700 hover:text-gray-900"
                  } transition`}
                  target="_blank"
                >
                  View
                  <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
                </a>
              </div>
              <span
                style={{ fontFamily: "Poppins" }}
                className={`flex ${
                  isDark ? "text-neutral-400" : "text-gray-600"
                } tracking-tight text-md ml-4 mt-2`}
              >
                Loopify – 
A subscription management platform that notifies users before renewals through email reminders and alerts, helping them stay in control of their subscriptions.

              </span>
            </div>
          </div>

        

          <div
            className={`${
              isDark ? "bg-black" : "bg-white"
            } h-[350px] md:h-[350px] w-[350px] rounded-md border border-dashed ${
              isDark ? "border-neutral-500" : "border-gray-800"
            }`}
          >
            <div>
              <video
                src="DevHub.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-xl p-2 w-full h-auto"
              />
              <div className="flex items-center ml-4 mt-2 space-x-4">
                <a
                  href="https://github.com/itsishant/DevHub"
                  className={`flex items-center text-lg ${
                    isDark
                      ? "text-neutral-100 hover:text-neutral-300"
                      : "text-gray-700 hover:text-gray-900"
                  } tracking-tight transition`}
                  target="_blank"
                >
                  GitHub
                  <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
                </a>
                <a
                  href="https://devhub-ishant.vercel.app/"
                  className={`flex items-center text-lg ${
                    isDark
                      ? "text-neutral-100 hover:text-neutral-300"
                      : "text-gray-700 hover:text-gray-900"
                  } transition`}
                  target="_blank"
                >
                  View
                  <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
                </a>
              </div>
              <span
                style={{ fontFamily: "Poppins" }}
                className={`flex ${
                  isDark ? "text-neutral-400" : "text-gray-600"
                } tracking-tight text-md ml-4 mt-1`}
              >
                DevHub – A community where developers come together to share
                knowledge, showcase projects, and collaborate on ideas.
              </span>
            </div>
          </div>

            <div
            className={`${
              isDark ? "bg-black" : "bg-white"
            } h-[350px] md:h-[350px] w-[350px]  rounded-md border border-dashed ${
              isDark ? "border-neutral-500" : "border-gray-800"
            }`}
          >
            <div>
              <video
                src="FitMetrix.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-xl  p-2 w-full h-auto"
              />
              <div className="flex items-center ml-4 mt-2 space-x-4">
                <a
                  href="https://github.com/itsishant/fitmetrix"
                  className={`flex items-center text-lg ${
                    isDark
                      ? "text-neutral-100 hover:text-neutral-300"
                      : "text-gray-700 hover:text-gray-900"
                  } tracking-tight transition`}
                  target="_blank"
                >
                  GitHub
                  <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
                </a>
                <a
                  href="https://fitmetrix-ishant.vercel.app/"
                  className={`flex items-center text-lg ${
                    isDark
                      ? "text-neutral-100 hover:text-neutral-300"
                      : "text-gray-700 hover:text-gray-900"
                  } transition`}
                  target="_blank"
                >
                  View
                  <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
                </a>
              </div>
              <span
                style={{ fontFamily: "Poppins" }}
                className={`flex ${
                  isDark ? "text-neutral-400" : "text-gray-600"
                } tracking-tight text-md ml-4 mt-2`}
              >
                FitMetrix – A full-stack fitness tracker built for progress,
                personalization, performance, and real-time workout insights.
              </span>
            </div>
          </div>

          <div
            className={`${
              isDark ? "bg-black" : "bg-white"
            } h-[350px] md:h-[350px] w-[350px] rounded-md border border-dashed ${
              isDark ? "border-neutral-500" : "border-gray-800"
            }`}
          >
            <div>
              <video
                src="Cosmic.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-xl p-2 w-full h-auto"
              />
              <div className="flex items-center ml-4 mt-2 space-x-4">
                <a
                  href="https://github.com/itsishant/Cosmic"
                  className={`flex items-center text-lg tracking-tight ${
                    isDark
                      ? "text-neutral-100 hover:text-neutral-300"
                      : "text-gray-700 hover:text-gray-900"
                  } transition`}
                  target="_blank"
                >
                  GitHub
                  <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
                </a>
                <a
                  href="https://cosmic-ishant.vercel.app/"
                  className={`flex items-center text-lg ${
                    isDark
                      ? "text-neutral-100 hover:text-neutral-300"
                      : "text-gray-700 hover:text-gray-900"
                  } transition`}
                  target="_blank"
                >
                  View
                  <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
                </a>
              </div>
              <span
                style={{ fontFamily: "Poppins" }}
                className={`flex ${
                  isDark ? "text-neutral-400" : "text-gray-600"
                } tracking-tight text-md ml-4 mt-1`}
              >
                Cosmic – A sleek, personal portfolio website showcasing projects
                and skills with a clean design and smooth navigation.
              </span>
            </div>
          </div>

           <div
            className={`${
              isDark ? "bg-black" : "bg-white"
            } h-[350px] md:h-[350px] w-[350px] rounded-md border border-dashed ${
              isDark ? "border-neutral-500" : "border-gray-800"
            }`}
          >
            <div>
              <video
                src="ShazorPay.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-xl p-2 w-full h-auto"
              />
              <div className="flex items-center ml-4 mt-1 space-x-4">
                <a
                  href="https://github.com/itsishant/paytm"
                  className={`flex items-center text-lg ${
                    isDark
                      ? "text-neutral-100 hover:text-neutral-300"
                      : "text-gray-700 hover:text-gray-900"
                  } tracking-tight transition`}
                  target="_blank"
                >
                  GitHub
                  <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
                </a>
              </div>
              <span
                style={{ fontFamily: "Poppins" }}
                className={`flex ${
                  isDark ? "text-neutral-400" : "text-gray-600"
                } tracking-tight text-md ml-4 mt-2`}
              >
                ShazorPay – A full-stack payment solution built for speed,
                security, scalability and real-time transactions made easy.
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === "blockchain" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center items-center p-4 md:p-8"
        >
          <div
            className={`${
              isDark ? "bg-black" : "bg-white"
            } h-auto md:h-[480px] w-full md:w-[580px] rounded-md border border-dashed ${
              isDark ? "border-neutral-500" : "border-gray-800"
            } flex flex-col md:flex-row`}
          >
            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-0">
              <video
                src="loopify-mobile.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg border border-dashed border-neutral-500 w-[200px] md:w-[220px] h-[350px] md:h-[440px]"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-6">
              <div className="border-t md:border-t-0 md:border-l border-dashed border-neutral-500 pt-4 md:pt-0 md:pl-6 flex flex-col justify-center">
                <h3
                  style={{ fontFamily: "Poppins" }}
                  className={`text-lg md:text-xl font-semibold text-center ${
                    isDark ? "text-neutral-200" : "text-gray-900"
                  }`}
                >
                  Loopify
                </h3>
                <span
                  style={{ fontFamily: "Poppins" }}
                  className={`text-center mt-3 md:mt-4 block ${
                    isDark ? "text-neutral-400" : "text-gray-600"
                  } tracking-tight text-xs md:text-sm`}
                >
                  A native Android app for subscription management that notifies users before renewals through push notifications and alerts.
                </span>
                <div className="flex items-center justify-center space-x-4 mt-4 md:mt-6">
                  <a
                    href="https://github.com/itsishant/loopify-android"
                    style={{ fontFamily: "Poppins" }}
                    className={`flex items-center text-sm md:text-base font-medium ${
                      isDark
                        ? "text-neutral-100 hover:text-neutral-300"
                        : "text-gray-700 hover:text-gray-900"
                    } tracking-tight transition`}
                    target="_blank"
                  >
                    GitHub
                    <ExternalLinkIcon className="w-4 md:w-5 h-4 md:h-5 ml-2 transition" />
                  </a>
                  <a
                    href="https://github.com/itsishant/loopify-android"
                    style={{ fontFamily: "Poppins" }}
                    className={`flex items-center text-sm md:text-base font-medium ${
                      isDark
                        ? "text-neutral-100 hover:text-neutral-300"
                        : "text-gray-700 hover:text-gray-900"
                    } tracking-tight transition`}
                    target="_blank"
                  >
                    View
                    <ExternalLinkIcon className="w-4 md:w-5 h-4 md:h-5 ml-2 transition" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="space-y-10 gap-8 p-8 justify-items-center items-center hidden"
      >
        <div
          className={`${
            isDark ? "bg-black" : "bg-white"
          } h-[350px] md:h-[430px] w-[350px] rounded-xl border border-dashed ${
            isDark ? "border-neutral-700" : "border-gray-300"
          }`}
        >
          <div>
            <video
              src="ShazorPay.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl p-2 w-full h-auto"
            />
            <div className="flex items-center ml-4 mt-1 space-x-4">
              <a
                href="https://github.com/itsishant/paytm"
                className={`flex items-center text-lg ${
                  isDark
                    ? "text-neutral-100 hover:text-neutral-300"
                    : "text-gray-700 hover:text-gray-900"
                } tracking-tight transition`}
                target="_blank"
              >
                GitHub
                <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
              </a>
            </div>
            <span
              style={{ fontFamily: "Poppins" }}
              className={`flex ${
                isDark ? "text-neutral-400" : "text-gray-600"
              } tracking-tight text-md ml-4 mt-2`}
            >
              ShazorPay – A full-stack payment solution built for speed,
              security, scalability and real-time transactions made easy.
            </span>
          </div>
        </div>

        <div
          className={`${
            isDark ? "bg-black" : "bg-white"
          } h-[350px] md:h-[430px] w-[350px] rounded-xl border border-dashed ${
            isDark ? "border-neutral-700" : "border-gray-300"
          }`}
        >
          <div>
            <video
              src="FitMetrix.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl  p-2 w-full h-auto"
            />
            <div className="flex items-center ml-4 mt-2 space-x-4">
              <a
                href="https://github.com/itsishant/fitmetrix"
                className={`flex items-center text-lg ${
                  isDark
                    ? "text-neutral-100 hover:text-neutral-300"
                    : "text-gray-700 hover:text-gray-900"
                } tracking-tight transition`}
                target="_blank"
              >
                GitHub
                <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
              </a>
              <a
                href="https://fitmetrix-ishant.vercel.app/"
                className={`flex items-center text-lg ${
                  isDark
                    ? "text-neutral-100 hover:text-neutral-300"
                    : "text-gray-700 hover:text-gray-900"
                } transition`}
                target="_blank"
              >
                View
                <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
              </a>
            </div>
            <span
              style={{ fontFamily: "Poppins" }}
              className={`flex ${
                isDark ? "text-neutral-400" : "text-gray-600"
              } tracking-tight text-md ml-4 mt-2`}
            >
              FitMetrix – A full-stack fitness tracker built for progress,
              personalization, performance, and real-time workout insights.
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
