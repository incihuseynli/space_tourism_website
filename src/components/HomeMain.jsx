import { NavLink } from "react-router-dom";

const HomeMain = () => {
  return (
    <main
      className="
        w-full h-100
        bg-no-repeat 
        bg-cover
        bg-center
        bg-homeMobile
        md:bg-homeTablet 
        lg:bg-homeDesktop
        px-4 pt-12 pb-4 grid grid-cols-1 place-items-center gap-28
        md:px-8 md:pt-24
        lg:px-16 lg:grid-cols-2 lg:gap-0 lg:place-content-between
      "
    >
      <div
        className="
        flex flex-col items-center gap-4 text-center mt-36
        lg:gap-2 lg:text-left 
      "
      >
        <h4 className="heading5 text-lg md:text-2xl lg:text-left lg:-ml-16">
          SO, YOU WANT TO TRAVEL TO
        </h4>
        <h1
          className="heading2 uppercase my-4 md:heading1 md:my-6 
        lg:my-0 lg:text-left"
        >
          Space
        </h1>
        <p className="bodyText text-secondaryGray px-4 md:px-24 lg:-mt-4">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <NavLink
        to="/destination"
        className="
        w-36 h-36 rounded-full bg-primaryWhite text-center px-2 
        pt-14 -mt-16 md:-mt-6
        subheading1 text-primaryBlack lg:w-48 lg:h-48 lg:pt-20 lg:mt-36 transition-all duration-1000
        hover:shadow-btnShadow hover:-translate-y-2
      "
      >
        Explore
      </NavLink>
    </main>
  );
};

export default HomeMain;
