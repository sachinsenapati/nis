import React from "react";

const MarkDetail = ({ marks }) => {
  return (
    <>
      <div className="th-bg p-2 grid grid-cols-3 gap-2 text-xs text-white font-bold">
        <div className="text-center">Test Name</div>
        <div className="text-center">Marks</div>
        <div className="text-center">Final Marks</div>
      </div>
      {marks.map((mark, index) => (
        <div key={index} className="grid grid-cols-3 gap-2 text-xs">
          <div className="p-2 border-r border-white">{mark.testName}</div>
          <div className="p-2 border-r border-white">{mark.marks}</div>
          <div className="p-2">{mark.finalMarks}</div>
        </div>
      ))}
    </>
  );
};

export default MarkDetail;
