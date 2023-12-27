import React, { useEffect } from "react";
import ExploreAppMenuItems from "./ExploreAppMenuItems";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

const ExploreAppMenu = ({ activeLink, handleClick, screenWidth }) => {
  const links = [
    { text: "Events" },
    { text: "Create your event" },
    { text: "Chat" },
    { text: "Meet people" },
    { text: "AI-enabled" },
    { text: "UPCOMING" },
  ];

  const animations = [
    "animate-events",
    "animate-create-event",
    "animate-chat",
    "animate-meet-people",
    "animate-ai-enabled",
    "animate-upcoming",
  ];

  useEffect(() => {
    const animationClass = animations[activeLink];

    const element = document.getElementById("animation-target");
    const images = document.querySelectorAll(".animate-img");

    element.className = animationClass;
    images.forEach((img) => {
      img.classList.add(animationClass);
      img.classList.remove("animate-img");
    });

    const animationDuration = 1000;
    setTimeout(() => {
      element.className = "";
      images.forEach((img) => {
        img.classList.remove(animationClass);
        img.classList.add("animate-img");
      });
    }, animationDuration);
  }, [activeLink]);

  let startIdx, endIdx;

  if (window.innerWidth >= 768) {
    startIdx = activeLink === 0 ? links.length - 1 : activeLink - 1;
    endIdx = activeLink === links.length - 1 ? 0 : activeLink + 1;
  } else {
    startIdx = activeLink > 0 ? activeLink - 1 : links.length - 1;
    endIdx = activeLink < links.length - 1 ? activeLink + 1 : 0;
  }

  return (
    <div className="relative">
      <div className="w-full h-auto top-[0px] z-0 menu-padding overflow-hidden absolute">
        <div className="flex justify-center items-center">
          <ul className="flex flex-row justify-center gap-[3.33vw] width events-gap">
            {window.innerWidth >= 768
              ? links.map((link, index) => (
                  <ExploreAppMenuItems
                    key={index}
                    index={index}
                    activeLink={activeLink}
                    handleClick={handleClick}
                    text={link.text}
                  />
                ))
              : [startIdx, activeLink, endIdx].map((index) => (
                  <React.Fragment key={index}>
                    {index === activeLink && (
                      <img
                        src={left}
                        alt=""
                        className="cursor-pointer"
                        onClick={() =>
                          handleClick(
                            (activeLink - 1 + links.length) % links.length
                          )
                        }
                      />
                    )}
                    <ExploreAppMenuItems
                      index={index}
                      activeLink={activeLink}
                      handleClick={handleClick}
                      text={links[index].text}
                    />
                    {index === activeLink && (
                      <img
                        src={right}
                        alt=""
                        className="cursor-pointer"
                        onClick={() =>
                          handleClick((activeLink + 1) % links.length)
                        }
                      />
                    )}
                  </React.Fragment>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExploreAppMenu;
