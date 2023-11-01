import LgNavbar from "./LgNavbar";
import SmNavbar from "./SmNavbar";

const Header = () => {
  return (
    <header
      className="
        py-6 px-4  w-full absolute
    "
    >
      <SmNavbar />
      <LgNavbar />
    </header>
  );
};

export default Header;
