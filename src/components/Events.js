import React from "react";

const Events = () => {
  return (
    <div className="w-full h-full bg-[var(--background-color)] flex flex-col justify-center items-center mb-[-3.5%] container-p">
      <div className="w-full ">
        <div className="w-auto h-auto text-center text-margin md:mt-[90px] md:mx-[11.8vw]">
          <h1 className="text-[4.9vw] text-transparent text-center text-shadow font-bold bg-clip-text bg-gradient-to-r from-[#FFF] to-[#AFAFAF] text-size">
            Build your social Galaxy
          </h1>
          <p className=" text-[#BDBDC0] text-center text-[18px] font-[600]">
            With like-minded people and new experiences
          </p>
        </div>
        <div className="bg-[url('/src/assets/Circles.svg')] bg-center bg-no-repeat relative w-full flex justify-center h-[1092px] overflow-hidden"></div>
      </div>
    </div>
  );
};

export default Events;
