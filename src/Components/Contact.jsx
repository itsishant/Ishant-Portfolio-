import ShinyText  from "./ui/Shiny-text";
import { motion } from "framer-motion";

export const Contact = () => {
  return(
    <div>
<div className="bg-neutral-800 mt-12 shadow-2xl md:w-60 w-56 mx-auto rounded-xl mb-12">
        <div className="bg-clip-text text-transparent text-4xl md:text-5xl font-bold py-3 text-center" style={{ fontFamily: "Poppins" }}>
          <ShinyText text="Contact" disabled={false} speed={2} />
        </div>
      </div>

      <motion.span 
      initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
  viewport={{ once: true }}
      className="text-sm md:flex md:justify-center p-1 text-neutral-400" style={{fontFamily: "Poppins"}} >
        Feel free to contact me at<sapn className=" p-1  md:p-0  md:ml-1 underline " > <a href="modakmania@gmail.com"> modakmania@gmail.com </a> </sapn>
      </motion.span>

      <div className="flex ">
        <div className="bg-neutral-800 mt-6 shadow-2xl md:w-60 w-18  mx-auto rounded-full mb-12">
        <div className="bg-clip-text text-transparent text-sm md:text-5xl font- px-2 py-0.5 text-center" >
          <span className="text-neutral-200 flex gap-0.5"> <a href="https://github.com/itsishant">GitHub</a> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 space-x-0.5  mt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"  />
</svg> </span>
        </div>
      </div>

 <div className="bg-neutral-800 mt-6 shadow-2xl md:w-60 w-18 mx-auto rounded-full mb-12">
        <div className="bg-clip-text text-transparent text-sm md:text-5xl font- px-2 py-0.5 text-center" >
          <span className="text-neutral-200 flex gap-0.5"> <a href="https://x.com/Ishant23April">Twitter</a> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 space-x-0.5  mt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"  />
</svg> </span>
        </div>
      </div>


<div className="bg-neutral-800 mt-6 shadow-2xl md:w-60 w-20 mx-auto rounded-full mb-12">
        <div className="bg-clip-text text-transparent text-sm md:text-5xl font- px-2 py-0.5 text-center" >
          <span className="text-neutral-200 flex "> <a href="https://www.linkedin.com/in/ishant-gupta-652585328/">Linkedin</a> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 space-x-0.5  mt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"  />
</svg> </span>
        </div>
      </div>

     <div className="bg-neutral-800 mt-6 shadow-2xl md:w-60 w-23 mx-auto rounded-full mb-12">
        <div className="bg-clip-text text-transparent text-sm md:text-5xl font- px-2 py-0.5 text-center" >
          <span className="text-neutral-200 flex gap-0.5"> <a href="https://www.instagram.com/">Instagram</a> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 space-x-0.5  mt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"  />
</svg> </span>
        </div>
      </div>


      </div>
    </div>
  )
}