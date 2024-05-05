import React from "react";
import { MdStars } from "react-icons/md";
const Card = (props) => {
  return (
    <div className="w-full md:w-[273px] shrink-0 mb-3">
      <div className=" group h-[182px] rounded-[15px] overflow-hidden relative">
        <img
          className=" duration-150  w-full h-full object-cover group-hover:scale-110 "
          src={"http://localhost:5000/images/" + props.image}
          alt=""
        />
        <div className="image-overlay  w-full h-full top-0 absolute flex items-end p-2 text-[25px] font-bold text-white tracking-tighter">
          {props.offer}
        </div>
      </div>
      <div className="mt-2 md:text-xl texl-md font-bold">{props.title}</div>
      <div className="md:text-xl text-md flex items-center">
        <MdStars className="inline text-green-600 text-2xl" />
        {props.rating}{" "}
        <span className="ml-3">
          {props.minTime}-{props.maxTime} min
        </span>
      </div>
      <div className="text-lg text-slate-400">
        {props.name}
        <br />
        {props.place}
      </div>
    </div>
  );
};

export default Card;
