import { TypeAnimation } from "react-type-animation";
import { About } from "./About";

export const Home = () => {

  return (
    <div className="py-20 flex flex-col items-center justify-center">
      
      <div className="p-8 md:p-44 w-[1300px] text-center">
        <span className="text-white text-6xl font-mono font-bold"> I am </span>
        <TypeAnimation
          sequence={[
            "Ishant Gupta",
            2000,
            "Frontend Developer",
            2000,
            "Backend Developer",
            2000,
        ]}
          wrapper="span"
          speed={80}
          repeat={Infinity}
          className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 bg-clip-text text-transparent
 text-6xl font-mono font-bold"
        />

        <div className="text-gray-400 grid grid-cols-1 text-xl my-8 font-semibold font-mono ">
          <span className="space-y-3">A dedicated Computer Science student with</span>
          <span className="space-y-3">
            a passion for technology 1st year
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block size-6 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
          </span>
        </div>
        
      </div>
      <About />
    </div>
  );
};
