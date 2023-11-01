const TechImage = ({ activeKey, techData }) => {
  return techData.map(({ id, image, name }) => {
    return (
      activeKey === id && (
        <div
          key={id}
          className="
          w-full slide-in-fwd-bottom 
          order-1 
          lg:relative  lg:w-96 h-96 
          lg:oder-2
          "
        >
          <img
            className="w-full h-full 
            object-fill lg:object-cover 
            lg:absolute lg:-right-24"
            src={image}
            alt={name + "Image"}
          />
        </div>
      )
    );
  });
};

export default TechImage;
