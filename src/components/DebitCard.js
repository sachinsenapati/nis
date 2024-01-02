import React from "react";

const DebitCard = ({ col, details }) => {
  return (
    <div>
      <div className="th-bg border-b-2 border-white text-white grid grid-cols-4 gap-0 text-xs">
        {col.map((column) => (
          <div className="p-2 border-r border-white">{column}</div>
        ))}
      </div>
      {details.map((detail, index) => (
        <div
          key={index}
          className={`${
            index % 2 === 0 ? "tr-e-bg" : "tr-o-bg"
          } border-white grid grid-cols-4 gap-0 text-xs`}
        >
          <div className="p-2 border-r border-white">{detail.date}</div>
          <div className="p-2 border-r border-white">{detail.debitAmount}</div>
          <div className="p-2 border-r border-white">{detail.creditAmount}</div>
          <div className="p-2 border-r border-white">{detail.Narration}</div>
        </div>
      ))}
    </div>
  );
};

export default DebitCard;
