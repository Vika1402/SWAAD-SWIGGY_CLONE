import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Card from "./Card";
const TopRest = () => {
  const [data, setData] = useState([]);

  const fetchTopResaurant = async () => {
    const res = await fetch("http://localhost:5000/top-restaurant-chains");
    const api_data = await res.json();
    setData(api_data);
  };
  useEffect(() => {
    fetchTopResaurant();
  }, []);

  return (
    <div className="nav max-w-[1240px] mx-auto items-center gap-3">
      <div className="flex w-full justify-between my-3">
        <div className="text-[27px] font-bold">Whats on your mind ?</div>
        <div className="flex gap-2">
          <div className="flex cursor-pointer justify-center items-center  w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            {" "}
            <FaArrowLeft />
          </div>
          <div className=" flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight />
          </div>
        </div>
       
       
      </div>
      <div className="flex">
          <Card />
        </div>
      
    </div>
  );
};

export default TopRest;
