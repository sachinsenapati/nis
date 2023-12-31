// StudentMarks.js
import React from "react";
import Semester from "./Semester";

const StudentMarks = ({ semestersData }) => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Student Marks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
        {semestersData.map((semester, index) => (
          <Semester
            key={index}
            semesterNumber={index + 1}
            marksData={semester}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentMarks;
