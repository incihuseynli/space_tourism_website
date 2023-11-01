const TabInfo = ({ activeKey, dest }) => {
  return dest.map(({ id, name, description, distance, travel }) => {
    return (
      activeKey === id && (
        <div
          key={id}
          className="
          flex flex-col items-center justify-center gap-24
          slide-in-fwd-bottom
          "
        >
          <div
            className="
            flex flex-col items-center justify-center gap-6 
            border-b-2 border-secondaryGray pb-28 md:pb-12 border-opacity-20
            md:px-8 
            "
          >
            <h1
              className="
              heading3 text-center
              "
            >
              {name}
            </h1>
            <p
              className="
              h-32
              navText text-center text-secondaryGray normal-case
              px-6
              "
            >
              {description}
            </p>
          </div>
          <div
            className="
            w-full -mt-8
            flex flex-col items-center justify-center gap-10
            md:flex-row md:justify-evenly md:mt-8
            "
          >
            <div
              className="
              flex flex-col items-center justify-center gap-4
              "
            >
              <h4
                className="
                navText uppercase text-secondaryGray text-center
                "
              >
                AVG. DISTANCE
              </h4>
              <p
                className="
                heading4
                "
              >
                {distance}
              </p>
            </div>
            <div
              className="
              flex flex-col items-center justify-center gap-4
              "
            >
              <h4
                className="
                navText uppercase text-secondaryGray text-center
                "
              >
                Est. travel time
              </h4>
              <p
                className="
                heading4
                "
              >
                {travel}
              </p>
            </div>
          </div>
        </div>
      )
    );
  });
};

export default TabInfo;
