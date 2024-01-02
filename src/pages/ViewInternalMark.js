import React from "react";
import Navbar2 from "../components/Navbar2";
import InternalMarksDetails from "../components/InternalMarksDetails";

const ViewInternalMarks = () => {
  const semestersData = [
    [
      {
        name: "Industrial waste Management and Disposal",
        code: "19CSPC02T",
        type: "Theory",
        testDetails: [
          { testName: "Mid Tem", marks: "30/30", finalMarks: "30/30" },
          { testName: "Attendence", marks: "43/100", finalMarks: 85 },
          { testName: "Surprize Test", marks: "43/100", finalMarks: 85 },
          { testName: "Assignment 1", marks: "43/100", finalMarks: 85 },
          { testName: "Assignment 2", marks: "43/100", finalMarks: 85 },
          { testName: "Quiz-1", marks: "43/100", finalMarks: 85 },
          { testName: "Quiz-2", marks: "43/100", finalMarks: 85 },
          // Add more test details as needed
        ],
      },
      {
        name: "Course 2",
        code: "COURSE2",
        type: "Type B",
        testDetails: [
          { testName: "Test 1", marks: 85, finalMarks: 92 },
          { testName: "Test 2", marks: 78, finalMarks: 88 },
          // Add more test details as needed
        ],
      },
      // Add more courses for Semester 1
    ],
    [
      {
        name: "Course 3",
        code: "COURSE3",
        type: "Type C",
        testDetails: [
          { testName: "Test 1", marks: 92, finalMarks: 94 },
          { testName: "Test 2", marks: 88, finalMarks: 90 },
          // Add more test details as needed
        ],
      },
      {
        name: "Course 4",
        code: "COURSE4",
        type: "Type A",
        testDetails: [
          { testName: "Test 1", marks: 78, finalMarks: 85 },
          { testName: "Test 2", marks: 80, finalMarks: 88 },
          // Add more test details as needed
        ],
      },
      // Add more courses for Semester 2
    ],
    // Add more semesters as needed
  ];

  const col = [
    "Sl #",
    "Course Name",
    "Course Code",
    "Course Type",
    "Marks Details",
  ];

  return (
    <div>
      <Navbar2 />
      <InternalMarksDetails semestersData={semestersData} col={col} />
    </div>
  );
};

export default ViewInternalMarks;
