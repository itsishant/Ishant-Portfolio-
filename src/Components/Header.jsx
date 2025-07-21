// Header.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

export const Header = () => {
  const navigate = useNavigate();

return (
<motion.div
initial={{opacity:0, y:0}}
animate={{
  opacity:1, y:1
}}

transition={{
  duration:0.2, ease:"easeInOut"
}}
className="mt-12 h-14 md:w-112 mx-10  flex justify-center rounded-full bg-gradient-to-r from-gray-900 shadow-2xl  to-gray-900 to-blue-gray-800 md:mx-auto">
  <motion.div
  className="flex justify-center gap-12 md:gap-18 mb-0.5">
 
 <button className="hover:cursor-pointer">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 ">
  <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" />
</svg>

</button>
 
<button className="hover:cursor-pointer"> 

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="size-8 drop-shadow-[0_0_1px_white]"
>
  <path
    fillRule="evenodd"
    d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
    clipRule="evenodd"
  />
</svg>
</button >

<button className="hover:cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-7">
  <path fillRule="evenodd" d="M12 2a5 5 0 0 1 5 5v1a5 5 0 1 1-10 0V7a5 5 0 0 1 5-5zm0 13c-5.523 0-10 2.239-10 5v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2c0-2.761-4.477-5-10-5z" clipRule="evenodd" />
</svg>
</button>


<button className="hover:cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
</svg>
</button>



</motion.div>


</motion.div>

)

};


