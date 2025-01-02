import React, { useState, useLayoutEffect } from "react";
import Popup from "./InvestFuturePopup";
import logo from "../assets/logo-main.svg";
import sunbstractTop2 from "../assets/subtracttop2.svg";
import sunbstractbuttom2 from "../assets/subtractbottom2.svg";
import SocialNetwork_3 from "../assets/social-network_3.svg";
import Spinner from "../assets/spinner.svg";
import Language from "../assets/language.svg";
import Resize from "../assets/resize.svg";
import SocialNetwork from "../assets/social-network.svg";
import GraphicDesign_3 from "../assets/graphic-design_3.svg";
import ComputerIdentification from "../assets/computer-identification.svg";
import CreativeProcess from "../assets/creative-process.svg";

export function InvestFuture() {
  const items = [
    {
      id: 1,
      image: CreativeProcess,
      text: "Professional tools for event & community managers",
    },
    {
      id: 2,
      image: ComputerIdentification,
      text: "AI-personalized events & people suggestions",
    },
    {
      id: 3,
      image: GraphicDesign_3,
      text: "White-label solution for corporate partners",
    },
    {
      id: 4,
      image: SocialNetwork,
      text: "Available all over the world",
    },
    {
      id: 5,
      image: Resize,
      text: "Scalability",
    },
    {
      id: 6,
      image: Language,
      text: "Language based filtering & matching",
    },
    {
      id: 7,
      image: Spinner,
      text: "Fully free to use",
    },
    {
      id: 8,
      image: SocialNetwork_3,
      text: "Diverse Revenue Streams",
    },
  ];

  const [oppenPopup, setOppenPopup] = useState(false);

  useLayoutEffect(() => {
    if (oppenPopup) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  });

  return (
    <div className="flex justify-center">
      <div className="relative p-[24px]" id="InvestFuture">
        <div className="w-full flex justify-center">
          <div className="w-full">
            <img src={sunbstractTop2} alt="/" className="w-full" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center w-full gap-[24px]">
            <img src={logo} alt="" className="w-[160px] h-[28px]" />
            <h1 className="text-[48px] text-[#fff] font-[700] invest-h1">
              Invest in Future
            </h1>
          </div>
        </div>
        <div className="w-full flex align-center justify-center">
          <div className="grid grid-cols-4 grid-rows-2 gap-[24px] invest-grid">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-baseline w-[20.833vw] invest-box-size invest-element"
              >
                <div className="w-[2px] h-[16px] border-[2px] border-[#fff] border-opacity-[0.24] invest-small-line parent-element"></div>
                <div className="w-full my-[24px] flex flex-col justify-center items-center flex-wrap gap-[25px] invest-flex">
                  <div className="flex justify-center w-[260px] invest-img">
                    <img src={item.image} alt="/" />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[#fff] text-[1.111vw] font-[500] w-auto text-center invest-font-siz">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-auto flex justify-center">
          <div className="w-full flex justify-center">
            <button
              className="text-[#fff] text-[16px] font-[600] bg-[var(--button-text-orange)] rounded-[8px] py-[16px] px-[24px] absolute bottom-[73px] button-bottom"
              onClick={() => setOppenPopup(true)}
            >
              Request info
            </button>
            <Popup open={oppenPopup} onClose={() => setOppenPopup(false)} />
          </div>
        </div>
        <div className="w-full h-auto flex justify-center">
          <div className="w-full mt-[5rem]">
            <img src={sunbstractbuttom2} alt="/" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestFuture;
