import React, { useState } from "react";
import Popup from "./EventCreatorsPopup";
import Dawn from "../assets/dawn.svg";

const EventCreators = () => {
  const [oppenPopup, setOppenPopup] = useState(false);

  return (
    <div className="mb-[120px] creator-margin-t creator-element flex justify-center">
      <div className="w-[1440px]">
        <div className="w-full flex justify-center">
          <div className="text-center mb-[60px] w-full">
            <h1 className="text-[48px] text-[#fff] font-[700] mb-[8px] creator-h1">
              For event creators
            </h1>
            <p className="text-[20px] text-[var(--paragraph-color)] creator-font-p">
              Host your event with us for free and get more participants
            </p>
          </div>
        </div>
        <div className="px-[60px] w-full flex justify-center creator-element">
          <div className="flex flex-row justify-between items-center mb-[60px] w-full creator-col creator-elements">
            <div className="text-center w-[27.7vw] creator-element max-md:w-full">
              <div className="flex justify-center creator-element">
                <img src={Dawn} alt="" className="w-[54px] h-[54px]" />
              </div>
              <h2 className="text-[var(--event-creator-color)] text-[26.5px] font-[700] creator-element">
                App downloads
              </h2>
              <h1 className="text-[var(--event-creator-color)] text-[78px] font-[700] creator-element">
                3090
              </h1>
              <p className="text=[16px] text-[var(--event-creator-color)] font-[400] creator-elements-paragraph creator-element">
                Number of times Futurest app was downloaded
              </p>
            </div>
            <div className="text-center w-[27.7vw] creator-element max-md:w-full">
              <div className="flex justify-center creator-element">
                <img src={Dawn} alt="" className="w-[54px] h-[54px]" />
              </div>
              <h2 className="text-[var(--event-creator-color)] text-[26.5px] font-[700] creator-element">
                Created events
              </h2>
              <h1 className="text-[var(--event-creator-color)] text-[78px] font-[700] creator-element">
                2589
              </h1>
              <p className="text=[16px] text-[var(--event-creator-color)] font-[400] creator-elements-paragraph creator-element">
                Number of events created inside the Futurest app
              </p>
            </div>
            <div className="text-center w-[29.3vw] creator-element max-md:w-full">
              <div className="flex justify-center creator-element">
                <img src={Dawn} alt="" className="w-[54px] h-[54px]" />
              </div>
              <h2 className="text-[var(--event-creator-color)] text-[26.5px] font-[700] creator-element">
                Real events visits
              </h2>
              <h1 className="text-[var(--event-creator-color)] text-[78px] font-[700] creator-element">
                7315
              </h1>
              <p className="text=[16px] text-[var(--event-creator-color)] font-[400] creator-elements-paragraph creator-element">
                Number of real events participants though the Futurest app
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex justify-center">
          <div className="text-center w-[50%] mb-[120px] creator-button-margin-b">
            <button
              className="bg-[var(--button-text-orange)] py-[16px] px-[24px] rounded-[8px] text-[#fff] creator-button"
              onClick={() => setOppenPopup(true)}
            >
              Become our partner
            </button>
            <Popup open={oppenPopup} onClose={() => setOppenPopup(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCreators;
