import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BsCaretRightFill, BsCaretDownFill } from "react-icons/bs";

import logo from "../assests/nis_logo.png";
import studentHandbook from "../assests/StudentHandbookR2.1.pdf";

const Navbar2 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isStudentDeskSubMenuOpen, setStudentDeskSubMenuOpen] = useState(false);
  const [isAcademicSubMenuOpen, setAcademicSubMenuOpen] = useState(false);
  const [isAdministrativeSubMenuOpen, setAdministrativeSubMenuOpen] =
    useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleStudentDeskSubMenu = () => {
    setStudentDeskSubMenuOpen(!isStudentDeskSubMenuOpen);
  };

  const toggleAcademicSubMenu = () => {
    setAcademicSubMenuOpen(!isAcademicSubMenuOpen);
  };

  const toggleAdministrativeSubMenu = () => {
    setAdministrativeSubMenuOpen(!isAdministrativeSubMenuOpen);
  };

  const openStudentHandbook = () => {
    window.open(studentHandbook, "_blank");
    toggleMenu();
  };

  const navmenu = [
    {
      link: "/",
      name: "Academic",
      onClick: toggleAcademicSubMenu,
      subMenu: [
        {
          link: "/academic/elective-course",
          name: "Elective Course",
        },
        {
          link: "/academic/final-exam",
          name: "Final Exam",
        },
        {
          link: "/academic/knowledge-assessment",
          name: "Knowledge Assessment",
        },
        {
          link: "/academic/library-information-system",
          name: "Library Information System",
        },
        {
          link: "/academic/online-feedback-system",
          name: "Online Feedback System",
        },
      ],
    },
    {
      link: "/adminstrative",
      name: "Administrative",
      onClick: toggleAdministrativeSubMenu,
      subMenu: [
        {
          link: "/administrative/grievance-call",
          name: "Grievance Call",
        },
        {
          link: "/administrative/internship-management",
          name: "Internship Management System",
        },
        {
          link: "/administrative/project-management",
          name: "Project Management System",
        },
      ],
    },
    {
      link: "/complaint",
      name: "Facility Complaint",
    },
    {
      link: "/desk",
      name: "Student Desk",
      onClick: toggleStudentDeskSubMenu,
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
          name: "View Clearance Details",
        },
      ],
    },
    {
      name: "Student Handbook",
      onClick: openStudentHandbook,
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
                    (menuItem.name === "Student Desk" &&
                      isStudentDeskSubMenuOpen) ||
                    (menuItem.name === "Academic" && isAcademicSubMenuOpen) ||
                    (menuItem.name === "Administrative" &&
                      isAdministrativeSubMenuOpen)
                      ? "font-bold"
                      : ""
                  }`}
                  onClick={() => {
                    if (menuItem.name === "Student Desk") {
                      toggleStudentDeskSubMenu();
                    } else if (menuItem.name === "Academic") {
                      toggleAcademicSubMenu();
                    } else if (menuItem.name === "Administrative") {
                      toggleAdministrativeSubMenu();
                    } else {
                      toggleMenu();
                    }
                    menuItem.onClick && menuItem.onClick();
                  }}
                >
                  {menuItem.name === "Student Desk" ||
                  menuItem.name === "Academic" ||
                  menuItem.name === "Administrative" ? (
                    <>
                      {menuItem.name}
                      <span>
                        {menuItem.name === "Student Desk" &&
                        isStudentDeskSubMenuOpen ? (
                          <BsCaretDownFill className="inline ml-1" />
                        ) : menuItem.name === "Academic" &&
                          isAcademicSubMenuOpen ? (
                          <BsCaretDownFill className="inline ml-1" />
                        ) : menuItem.name === "Administrative" &&
                          isAdministrativeSubMenuOpen ? (
                          <BsCaretDownFill className="inline ml-1" />
                        ) : (
                          <BsCaretRightFill className="inline ml-1" />
                        )}
                      </span>
                    </>
                  ) : (
                    <span
                      onClick={() => menuItem.onClick && menuItem.onClick()}
                      style={{ cursor: "pointer" }}
                    >
                      {menuItem.name}
                    </span>
                  )}

                  {((menuItem.name === "Student Desk" &&
                    isStudentDeskSubMenuOpen) ||
                    (menuItem.name === "Academic" && isAcademicSubMenuOpen) ||
                    (menuItem.name === "Administrative" &&
                      isAdministrativeSubMenuOpen)) && (
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
