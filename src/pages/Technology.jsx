import { motion } from "framer-motion";
import PageHead from "../components/PageHead";
import TechContainer from "../components/TechContainer";

const Technology = () => {
  return (
    <motion.main
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.6 }}
      className="
        w-full lg:h-100
        bg-no-repeat
        bg-cover
        bg-center
        bg-techMobile
        md:bg-techTablet 
        lg:bg-techDesktop
        pt-12 pb-12 
        md:pt-24
        lg:px-16   
        "
    >
      <PageHead pageNum="03" pageTitle="SPACE LAUNCH 101" />
      <TechContainer />
    </motion.main>
  );
};

export default Technology;
