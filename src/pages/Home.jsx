import { motion } from "framer-motion";
import HomeMain from "../components/HomeMain";

const Home = () => {
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth }}
    transition={{ duration: 0.4 }}
    >
      <HomeMain />
    </motion.div>
  );
};

export default Home;
