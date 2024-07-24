import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div
        className="container mx-auto py-32 text-center xl:text-left flex
        items-center justify-center h-full"
      >
        {/* text & form*/}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center xl:mb-12"
          >
            Biz bilan <span className="text-accent">bogʻlaning.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col xl:gap-6 gap-4 w-full mx-auto"
          >
            {/* group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Ism" className="input" />
              <input type="text" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Mavzu" className="input" />
            <textarea placeholder="Murojaat" className="textarea" />
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all
             duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Yuborish
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
