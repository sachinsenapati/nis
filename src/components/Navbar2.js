import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/nis_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BsCaretRightFill, BsCaretDownFill } from "react-icons/bs";

const Navbar2 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const navmenu = [
    {
      link: "/",
      name: "Academic",
    },
    {
      link: "/adminstrative",
      name: "Administrative",
    },
    {
      link: "/complaint",
      name: "Facility Complaint",
    },
    {
      link: "/desk",
      name: "Student Desk",
      subMenu: [
        {
          link: "/desk/view-attendance",
          name: "View Attendance",
        },
        {
          link: "/desk/view-marks",
          name: "View Internal Marks",
        },
        {
          link: "/desk/view-dues",
          name: "View Dues",
        },
        {
          link: "/desk/view-clearnance",
          name: "View Internal Marks",
        },
      ],
    },
    {
      link: "/handbook",
      name: "Student Handbook",
    },
  ];

  return (
    <>
      <div className="static bg-blue-800 h-7">
        <div className="bg-yellow-500 w-2 h-7"></div>
      </div>
      {/* Mobile Menu */}
      <div className="flex items-center bg-black h-16 p-3 relative">
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
        <img className="max-w-7xl h-16 ml-4" src={logo} alt="" />
        {isMenuOpen && (
          <div className="absolute left-0 top-16 w-3/4 h-screen bg-gray-800 bg-opacity-80 backdrop-blur-md py-2 overflow-y-auto">
            <ul className="pl-4">
              {navmenu.map((menuItem) => (
                <li
                  key={menuItem.name}
                  className={`text-white text-lg py-2 cursor-pointer ${
                    menuItem.name === "Student Desk" && isSubMenuOpen
                      ? "font-bold"
                      : ""
                  }`}
                  onClick={() => {
                    if (menuItem.name === "Student Desk") {
                      toggleSubMenu();
                    } else {
                      toggleMenu();
                    }
                  }}
                >
                  {menuItem.name === "Student Desk" ? (
                    <>
                      {menuItem.name}
                      <span>
                        {isSubMenuOpen ? (
                          <BsCaretDownFill className="inline ml-1" />
                        ) : (
                          <BsCaretRightFill className="inline ml-1" />
                        )}
                      </span>
                    </>
                  ) : (
                    <Link to={menuItem.link}>{menuItem.name}</Link>
                  )}

                  {menuItem.name === "Student Desk" && isSubMenuOpen && (
                    <ul className="pl-4">
                      {menuItem.subMenu.map((subMenuItem) => (
                        <li
                          key={subMenuItem.name}
                          className="text-white text-lg py-2 cursor-pointer"
                        >
                          <Link to={subMenuItem.link}>{subMenuItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar2;
