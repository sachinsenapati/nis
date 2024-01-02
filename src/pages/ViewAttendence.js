import React from "react";
import Navbar2 from "../components/Navbar2";
import AttendenceDetails from "../components/AttendenceDetails";

const ViewAttendence = () => {
  const semestersData = [
    [
      {
        code: "19CSPC02T",
        name: "Compiler Design",
        totalClasses: 19,
        attendedClasses: 15,
        percentage: 79,
      },
      {
        code: "19CSPC02T",
        name: "Human Computer Interaction",
        totalClasses: 20,
        attendedClasses: 17,
        percentage: 85,
      },
      {
        code: "19CSPC02T",
        name: "Industrial Waste Management and Disposal",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Industrial Waste Management and Disposal",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Software Project Management",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Web Technology",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Compiler Design Lab",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Entrepreneurship Project",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Summer Intership/ Training/ Mooc Certification",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Web Techonology Lab",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      // Add more subjects and data as needed for Semester 1
    ],
    [
      {
        code: "19CSPC02T",
        name: "Compiler Design",
        totalClasses: 19,
        attendedClasses: 15,
        percentage: 79,
      },
      {
        code: "19CSPC02T",
        name: "Human Computer Interaction",
        totalClasses: 20,
        attendedClasses: 17,
        percentage: 85,
      },
      {
        code: "19CSPC02T",
        name: "Industrial Waste Management and Disposal",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Industrial Waste Management and Disposal",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Software Project Management",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Web Technology",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Compiler Design Lab",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Entrepreneurship Project",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Summer Intership/ Training/ Mooc Certification",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      {
        code: "19CSPC02T",
        name: "Web Techonology Lab",
        totalClasses: 20,
        attendedClasses: 15,
        percentage: 75,
      },
      // Add more subjects and data as needed for Semester 1
    ],
    // Add more semesters as needed
  ];
  const col = [
    "Course Code",
    "Course Name",
    "Total Classes",
    "Classes Attended",
    "Percentage",
  ];
  return (
    <div>
      <Navbar2 />
      <AttendenceDetails semestersData={semestersData} col={col} />
    </div>
  );
};

export default ViewAttendence;
