import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import SliderContent from "../components/SliderContent";

const Crew = () => {
  return (
    <motion.main
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.4 }}
      className="
        w-full lg:h-100
        bg-no-repeat
        bg-cover
        bg-center
        bg-crewMobile
        md:bg-crewTablet 
        lg:bg-crewDesktop
        px-4 pt-12 pb-12 
        md:px-8 md:pt-24
        lg:px-16 
        
  "
    >
      <PageHead pageNum="02" pageTitle="Meet your crew" />
      <SliderContent />
    </motion.main>
  );
};

export default Crew;
