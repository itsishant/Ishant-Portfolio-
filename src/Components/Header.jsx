import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const [animated, setanimated] = useState();

    const navigate = useNavigate();

    const handleClick = (path) => {
          navigate(path);
        }

    return (      
        <div className="fixed top-0 left-0 right-0 p-8 shadow-2xl bg-gradient-to-r from-slate-800 to-black shadow-slate-700 animate-bounce first:animate-none">
            <div className="text-gray-400 flex justify-center items-center">
                <div className="space-x-14">
                    <button onClick={() => {handleClick("/")}} className="animate cursor-pointer"><span className="text-xl hover:animate-pulse font-bold">Home</span></button>
                    <button onClick={() => {handleClick("/aboutMe")}} className=" cursor-pointer"><span className="text-xl hover:animate-pulse font-bold">About Me</span></button>
                    <button onClick={() => {handleClick("/my-projects")}} className="cursor-pointer"><span className="text-xl hover:animate-pulse font-bold">Projects</span></button>
                    <button  onClick={() => {handleClick("/my-skills")}} className=" cursor-pointer"><span className="text-xl hover:animate-pulse font-bold">Skills</span></button>
                    <button onClick={() => {handleClick("/contactMe")}} className=" cursor-pointer"><span className="text-xl hover:animate-pulse font-bold">Contact Me</span></button>                  
                </div>
            </div>
        </div>
    );
};
