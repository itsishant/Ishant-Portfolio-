import { ExternalLinkIcon } from "lucide-react";
import ShinyText from "./ui/Shiny-text";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <motion.div>
      <div className="bg-neutral-800 shadow-2xl w-42 mx-auto rounded-xl mb-8">
        <div
          className="bg-clip-text text-transparent text-3xl md:text-4xl font-bold py-2 text-center"
          style={{ fontFamily: "Poppins" }}
        >
          <ShinyText text="Projects" disabled={false} speed={2} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 justify-items-center items-center"
      >
        <div className="bg-black h-[350px] md:h-[400px] md:w-[510px] rounded-4xl">
          <div>
            <video
              src="ShazorPay.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-4xl p-2 w-full h-auto"
            />
            <div className="flex items-center ml-4 mt-1 space-x-4">
              <a
                href="https://github.com/itsishant/paytm"
                className="flex items-center text-lg text-neutral-100 hover:text-neutral-300 tracking-tight transition"
                target="_blank"
              >
                GitHub
                <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
              </a>
            </div>
            <span
              style={{ fontFamily: "Poppins" }}
              className="flex text-neutral-400 tracking-tight text-md ml-4 mt-2"
            >
              ShazorPay – A full-stack payment solution built for speed,
              security, scalability and real-time transactions made easy.
            </span>
          </div>
        </div>

        <div className="bg-black h-[350px] md:h-[400px] md:w-[510px] rounded-4xl">
          <div>
            <video
              src="FitMetrix.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-4xl p-2 w-full h-auto"
            />
            <div className="flex items-center ml-4 mt-2 space-x-4">
              <a
                href="https://github.com/itsishant/fitmetrix"
                className="flex items-center text-lg text-neutral-100 hover:text-neutral-300 tracking-tight transition"
                target="_blank"
              >
                GitHub
                <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
              </a>
              <a
                href="https://fitmetrix-ishant.vercel.app/"
                className="flex items-center text-lg text-neutral-100 hover:text-neutral-300 transition"
                target="_blank"
              >
                View
                <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
              </a>
            </div>
            <span
              style={{ fontFamily: "Poppins" }}
              className="flex text-neutral-400 tracking-tight text-md ml-4 mt-2"
            >
              FitMetrix – A full-stack fitness tracker built for progress,
              personalization, performance, and real-time workout insights.
            </span>
          </div>
        </div>

        <div className="bg-black h-[350px] md:h-[430px] md:w-[510px] rounded-4xl">
          <div>
            <video
              src="DevHub.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-4xl p-2 w-full h-auto"
            />
            <div className="flex items-center ml-4 mt-2 space-x-4">
              <a
                href="https://github.com/itsishant/DevHub"
                className="flex items-center text-lg text-neutral-100 hover:text-neutral-300 tracking-tight transition"
                target="_blank"
              >
                GitHub
                <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
              </a>
              <a
                href="https://devhub-ishant.vercel.app/"
                className="flex items-center text-lg text-neutral-100 hover:text-neutral-300 transition"
                target="_blank"
              >
                View
                <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
              </a>
            </div>
            <span
              style={{ fontFamily: "Poppins" }}
              className="flex text-neutral-400 tracking-tight text-md ml-4 mt-1"
            >
              DevHub – A community where developers come together to share
              knowledge, showcase projects, and collaborate on ideas.
            </span>
          </div>
        </div>

        <div className="bg-black h-[350px] md:h-[430px] md:w-[510px] rounded-4xl">
          <div>
            <video
              src="Cosmic.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-4xl p-2 w-full h-auto"
            />
            <div className="flex items-center ml-4 mt-2 space-x-4">
              <a
                href="https://github.com/itsishant/Cosmic"
                className="flex items-center text-lg tracking-tight text-neutral-100 hover:text-neutral-300  transition"
                target="_blank"
              >
                GitHub
                <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
              </a>
              <a
                href="https://cosmic-ishant.vercel.app/"
                className="flex items-center text-lg text-neutral-100 hover:text-neutral-300 transition"
                target="_blank"
              >
                View
                <ExternalLinkIcon className="w-5 h-5 ml-1 transition" />
              </a>
            </div>
            <span
              style={{ fontFamily: "Poppins" }}
              className="flex text-neutral-400 tracking-tight text-md ml-4 mt-1"
            >
              Cosmic – A sleek, personal portfolio website showcasing projects
              and skills with a clean design and smooth navigation.
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
