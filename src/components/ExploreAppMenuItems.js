import React from "react";

const ExploreAppMenuItems = ({ index, activeLink, handleClick, text }) => (
  <li className="explore-menu ">
    <button
      className={`text-[#999] text-[1.667vw] font-[700] cursor-pointer explore-menu-font events-menu-font ${
        activeLink === index ? "text-[#FFA500]" : ""
      }`}
      onClick={() => handleClick(index)}
    >
      {text}
    </button>
  </li>
);

export default ExploreAppMenuItems;
