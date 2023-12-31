import { useState } from "react";
import logo from "../assests/nis_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Navbar2 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navmenu = [
    {
      link: "/",
      name: "Academic",
    },
    {
      link: "/adminstrative",
      name: "Adminstrative",
    },
    {
      link: "/complaint",
      name: "Facility Complaint",
    },
    {
      link: "/desk",
      name: "Student Desk",
    },
    {
      link: "/handbook",
      name: "Student HandBook",
    },
  ];
  return (
    <>
      <div className="static bg-blue-800 h-7">
        <div className="bg-yellow-500 w-2 h-7"></div>
      </div>
      {/* // Mobile Menu */}
      <div className="flex justify-end items-center bg-black h-16 p-3">
        {isMenuOpen === true ? (
          <IoMdClose
            className="absolute left-2 text-3xl text-white cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <GiHamburgerMenu
            className="absolute left-2 text-2xl text-white cursor-pointer"
            onClick={toggleMenu}
          />
        )}
        <img className="max-w-7xl h-16" src={logo} alt="" />
        {isMenuOpen && (
            <div className="absolute w-3/4 top-24 inset-0 z-50 bg-gray-800 bg-opacity-30 backdrop-blur-md">
                <ul className="absolute h-80 top-10 w-44 flex flex-col justify-evenly items-center ">
            {navmenu.map((menu) => {
              return <li key={menu.name} className="text-white text-xl">{menu.name}</li>;
            })}
          </ul>
            </div>
          
        )}
      </div>
    </>
  );
};

export default Navbar2;