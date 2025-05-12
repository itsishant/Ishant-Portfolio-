import { animate, hover } from "motion";

export const Skills = () => {
  return (
    <div className="relative flex justify-center items-center py-16 px-4 md:px-10">
      {/* Floating JS image - top left */}
      <img
        src="js.png"
        alt=""
        className="absolute top-[20%] md:top-[16%] left-[10%] md:left-[20%] w-[60px] h-[60px] rounded-xl shadow-md shadow-yellow-600 animate-bounce"
        style={{animation: "bounce 3s infinite"}}
      />
      {/* Floating Python image - bottom right */}
      <img
        src="python.png"
        alt=""
        className="absolute top-[65%] md:top-[50%] left-[10%] md:left-[15%] w-[60px] h-[60px] rounded-xl  shadow-md shadow-blue-900 animate-bounce"
        style={{animation: "bounce 3s infinite"}}
      />

       <img
        src="java.png"
        alt=""
        className="absolute top-[21%] md:top-[20%] right-[10%] md:right-[24%] w-[60px] h-[60px] rounded-xl shadow-md shadow-blue-900 animate-bounce"
        style={{animation: "bounce 3s infinite"}}
      />

<img
        src="c.png"
        alt=""
        className="absolute top-[65%] md:top-[60%] right-[7%] md:right-[19%] w-[60px] h-[60px] rounded-xl shadow-md shadow-blue-800 animate-bounce"
        style={{animation: "bounce 3s infinite"}}
      />

      
<img
        src="React.png"
        alt=""
        className="absolute top-[37%] md:top-[32%] left-[10%] md:left-[4%] w-[62px] h-[60px] rounded-xl shadow-md shadow-blue-300 animate-bounce"
        style={{animation: "bounce 3s infinite"}}
      />


<img
        src="tailwind-css.png"
        alt=""
        className="absolute top-[38%] md:top-[38%] right-[8%] w-[65px] h-[65px] rounded-xl shadow-md shadow-black animate-bounce"
        style={{animation: "bounce 3s infinite"}}
      />

<img
        src="1646733543.webp"
        alt=""
        className="absolute top-[76%] md:top-[80%] right-[5%] w-[65px] h-[65px] rounded-xl shadow-md shadow-black animate-bounce"
        style={{animation: "bounce 3s infinite"}}
      />

<img
        src="mongodb (4).png"
        alt=""
        className="absolute top-[76%] md:top-[74%] left-[7%] w-[70px] h-[70px] rounded-xl  shadow-md shadow-green-900 animate-bounce"
        style={{animation: "bounce 3s infinite"}}
      />

<img
        src="git.png"
        alt=""  
        className="absolute top-[94%] md:top-[86%] left-[10%] md:left-[26%] w-[60px] h-[60px] rounded-xl  shadow-md shadow-orange-700 animate-bounce"
        style={{animation: "bounce 3s infinite"}}
      />

<img
        src="postman.png"
        alt=""
        className="absolute top-[94%] md:top-[90%] right-[8%] md:right-[28%] w-[65px] h-[65px] rounded-full shadow-md shadow-orange-900 animate-bounce"
        style={{animation: "bounce 3s infinite"}}
      />



      {/* Main content */}
      <div className="w-full max-w-5xl text-center">
        <div className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent text-5xl font-bold py-10">
          Technical Skills
        </div>

        {/* Skills Sections */}
        <SkillSection title="Languages" items={["Java", "JavaScript", "C", "Python"]} />
        <SkillSection title="Libraries and Frameworks" items={["Express", "Zod", "React", "TailwindCSS"]} />
        <SkillSection title="Databases" items={["MongoDB"]} />
        <SkillSection title="Tools and Technologies" items={["Git", "Postman"]} />
      </div>
    </div>
  );
};

const SkillSection = ({ title, items }) => (
  <div className="text-white font-bold text-2xl pt-10">
    {title}
    <div className="flex flex-wrap justify-center gap-4 py-6 text-lg">
      {items.map((item, index) => (
        <span
          key={index}
          className="border-2 border-white px-6 py-3 rounded-xl shadow-lg shadow-slate-200/10 duration-300 transform hover:scale-110 hover:shadow-2xl hover:bg-slate-900 hover:text-white"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);
