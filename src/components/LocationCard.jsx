import React from "react";

const LocationCard = ({ name }) => {
  return (
    <div>
      <div className="md:px-[100px] md:py-[25px]  px-[50px] py-3 rounded-lg bg-slate-50 border hover:bg-slate-100 border-gray-300 flex items-center justify-center">
        {name}
      </div>
    </div>
  );
};

export default LocationCard;
