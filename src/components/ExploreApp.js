import React, { useState, useEffect, useRef } from "react";
import AppMenu from "./ExploreAppMenu";
import AppleImg from "../assets/apple.svg";
import GoogleImg from "../assets/google-play.svg";
import EventsImg1 from "../assets/ExploreApp/event-block.svg";
import EventsImg2 from "../assets/ExploreApp/event-block-(1).svg";
import EventsImg3 from "../assets/ExploreApp/event-block-(2).svg";
import EventsImg4 from "../assets/ExploreApp/event-block-(3).svg";
import EventsImg5 from "../assets/ExploreApp/event-block-(4).svg";
import EventsImg6 from "../assets/ExploreApp/event-block-(5).svg";
import EventsImg7 from "../assets/ExploreApp/event-block-(6).svg";
import EventsImg8 from "../assets/ExploreApp/event-block-(7).svg";
import EventsImg9 from "../assets/ExploreApp/event-block-(8).svg";
import EventsImg10 from "../assets/ExploreApp/event-block-(9).svg";
import EventsImg11 from "../assets/ExploreApp/event-block-(10).svg";
import EventsImg12 from "../assets/ExploreApp/event-block-(11).svg";
import EventsImg13 from "../assets/ExploreApp/event-block-(12).svg";
import EventsImg14 from "../assets/ExploreApp/event-block-(13).svg";

const ExploreApp = () => {
  const sections = [
    {
      id: 0,
      images: [EventsImg1, EventsImg2, EventsImg3],
      title: "Section One",
    },
    {
      id: 1,
      images: [EventsImg4, EventsImg5, EventsImg6],
      title: "Section Two",
    },
    {
      id: 2,
      images: [EventsImg7, EventsImg8, EventsImg9],
      title: "Section three",
    },
    {
      id: 3,
      images: [EventsImg10, EventsImg11, EventsImg12],
      title: "Section four",
    },
    {
      id: 4,
      images: [EventsImg13, EventsImg14],
      title: "Section five",
    },
    {
      id: 5,
      images: [],
      title: "Section six",
    },
  ];

  const [activeLink, setActiveLink] = useState(0);

  const handleClick = (index) => {
    setActiveLink(index);

    clearInterval(intervalRef.current);
    startInterval(index);
  };

  useEffect(() => {
    startInterval(activeLink);

    return () => clearInterval(intervalRef.current);
  }, [activeLink]);

  const startInterval = (startIndex) => {
    const interval = setInterval(() => {
      setActiveLink((prevActiveLink) => (prevActiveLink + 1) % 6);
    }, 5000);

    clearInterval(intervalRef.current);
    intervalRef.current = interval;
  };

  const intervalRef = React.useRef();

  const linkTexts = [
    "Explore best experiences in your city",
    "In Futurest it's easy to gather people for your event",
    "Here you'll have both groups and individual chats with participants of events and friends",
    "See the info about people before meeting them and fill your own profile",
    "Futurest will recommend like-minded people  and events just for you",
    "UPCOMING",
  ];

  return (
    <div className="w-full h-auto overflow-hidden" id="ExploreApp">
      <div className="h-auto flex justify-center mb-[10px]">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full top-[-70px] left-0 h-auto flex justify-center">
            <div className="w-full">
              <div className="w-full h-auto">
                <h1 className="mb-[12px] text-[3.33vw] text-[#FFF] font-[700] text-center explore-header text-size">
                  Explore the App
                </h1>
              </div>
              <AppMenu
                activeLink={activeLink}
                handleClick={handleClick}
                className="w-full h-[100px] absolute top-0"
              />
              <div className="mt-[83px] mb-[24px] flex flex-row justify-end text-center">
                <p className="text-[1.389vw] h-[50px] text-[#C5C5C5] font-[600] w-full events-menu-font-p">
                  {linkTexts[activeLink]}
                </p>
              </div>
            </div>
          </div>
          <div
            id="animation-target"
            className="w-[auto] h-[700px] flex flex-row justify-end mb-[32px] explore-card-container"
          >
            <div className=" h-[65vh] w-[352px] flex flex-row justify-betweenvh] relative explore-card-container explore-card-container">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`absolute ${
                    section.id === activeLink ? "top-0" : "hidden"
                  } right-[60%] w-[280px] z-0 explore-card-three-div flex align-center explore-card-center`}
                >
                  {section.images.map((image, index) => (
                    <div
                      key={index}
                      className=" flex-shrink-0 mx-[-10px] explore-img-margin"
                      style={{
                        zIndex: `${(section.images.length - index) * 2 + 1}`,
                      }}
                    >
                      <img
                        src={image}
                        alt={`Section ${section.id} Image ${index + 1}`}
                        className={`relative z-[-1] animate-img explore-img element-${
                          index + 1
                        }`}
                        style={{
                          top: `${index * 5 + 5}% `,
                          height: `${100 - index * 10}% `,
                          zIndex: `${(section.images.length - index) * 2}`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-auto flex flex-row gap-[20px] justify-center mt-[80px] mb-[120px] explore-img explore-img-margin-bottom">
            <div className="gap-[2vw] w-[352px] flex flex-row justify-between px-[20px] explore-button-text">
              <button>
                <a
                  href="https://futurest.onelink.me/Awth/landing1"
                  className="w-[156px] h-[56px] px-[24px] py-[16px] flex flex-row justify-between items-center bg-[var(--header-menu-color)] rounded-[8px] border-[1px] border-[var(--border-color)] explore-button"
                  target="_blank"
                >
                  <img src={AppleImg} alt="" />
                  <p className="text-[16px] font-[600] text-[#fff] explore-p-text explore-button-p">
                    App Store
                  </p>
                </a>
              </button>
              <button>
                <a
                  href="https://play.google.com/store/apps/details?id=com.futurest&hl=en&gl=US"
                  className="w-[172px] h-[56px] px-[24px] py-[16px] flex flex-row justify-between items-center bg-[var(--header-menu-color)] rounded-[8px] border-[1px] border-[var(--border-color)] explore-button"
                  target="_blank"
                >
                  <img src={GoogleImg} alt="" />
                  <p className="text-[16px] font-[600] text-[#fff] h-[22px] explore-p-text explore-button-p">
                    Play Market
                  </p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreApp;
