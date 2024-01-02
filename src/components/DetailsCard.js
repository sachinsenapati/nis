const DetailsCard = ({ name,details }) => {
  return (
    <div className="py-2">
      <div className="th-bg border-b-4 border-white text-white p-2 font-bold flex items-center">
        {name}
      </div>
      {Array.isArray(details)
        ? details.map((detail, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "tr-e-bg" : "tr-o-bg"
              } grid grid-cols-5 gap-2  font-bold `}
            >
              <div className="col-span-1 border-r border-white p-2">
                {index + 1}
              </div>
              <div className="col-span-4 p-2">{detail}</div>
            </div>
          ))
        : typeof details === 'object' && details !== null
          ? Object.entries(details).map(([key, value], index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "tr-e-bg" : "tr-o-bg"
                } grid grid-cols-5 gap-2  font-bold `}
              >
                <div className="col-span-1 border-r border-white p-2">{key}</div>
                <div className="col-span-4 p-2">{value}</div>
              </div>
            ))
          : null
      }
    </div>
  );
};

export default DetailsCard;
