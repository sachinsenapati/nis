// Semester.js
import React, { useState } from "react";
import { BsCaretDownFill, BsCaretRightFill } from "react-icons/bs";

const SemesterAttendence = ({
  semesterNumber,
  attendeceData,
  currentSemester,
  col
}) => {
  const isCurrentSemester = semesterNumber === currentSemester;
  const [isExpanded, setIsExpanded] = useState(isCurrentSemester);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-3">
      <div className="th-bg border-b-4 border-white text-white p-2 font-bold flex items-center">
        <div onClick={handleToggleExpand} className="cursor-pointer mr-2">
          {isExpanded ? <BsCaretDownFill /> : <BsCaretRightFill />}
        </div>
        Semester: {semesterNumber}
      </div>

      {isExpanded && (
        <>
          <div className="th-bg border-b-2 border-white text-white grid grid-cols-5 gap-0 text-xs">
            {col.map((column) => (
              <div className="p-2 border-r border-white">{column}</div>
            ))}
          </div>

          {attendeceData.map((subject, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "tr-e-bg" : "tr-o-bg"
              } border-b-2 border-white grid grid-cols-5 gap-0 text-xs`}
            >
              <div className="p-2 border-r border-white">{subject.code}</div>
              <div className="p-2 border-r border-white">{subject.name}</div>
              <div className="p-2 border-r border-white">
                {subject.totalClasses}
              </div>
              <div className="p-2 border-r border-white">
                {subject.attendedClasses}
              </div>
              <div className="p-2">{subject.percentage}%</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SemesterAttendence;
