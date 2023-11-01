import { motion } from "framer-motion";

const Image = ({ activeKey, dest }) => {
  return dest.map(({ id, image, name }) => {
    return (
      activeKey === id && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 24, repeat: Infinity }}
          className="
          w-full h-full object-cover -mt-32
          lg:-mt-28 
      "
        >
          <img src={image} alt={name + "Image"} />
        </motion.div>
      )
    );
  });
};

export default Image;
