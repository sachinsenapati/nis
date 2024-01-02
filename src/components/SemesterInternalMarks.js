import React, { useState } from "react";
import { BsCaretDownFill, BsCaretRightFill } from "react-icons/bs";
import MarkDetail from "./MarkDetail";

const SemesterInternalMarks = ({
  semesterNumber,
  marksData,
  currentSemester,
  col,
}) => {
  const isCurrentSemester = semesterNumber === currentSemester;
  const [isExpanded, setIsExpanded] = useState(isCurrentSemester);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-3">
      <div className="th-bg border-b-4 border-white text-white p-2 font-bold flex items-center">
        <div
          onClick={handleToggleExpand}
          className="cursor-pointer mr-2 text-lg sm:text-xl"
        >
          {isExpanded ? <BsCaretDownFill /> : <BsCaretRightFill />}
        </div>
        Semester: {semesterNumber}
      </div>

      {isExpanded && (
        <>
          <div className="hidden sm:grid grid-cols-5 gap-0 text-xs">
            {col.map((column, index) => (
              <div key={index} className="p-2 border-r border-white">
                {column}
              </div>
            ))}
          </div>

          {marksData.map((subject, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "tr-e-bg" : "tr-o-bg"
              } sm:grid grid-cols-5 gap-0 text-xs`}
            >
              <div className="hidden sm:grid p-2 border-r border-white">
                {index + 1}
              </div>
              <div className="p-2 border-r border-white">{subject.name}</div>
              <div className="p-2 border-r border-white">{subject.code}</div>
              <div className="p-2 border-r border-white">{subject.type}</div>
              <div className="p-2">
                <MarkDetail marks={subject.testDetails} />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SemesterInternalMarks;
