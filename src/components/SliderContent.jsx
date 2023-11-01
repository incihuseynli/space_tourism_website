import SliderImage from "./SliderImage";
import SliderInfo from "./SliderInfo";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const SliderContent = () => {
  const [crew, setCrew] = useState([]);
  const getData = () => {
    Axios.get("https://my-json-server.typicode.com/incihuseynli/Db/crew").then(
      ({ data }) => {
        // console.log(data);
        setCrew(data);
      }
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper
      lg:mt-12
    "
    >
      {crew.map(({ id, name, role, image, bio }) => {
        return (
          <>
            <SwiperSlide key={id} className="w-full 
            pb-12">
              <div
                className="
                    w-full h-full
                    flex flex-col items-center
                    lg:flex-row 
            "
              >
                <SliderInfo role={role} name={name} bio={bio} />
                <SliderImage image={image} />
              </div>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

export default SliderContent;
