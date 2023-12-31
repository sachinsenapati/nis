import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
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
    <div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        {isMenuOpen === true ? (
          <IoMdClose className="text-3xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
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
    </div>
  );
};

export default Sidebar;
