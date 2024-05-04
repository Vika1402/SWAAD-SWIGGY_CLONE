import React, { useState } from "react";
import logo from "../assets/swiggyLogo.svg";
import { IoIosArrowDown, IoIosCart, IoMdHelp, IoMdLogIn } from "react-icons/io";
import {
  FaLocationArrow,
  FaMoneyBill,
  FaSearch,
  FaSign,
  FaSignature,
} from "react-icons/fa";
const Header = () => {
  const [open, setOpen] = useState(false);
  const showSidemenu = () => {
    console.log(`high`);
    setOpen(true);
  };
  const hideOpen = () => {
    setOpen(false);
  };
  //use react function make a lisk and use
  const links = [
    {
      icon: <FaSearch />,
      name: "Search",
    },
    {
      icon: <FaMoneyBill />,
      name: "Offers ",
      sup:"new"
    },
    {
      icon: <IoMdHelp />,
      name: "Help",
    },
    {
      icon: <IoMdLogIn />,
      name: "SignIn",
    },
    {
      icon: <IoIosCart />,
      name: "Cart",
      sup:'(0)'
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full
         h-full fixed duration-500 "
        onClick={hideOpen}
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px]   bg-white h-full absolute  duration-500"
          style={{ left: open ? "0%" : "-100%" }}
        ></div>
      </div>
      <header className="p-5 shadow-xl ">
        <div className="nav max-w-[1240px] mx-auto flex items-center gap-3">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div>
            <span className="font-bold font-gray-800">
              <FaLocationArrow className="inline text-red-500 text-xl mx-2" />
            </span>
            Raipur Rani, Haryana 134204, India{" "}
            <IoIosArrowDown
              onClick={showSidemenu}
              className="inline text-red-500 mx-1 text-2xl cursor-pointer"
            />
          </div>
          <nav className="flex list-none gap-7 ml-auto  text-[18px]">
            {/* index is usefor key value Pair  uniquly identify  */}
            {links.map((link, index) => {
              return (
                <li className="flex items-center gap-2 hover:text-orange-500 duration-500">
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
