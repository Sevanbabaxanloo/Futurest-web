import React, { useState } from "react";

export function Partners() {
  const partners = [
    "Horse driving school",
    "Standup show",
    "Craft studio",
    "Dance studio",
    "Painting school",
    "Cinema",
    "Travel agency",
    "Yoga studio",
    "English school",
    "Party",
    "Quiz",
  ];
  const firstDivPartners = partners.slice(0, 5);
  const secondDivPartners = partners.slice(5, 11);

  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? "active" : null;

  return (
    <div
      className="min-h-full flex flex-col justify-center pb-[100px] partners-margin-b partners-margin-t pt-[120px] partners-padding"
      id="Partners"
    >
      <div className="w-full flex flex-col justify-center">
        <div className="w-full flex justify-center">
          <div className="text-center mb-[60px] container mx-auto px-4">
            <h1 className="text-5xl text-[#fff] font-[700] mb-[8px] partners-h1">
              Partners
            </h1>
            <p className="text-[20px] text-[#747474] font-[600]">
              Futurest helps to promote events in different industries
            </p>
          </div>
        </div>
        <div className="h-auto flex flex-col gap-[23px] partners-gap3">
          <div>
            <div>
              <div className="absolute w-full h-[75px] bg-gradient-to-r from-[var(--background-color)] via-transparent to-[var(--background-color)] partners-gradient-div partners-gradient"></div>
              <div className="flex justify-center align-center gap-[1.597vw] partners-elements partners-gap">
                {firstDivPartners.map((partner, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="partners-child h-[56px] px-[3.264vw] py-[10px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[14px] border-[1px] border-[#fff]">
                      <p className="text-[#fff] text-[1.3vw] font-[700] partners-item-text">
                        {partner}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="absolute w-full h-[75px] bg-gradient-to-r from-[var(--background-color)] via-transparent to-[var(--background-color)] partners-gradient-div partners-gradient"></div>
              <div
                className={`max-h-full flex justify-center align-center gap-[2.917vw] partners-elements partners-second-div partners-second-element-padding ${
                  toggleClassCheck ? "partners-second-div-visible" : ""
                }`}
              >
                {secondDivPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="h-[56px] flex justify-center partners-gap2"
                  >
                    <div className="partners-child px-[3.264vw] py-[10%] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[14px] border-[1px] border-[#fff] ">
                      <p className="text-[#fff] text-[1.3vw] font-[700] partners-item-text">
                        {partner}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden partners-button">
        <div className="flex justify-center align-center mt-[20px]">
          <button
            className={`text-[16px] text-[var(--button-text-orange)] ${toggleClassCheck}`}
            onClick={handleClick}
          >
            {btnState ? "See less" : "See more"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Partners;
