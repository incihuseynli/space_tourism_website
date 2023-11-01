// eslint-disable-next-line react/prop-types
const SliderImage = ({ image }) => {
  return (
    <div
      className="
      order-1 
      lg:order-2
    "
    >
      <img
        className="
        mt-8 mx-4 border-b-2 border-gray-500 border-opacity-30
        lg:border-none md:mx-0 md:mt-0
        lg:mt-16  
    "
        src={image}
        alt=""
      />
    </div>
  );
};

export default SliderImage;
