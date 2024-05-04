import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const Category = () => {
  const [slide, setSlide] = useState(0);
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const res = await fetch("http://localhost:5000/categories");
    const data = await res.json("");
    setCategories(data);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const nextSlide = () => {
    console.log(categories);
    if(categories.length-8 ==slide)return false;
    setSlide(slide + 3);
  };
  const prevSlide = () => {
    if(slide==0)return false;
    setSlide(slide - 3);
  };
  return (
    <div className="nav max-w-[1240px] mx-auto items-center gap-3">
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
      <div className="flex overflow-hidden ">
        {categories.map((cat, index) => {
          return (
            <div
              key={index}
              className="w-[150px] shrink-0  duration-500"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              <img
                className=""
                src={"http://localhost:5000/images/" + cat.image}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-[3px]" />
    </div>
  );
};

export default Category;
