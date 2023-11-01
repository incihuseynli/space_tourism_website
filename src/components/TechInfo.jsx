const TechInfo = ({ activeKey, techData }) => {
  return techData.map(({ id, name, description }) => {
    return (
      activeKey === id && (
        <div
          key={id}
          className="
          flex flex-col items-center gap-4
          order-2 -mt-24 px-4
          md:px-8
          lg:mt-14 lg:items-start lg:order-1
          text-white slide-in-fwd-bottom
          "
        >
          <span
            className="
            bodyText text-secondaryGray uppercase
            "
          >
            THE TERMINOLOGY…
          </span>
          <h1 className="heading3 text-center lg:text-left">{name}</h1>
          <p
            className="
            bodyText text-secondaryGray font-normal 
            text-center
            lg:w-4/5 lg:text-left
            "
          >
            {description}
          </p>
        </div>
      )
    );
  });
};

export default TechInfo;
