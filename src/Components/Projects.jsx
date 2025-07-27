import ShinyText from "./ui/Shiny-text"
import { motion } from "framer-motion"

export const Projects =  () => {
    return(
        <motion.div
        >
            <div className="bg-neutral-800 mt-12 shadow-2xl md:w-60 w-56 mx-auto rounded-xl mb-12">
        <div className="bg-clip-text text-transparent text-4xl md:text-5xl font-bold py-3 text-center" style={{ fontFamily: "Poppins" }}>
          <ShinyText text="Projects" disabled={false} speed={2} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
  viewport={{ once: true }}
         className="md:flex md:justify-center p-8 md:p-0 space-y-12 md:space-y-0 grid   md:gap-22">
      <div className="bg-gray-800 h-[350px] md:h-[400px] md:w-[510px] rounded-4xl">
        <div>
<video
  src="ShazorPay.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="rounded-4xl p-2  w-full h-auto"
/>
<a href="https://github.com/itsishant/paytm" className="ml-4 flex  font-bold text-lg text-neutral-400 hover:text-neutral-200 mb-1">GitHub <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-1 mt-1.5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"  />
</svg>
</a>
<span style={{fontFamily: "Poppins"}} className="flex text-neutral-200 text-md ml-4 mt-2"> ShazorPay – A full-stack payment solution built for speed, security, scalability and real-time transactions made easy
</span>
        </div>
      </div>
 <div className="bg-gray-800 h-[350px] md:h-[400px] md:w-[510px] rounded-4xl">
        <div>
<video
  src="FitMetrix.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="rounded-4xl p-2  w-full h-auto"
/>
<div className="flex">
<a href="https://github.com/itsishant/paytm" className="ml-4 flex  font-bold text-lg text-neutral-400 hover:text-neutral-200 mb-1 mt-5">GitHub <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-1 mt-1.5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"  />
  
</svg>

</a>
<a href="https://fitmetrix-ishant.vercel.app/" className="size-6 ml-3 mt-5.5">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className="hover:text-neutral-200 text-neutral-400" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>

</a>
<a>

  
</a>
</div>
<span style={{fontFamily: "Poppins"}} className="flex text-neutral-200 text-md ml-4 mt-2">
    FitMetrix – A full-stack fitness tracker built for progress, personalization, performance, and real-time workout insights
</span>
        </div>
      </div>
      </motion.div>
        </motion.div>
    )
}