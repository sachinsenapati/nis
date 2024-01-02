import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navmenu = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/restaurants",
      name: "Restaurants",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ];

  return (
    <nav className="flex items-center justify-between h-16 md:h-20 px-5 lg:px-[70px]  ">
      <div className="flex items-center"></div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {isMenuOpen === true ? (
          <IoMdClose
            className="text-3xl text-white cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <GiHamburgerMenu
            className="text-2xl text-white cursor-pointer"
            onClick={toggleMenu}
          />
        )}
        {isMenuOpen && (
          <ul className="absolute h-80 top-16 left-0 right-0 flex flex-col justify-evenly items-center bg-white shadow-md pb-5 z-20 ">
            {navmenu.map((menu) => {
              return <li key={menu.name}>{menu.name}</li>;
            })}
          </ul>
        )}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-12 menu">
        {navmenu.map((menu, idx) => {
          return (
            <li key={idx}>
              <Link to={menu.link}></Link>
              {menu.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
