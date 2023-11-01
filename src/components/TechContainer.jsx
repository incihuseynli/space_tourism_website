import TechInfo from "./TechInfo";
import TechImage from "./TechImage";
import { useEffect, useState } from "react";
import axios from "axios";
const TECH_URL =
  "https://my-json-server.typicode.com/incihuseynli/Db/technology";
const TechContainer = () => {
  const [techData, setTechData] = useState([]);
  const [activeKey, setActiveKey] = useState(
    (techData.id = 1 || (techData.length > 0 ? techData[0].id : ""))
  );
  console.log(techData[0]);
  useEffect(() => {
    axios.get(TECH_URL).then(({ data }) => {
      // console.log(data);
      setTechData(data);
    });
  }, []);
  return (
    <div
      className="
        text-white 
        w-full  mt-16 grid grid-cols-1
        lg:mt-20
        lg:grid-cols-custom1 gap-28 lg:px-8 
    "
    >
      <div
        className="
        w-full flex justify-center
        lg:flex-col items-center gap-6
        lg:mt-20 
      "
      >
        {techData.map(({ id }) => {
          return (
            <div
              key={id}
              className={`cursor-pointer
              w-12 h-12 text-center py-1
              heading4 border border-secondaryGray
              border-opacity-40  rounded-full hover:bg-slate-800
              hover:text-white transition-all duration-1000 
              ${activeKey === id ? "active" : ""}`}
              onClick={() => setActiveKey(id)}
            >
              {id}
            </div>
          );
        })}
      </div>
      <div
        className="
        grid grid-cols-1 gap-44 
        place-items-center -mt-14
        lg:grid-cols-custom2 lg:gap-0
        lg:place-content-start lg:mt-14
      "
      >
        <TechInfo activeKey={activeKey} techData={techData} />
        <TechImage activeKey={activeKey} techData={techData} />
      </div>
    </div>
  );
};

export default TechContainer;
