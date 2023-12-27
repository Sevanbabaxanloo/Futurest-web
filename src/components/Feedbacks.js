import React, { useLayoutEffect, useState } from "react";
import Popup from "./FeedbacksPopup";
import Zack from "../assets/Feedbacks/1.svg";
import Tom from "../assets/Feedbacks/2.svg";
import Alfie from "../assets/Feedbacks/3.svg";
import Victor from "../assets/Feedbacks/4.svg";
import Laura from "../assets/Feedbacks/5.svg";
import James from "../assets/Feedbacks/6.svg";
import Luca from "../assets/Feedbacks/7.svg";
import Connor from "../assets/Feedbacks/8.svg";
import Tom2 from "../assets/Feedbacks/9.svg";
import Jordan from "../assets/Feedbacks/10.svg";
import Alan from "../assets/Feedbacks/11.svg";
import Dan from "../assets/Feedbacks/12.svg";

const Feedbacks = () => {
  const feedbackItems = [
    {
      image: Zack,
      name: "Zack Swire",
      handle: "@swire",
      text: "Futurest brought adventure and real connections back into my life. What an incredible platform!",
    },
    {
      image: Tom,
      name: "Tom Osman",
      handle: "@tomosman",
      text: "I've met lifelong friends through Futurest. It's a community of kindred spirits.",
    },
    {
      image: Alfie,
      name: "Alfie",
      handle: "@victoruxui",
      text: "The events I've discovered on Futurest have enriched my life. It's a game-changer.",
    },
    {
      image: Victor,
      name: "Victor",
      handle: "@victoruxui",
      text: "Futurest brought adventure and real connections back into my life. What an incredible platform!",
    },
    {
      image: Laura,
      name: "Laura Evans-Hill",
      handle: "@EvansNifty",
      text: "Futurest's community-building features are fantastic. I've connected with so many like-minded people.",
    },
    {
      image: James,
      name: "James Devonport ",
      handle: "@jamesdevonport",
      text: "Futurest brought adventure and real connections back into my life. What an incredible platform!",
    },
    {
      image: Luca,
      name: "Luca Restagno",
      handle: "@ikoichi",
      text: "🤩 As an event organizer, Futurest has been invaluable for reaching our ideal attendees.👌",
    },
    {
      image: Connor,
      name: "Connor Finlayson",
      handle: "@FinlaysonConnor",
      text: "I've found unique events I'd never have known about without Futurest.",
    },
    {
      image: Tom2,
      name: "Tom Critchlow",
      handle: "@tomcritchlow",
      text: "As an event promoter, Futurest helps me reach the right audience efficiently.",
    },
    {
      image: Jordan,
      name: "Jordan Godbey",
      handle: "@jordangodbey",
      text: "Futurest made my social life exciting again. So many amazing connections made!",
    },
    {
      image: Alan,
      name: "Alan Smith",
      handle: "@AlanJLSmith",
      text: "The tailored event recommendations on Futurest are spot-on. Love it!",
    },
    {
      image: Dan,
      name: "Dan Rowden",
      handle: "@dr",
      text: "I was skeptical about another event app, but Futurest pleasantly surprised me.⚡",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [btnState, setBtnState] = useState(false);
  const [oppenPopup, setOppenPopup] = useState(false);
  const [showButton, setShowButton] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
    setShowAll((prevShowAll) => !prevShowAll);
    setShowButton(!showButton);
  }

  let toggleClassCheck = btnState ? "active" : null;
  let buttonClass = showButton ? "feedback-btn-b" : "feedback-btn-n";

  useLayoutEffect(() => {
    if (oppenPopup) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  });

  return (
    <div
      className="w-full h-auto flex justify-center feedbacks-margin"
      id="Feedbacks"
    >
      <div className="w-full h-auto flex flex-col items-center">
        <div className="relative w-full flex flex-col items-center feedbacks-padding-b">
          <h1 className="text-[48px] text-[#fff] font-[700] feedbacks-h1">
            Leave your feedback
          </h1>
          <p className="text-[20px] text-[#747474] font-[600] pt-[8px] feedbacks-p">
            Tell us about your experience with Futurest{" "}
          </p>
        </div>
        <div
          className={`w-full grid grid-cols-3 justify-items-center gap-[24px] py-[60px] px-[150px] feedbacks-div-grid feedbacks-element-mb feedbacks-element-h feedbacks-elements feedbacks-padding`}
          id="Feedbacks"
        >
          {feedbackItems.map((item, index) => (
            <div
              key={index}
              className={`feedbacks-child p-[24px] max-w-[25vw] h-auto bg-[var(--header-menu-color)] rounded-[32px] border-[1px] border-[#fff] border-opacity-[0.05] feedbacks-element-size ${
                index === 3 || [7, 8, 10].includes(index)
                  ? "feedback-custom-style"
                  : ""
              } ${toggleClassCheck ? "feedbacks-allchild" : ""}`}
            >
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-row items-center gap-[16px]">
                  <div>
                    <img
                      src={item.image}
                      alt="/"
                      className="h-[48px] feedbacks-img"
                    />
                  </div>
                  <div>
                    <p className="text-[#fff] text-[16px] font-[700] feedbacks-element">
                      {item.name}
                    </p>
                    <p className="text-[#C5C5C5] text-[14px] font-[700] feedbacks-paragraph">
                      {item.handle}
                    </p>
                  </div>
                </div>
                <p className="text-[#aaa] text-[16px] font-[400]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col justify-center pt-[50px]">
          <button
            className={`text-[var(--button-text-orange)] text-[14px] font-600 feedbacks-seemore ${
              showAll ? "" : "hidden"
            }`}
            onClick={handleClick}
          >
            {showAll ? "See less" : "See more"}
          </button>
          <div className="flex flex-col items-center pt-[50px]">
            <button
              className={`w-[224px] text-[#fff] text-[16px] font-[600] p-[16px] bg-[var(--button-text-orange)] rounded-[8px] feedback-btn ${buttonClass}`}
              onClick={() => setOppenPopup(true)}
            >
              What's the fuss about?
            </button>
            <Popup open={oppenPopup} onClose={() => setOppenPopup(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
