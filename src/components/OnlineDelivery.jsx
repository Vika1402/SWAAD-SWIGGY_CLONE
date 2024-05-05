import React, { useEffect, useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";
const OnlineDelivery = () => {
  const [data, setData] = useState([]);

  const fetchTopResaurant = async () => {
    const res = await fetch("http://localhost:5000/top-restaurant-chains");
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    fetchTopResaurant();
  }, []);

  return (
    <div className="nav max-w-[1240px] mx-auto items-center gap-3 ">
      <div className="flex w-full justify-between my-3">
        <div className="text-[27px] font-bold">
          Resturant with online food delivery{" "}
        </div>
        
      </div>
      <div>
          <div className="max-w-[1200px] mx-auto flex my-4 justify-evenly">
            <div className="p-3 rounded-full bg-slate-200">Filter</div>
            <div className="p-3 rounded-full bg-slate-200">Sort By
</div>
            <div className="p-3 rounded-full bg-slate-200">Fast Delivery</div>
            <div className="p-3 rounded-full bg-slate-200">New on Swiggy</div>
            <div className="p-3 rounded-full bg-slate-200">Rating 4.0+</div>

          </div>
        </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-3 py-1">
        {data.map((d, i) => {
          return <Card {...d} key={i} />;
        })}
      </div>
      <hr className="my-6 border-[3px]" />
    </div>
  );
};

export default OnlineDelivery;
