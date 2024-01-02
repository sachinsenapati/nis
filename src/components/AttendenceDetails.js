import React from "react";
import SemesterAttendence from "./SemesterAttendence";
const AttendenceDetails = ({ semestersData, col }) => {
  const currentSemester = 1;

  return (
    <div>
      {semestersData.map((semester, index) => (
        <SemesterAttendence
          key={index}
          semesterNumber={index + 1}
          attendeceData={semester}
          currentSemester={currentSemester}
          col={col}
        />
      ))}
    </div>
  );
};

export default AttendenceDetails;
