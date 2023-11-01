import { useState } from "react";
import { NavLink } from "react-router-dom";
import { paths } from "./Paths";

const SmNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="
      flex flex-row items-center justify-between
      md:hidden lg:hidden
    "
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
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {!isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        ) : (
          ""
        )}
      </div>
      {isOpen && (
        <div
          className="
          w-2/3 h-full fixed top-0 right-0 
          bg-bgBlur  backdrop-blur-2xl py-12 px-6
          transition-all duration-700 z-20 shadow-shadowSM
      "
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer absolute right-5 top-9"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </div>
          <ul
            className="
            mt-16 flex flex-col items-start gap-8
          "
          >
            {paths.map(({ id, path, title }) => {
              return (
                <NavLink
                  key={id}
                  to={path}
                  className="flex items-center gap-2 navText"
                >
                  <span className="font-bold">0{id}</span>
                  <span className="">{title}</span>
                </NavLink>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SmNavbar;
