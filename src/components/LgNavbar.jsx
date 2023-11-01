import { NavLink } from "react-router-dom";
import { paths } from "../components/Paths";

const LgNavbar = () => {
  return (
    <div
      className="hidden w-full
            lg:flex flex-row items-center justify-between lg:pl-16
            md:flex md:pl-8"
    >
      <div className="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <ul
        className="
            h-24 lg:px-32 lg:mt-2 md:px-16 md:-mt-6
            flex flex-row items-center gap-8
            bg-bgBlur  backdrop-blur-2xl
             -mr-4  relative 
          "
      >
        <hr
          className=" md:hidden lg:block
          absolute -left-80
          w-96 rotate-180  border border-b-secondaryGray-1 opacity-20
        "
        />

        {paths.map(({ id, path, title }) => {
          return (
            <NavLink
              key={id}
              to={path}
              className="flex items-center gap-2 navText -mb-8 pb-8 transition-all
               hover:border-b-4 hover:border-b-secondaryGray hover:border-opacity-40
              "
            >
              <span className="font-bold md:hidden lg:block">0{id}</span>
              <span className="">{title}</span>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default LgNavbar;
