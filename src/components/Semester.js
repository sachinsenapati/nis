// Semester.js
import React from "react";

const Semester = ({ semesterNumber, marksData }) => {
  return (
    <div className="mb-8 w-5">
      <table className="min-w-full sm:table-auto">
        <thead>
          <tr>
            <th className="bg-gray-200 border px-2 py-1">Subject Code</th>
            <th className="bg-gray-200 border px-2 py-1">Subject Name</th>
            <th className="bg-gray-200 border px-2 py-1">Total Classes</th>
            <th className="bg-gray-200 border px-2 py-1">Classes Attended</th>
            <th className="bg-gray-200 border px-2 py-1">Percentage</th>
          </tr>
        </thead>
       
      </table>
    </div>
  );
};

export default Semester;
