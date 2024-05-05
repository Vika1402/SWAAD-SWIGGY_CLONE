import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Card from "./Card";
const TopRest = () => {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    console.log("hello");
    if (data.length - 5 == slide) return false;
    setSlide(slide + 1);
  };
  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 1);
  };
  const fetchTopResaurant = async () => {
    const res = await fetch("http://localhost:5000/top-restaurant-chains");
    const api_data = await res.json();
    setData(api_data);
  };
  useEffect(() => {
    fetchTopResaurant();
  }, []);

  return (
    <div className="nav max-w-[1240px] mx-auto items-center gap-3 ">
      <div className="flex w-full justify-between my-3">
        <div className="text-[27px] font-bold">Whats on your mind ?</div>
        <div className="flex gap-2">
          <div className="flex cursor-pointer justify-center items-center  w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            {" "}
            <FaArrowLeft onClick={prevSlide} />
          </div>
          <div className=" flex cursor-pointer justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight onClick={nextSlide} />
          </div>
        </div>
      </div>
      <div className="flex gap-2 overflow-hidden  duration-500 "   > 
        {data.map((d, i) => {
          return <Card {...d} key={i}  />;
        })}
      </div>
      <hr className="my-6 border-[3px]" />
    </div>
  );
};

export default TopRest;
