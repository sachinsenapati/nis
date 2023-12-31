import React from 'react'
import StudentMarks from '../components/StudentMarks';
import Navbar2 from '../components/Navbar2';

const ViewAttendence = () => {
    const semestersData = [
      [
        {
          code: "MATH101",
          name: "Math",
          totalClasses: 20,
          attendedClasses: 18,
          percentage: 90,
        },
        {
          code: "SCI101",
          name: "Science",
          totalClasses: 20,
          attendedClasses: 17,
          percentage: 85,
        },
        {
          code: "HIS101",
          name: "History",
          totalClasses: 20,
          attendedClasses: 15,
          percentage: 75,
        },
        // Add more subjects and data as needed for Semester 1
      ],
      [
        {
          code: "ENG101",
          name: "English",
          totalClasses: 22,
          attendedClasses: 20,
          percentage: 91,
        },
        {
          code: "PHY101",
          name: "Physics",
          totalClasses: 22,
          attendedClasses: 18,
          percentage: 82,
        },
        {
          code: "CHEM101",
          name: "Chemistry",
          totalClasses: 22,
          attendedClasses: 19,
          percentage: 86,
        },
        // Add more subjects and data as needed for Semester 2
      ],
      // Add more semesters as needed
    ];
  return (
    <div>
        <Navbar2/>
      <StudentMarks semestersData={semestersData} />
    </div>
  );
}

export default ViewAttendence
