import React from "react";
import Navbar2 from "../components/Navbar2";
import ClearanceCard from "../components/ClearanceCard";

const ViewClearance = () => {
  const details = [
    {
      Category: "Academic",
      AmountDue: 157000,
      Cleared: true,
      ClearedBy: "bibek",
      clearedOn: "10-11-2023",
    },
    {
      Category: "Mess",
      AmountDue: 157000,
      Cleared: true,
      ClearedBy: "bibek",
      clearedOn: "10-11-2023",
    },
    {
      Category: "Mess Old",
      AmountDue: 157000,
      Cleared: true,
      ClearedBy: "bibek",
      clearedOn: "10-11-2023",
    },
  ];
  const col = [
    "Sl#",
    "Category Name",
    "Amount Due (Rs.)",
    "Cleared",
    "Cleared By",
    "Cleared On",
  ];

  return (
    <>
      <Navbar2 />
      <div className="p-4 md:p-8 lg:p-12">
        <div className="tr-o-bg p-4 md:p-8 lg:p-12 rounded-md mb-4">
          <p className="text-lg font-semibold">Name: Sachin Kumar Senapati</p>
          <p className="text-lg font-semibold">Batch: 2020</p>
          <p className="text-lg font-semibold">Degree-Branch: BTech CSE</p>
          <p className="text-lg font-semibold">Semester Number: 7</p>
        </div>
        <p className="text-orange-600 font-bold text-sm py-2">
          Batch Coordinator has not given clearance
        </p>
        <ClearanceCard col={col} details={details} />
      </div>
    </>
  );
};

export default ViewClearance;
