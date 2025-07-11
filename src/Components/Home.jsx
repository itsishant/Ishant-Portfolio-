// Home.jsx
import { TypeAnimation } from "react-type-animation";
import { About } from "./About";
import { useTypewriter } from "use-typewriter-hook";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export const Home = () => (
  <main className="mt-16 md:mt-20 pb-20 flex flex-col">
    <div className="mt-16 md:mt-20 pb-32 flex flex-col items-center">
    <div className="px-4 md:px-8 lg:px-16 text-center max-w-3xl">
      <h2 className="text-4xl sm:text-6xl font-mono font-bold text-white">
        I am{" "}
        <TypeAnimation
          sequence={[
            "Ishant Gupta",
            2000,
            "a Frontend Developer",
            2000,
            "a Backend Developer",
            2000,
          ]}
          wrapper="span"
          speed={75}
          repeat={Infinity}
          className=" bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 bg-clip-text text-transparent"
        />
      </h2>
      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400 text-xl font-mono font-semibold">
        
        <span>A dedicated Computer Science student</span>
        <span>Passionate about emerging technologies</span>
      </div>
    </div>
</div>
    <About />
    <Skills />
    <Contact />
  </main>
);
