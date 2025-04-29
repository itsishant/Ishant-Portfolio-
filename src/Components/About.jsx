import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div id="aboutMeSection" className="min-h-screen px-4 py-10">
      <h1 className="text-4xl md:text-6xl text-center  text-white  font-bold mb-12 md:mb-24">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        <div className="text-white font-semibold text-lg space-y-5 border w-full max-w-[800px] border-amber-50 p-6 md:p-12 rounded-2xl transition duration-700 transform hover:scale-105 hover:bg-gray-900">
          <p>I am Ishant Gupta, a first-year Computer Science student.</p>
          <p>I have a strong passion for Web3, Blockchain, DSA, and the MERN Stack.</p>
          <p>I focus on building efficient and innovative solutions through a logical approach.</p>
          <p>Outside of programming, I enjoy playing badminton and listening to music.</p>
          <p>I am driven by the desire to learn, grow, and explore emerging technologies.</p>
        </div>

        <div className="animate-pulse flex justify-center">
          <img
            src="image.jpg"
            alt="Ishant Gupta"
            className="h-40 w-40 md:h-64 md:w-64 object-cover rounded-full border-4 border-white transition-transform duration-700 transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
