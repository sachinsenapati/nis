// StudentMarks.js
import React from "react";
import SemesterAttendence from "./SemesterAttendence";

const StudentDetails = ({ semestersData }) => {
    const currentSemester = 1;

  return (
    <div>
      {semestersData.map((semester, index) => (
        <SemesterAttendence
          key={index}
          semesterNumber={index + 1}
          attendeceData={semester}
          currentSemester={currentSemester}
        />
      ))}
    </div>
  );
};

export default StudentDetails;
