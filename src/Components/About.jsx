import ShinyText from "./ui/Shiny-text"
import { motion } from "framer-motion"

export const About = () => {
  return(
    <div>
      <div className="bg-neutral-800 mt-12 shadow-2xl md:w-60 w-56 mx-auto rounded-xl mb-12">
        <div className="bg-clip-text text-transparent text-4xl md:text-5xl font-bold py-3 text-center" style={{ fontFamily: "Poppins" }}>
          <ShinyText text="About" disabled={false} speed={2} />
        </div>
      </div>
      <motion.div
      initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
  viewport={{ once: true }}
      style={{fontFamily: "Poppins"}} className="text-neutral-400 md:ml-0 ml-1 p-1  md:text-center ">
        I like solving problems by writing clean and simple code that works well.
When I'm not coding, I enjoy playing badminton or listening to music <span className="bg-neutral-600 text-white p-0.2">open to work</span>
      </motion.div> 
    </div>
  )
}