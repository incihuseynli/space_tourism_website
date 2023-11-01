/* eslint-disable react/prop-types */
const SliderInfo = ({ role, name, bio }) => {
  console.log(role);
  return (
    <div
      className="
      w-full pl-6 pt-10 text-center px-4 lg:pt-12 flex flex-col gap-4 items-center
      lg:items-start order-2 lg::order-1 lg:text-left
  "
    >
      <h4 className="navText lg:heading4 opacity-40">{role}</h4>
      <h1
        className="subheading1
      lg:heading3
      "
      >
        {name}
      </h1>
      <p
        className="bodyText text-secondaryGray font-normal 
        text-center
        md:pl-2 md:w-[60%]
        lg:text-left
      "
      >
        {bio}
      </p>
    </div>
  );
};

export default SliderInfo;
