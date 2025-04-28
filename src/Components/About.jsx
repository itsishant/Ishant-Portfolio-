import { useNavigate } from "react-router-dom"

export const About = () => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return(
        <div id="aboutMeSection" className="flex items-center justify-between min-h-screen px-10">
      <div className="text-white w-[100%] font-semibold font-sans text-xl text-left space-y-7 border border-amber-50 p-16 space-x-10 rounded-2xl transition duration-700 ease-in-out transform hover:scale-105 hover:bg-gray-900 ">

          <p>I am Ishant Gupta, a first-year Computer Science student.</p>
          <p>I have a strong passion for Web3, Blockchain, Data Structures and Algorithms (DSA), and the MERN Stack.</p>
          <p>I focus on building efficient and innovative solutions through a logical and analytical approach.</p>
          <p>Outside of programming, I enjoy playing badminton and listening to music.</p>
          <p>I am constantly driven by the desire to learn, grow, and explore emerging technologies.</p>
        </div>
        <div className=" animate-pulse w-1/2 flex justify-center items-center">
          <img
            src="image.jpg"
            alt="Ishant Gupta"
            className="h-64 transition duration-700 ease-in-out transform hover:scale-105 hover:bg-gray-900  w-64 object-cover rounded-full border-4 border-white"
          />
        </div>
      </div>
    )
}