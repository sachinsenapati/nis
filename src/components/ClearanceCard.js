import React from 'react'

const ClearanceCard = ({col,details}) => {
  return (
    <div>
      <div className="th-bg border-b-2 border-white text-white grid grid-cols-6 gap-0 text-xs">
        {col.map((column) => (
          <div className="p-2 border-r border-white">{column}</div>
        ))}
      </div>
      {details.map((detail, index) => (
        <div
          key={index}
          className={`${
            index % 2 === 0 ? "tr-e-bg" : "tr-o-bg"
          } border-white grid grid-cols-6 gap-0 text-xs`}
        >
          <div className="p-2 border-r border-white">{index + 1}</div>
          <div className="p-2 border-r border-white">{detail.Category}</div>
          <div className="p-2 border-r border-white">{detail.AmountDue}</div>
          <div className="p-2 border-r border-white">{detail.Cleared}</div>
          <div className="p-2 border-r border-white">{detail.ClearedBy}</div>
          <div className="p-2 border-r border-white">{detail.clearedOn}</div>
        </div>
      ))}
    </div>
  );
}

export default ClearanceCard
