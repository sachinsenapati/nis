// StudentMarks.js
import React from "react";
import SemesterInternalMarks from "./SemesterInternalMarks";

const InternalMarksDetails = ({ semestersData, col }) => {
  const currentSemester = 1;

  return (
    <div>
      {semestersData.map((semester, index) => (
        <SemesterInternalMarks
          key={index}
          semesterNumber={index + 1}
          marksData={semester}
          currentSemester={currentSemester}
          col={col}
        />
      ))}
    </div>
  );
};

export default InternalMarksDetails;
