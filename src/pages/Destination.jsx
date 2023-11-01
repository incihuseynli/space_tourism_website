import Image from "../components/Image";
import PageHead from "../components/PageHead";
import TabInfo from "../components/TabInfo";
import TabMenus from "../components/TabMenus";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
const DEST_URL =
  "https://my-json-server.typicode.com/incihuseynli/Db/destinations";

const Destination = () => {
  const [dest, setDest] = useState([]);
  // const [activeKey,setActiveKey] = useState(dest.id);
  const [activeKey, setActiveKey] = useState(
    (dest.id = 1 || (dest.length > 0 ? dest[0].id : ""))
  );
  useEffect(() => {
    axios.get(DEST_URL).then(({ data }) => {
      // console.log(data);
      setDest(data);
    });
  }, []);
  return (
    <motion.main
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{ duration: 0.4 }}
      className="
      
        w-full 
        bg-no-repeat
        bg-cover
        bg-center
        bg-destMobile
        md:bg-destTablet 
        lg:bg-destDesktop
        px-4 pt-12 pb-12 grid grid-cols-1 place-items-center gap-28
        md:px-8 md:pt-24
        lg:px-16 lg:grid-cols-2 lg:gap-0 lg:place-content-between
        
  "
    >
      {/* Title */}
      <PageHead pageNum="01" pageTitle=" Pick your destination" />
      {/* Image */}
      <div
        className="
        flex flex-col items-center gap-4 text-center mt-36
        lg:gap-2 lg:text-left 
      "
      >
        <Image activeKey={activeKey} dest={dest} />
      </div>

      {/* Info */}
      <div
        className="
        flex flex-col items-center justify-center gap-12
        lg:mt-44
      "
      >
        <TabMenus
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          dest={dest}
        />
        <TabInfo activeKey={activeKey} dest={dest} />
      </div>
    </motion.main>
  );
};

export default Destination;
