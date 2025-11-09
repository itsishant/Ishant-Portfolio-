import ShinyText from "./ui/Shiny-text";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div>
      <div className="bg-neutral-800 shadow-2xl w-42 mx-auto rounded-xl mb-8 mt-12">
        <div
          className="bg-clip-text text-transparent text-3xl md:text-4xl font-bold py-2 text-center"
          style={{ fontFamily: "Poppins" }}
        >
          <ShinyText text="Contact" disabled={false} speed={2} />
        </div>
      </div>

      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="md:flex md:justify-center p-1 text-neutral-400"
        style={{ fontFamily: "Poppins" }}
      >
        Reach me via email
        <span className="md:p-0 md:ml-1 font-extralight underline">
          <a href="mailto:modakmania@gmail.com"> modakmania@gmail.com</a>
        </span>
      </motion.span>
    </div>
  );
};
