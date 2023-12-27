import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-main.svg";
import Closing from "../assets/closing-button.svg";
import AppleImg from "../assets/apple.svg";
import GoogleImg from "../assets/google-play.svg";

const HeaderMenu = ({ onCloseMenu }) => {
  const scrollToSection = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 10);
  };
  return (
    <div className="w-full h-[100vh] relative bg-[#101010]">
      <div className="flex flex-row justify-between items-center px-[24px] py-[16px]">
        <div className="w-[14vw] h-[5vh] menu-logo">
          <img src={Logo} alt="/" />
        </div>
        <div
          className="h-[32px] w-[32px] px-[8px] py-[10px] bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)] flex items-center header-close"
          onClick={onCloseMenu}
        >
          <img src={Closing} alt="/" className="menu-close" />
        </div>
      </div>
      <div className="h-screen flex flex-col justify-start items-start mt-[15px]">
        <ul className="w-full h-full flex flex-col justify-start items-center gap-[35px] text-[#fff] text-base font-bold p-4">
          <li className="py-2 cursor-pointer text-[24px]">
            <Link
              to="/"
              onClick={() => {
                console.log(`Scrolling to section with id`);
                scrollToSection("ExploreApp");
                console.log(`Scrolling to section with id`);
                onCloseMenu();
              }}
            >
              Explore the App
            </Link>
          </li>
          <li className="py-2 cursor-pointer text-[24px]">
            <Link
              to="/"
              onClick={() => {
                scrollToSection("Feedbacks");
                onCloseMenu();
              }}
            >
              Feedbacks
            </Link>
          </li>
          <li className="py-2 cursor-pointer text-[24px]">
            <Link
              to="/"
              onClick={() => {
                scrollToSection("Partners");
                onCloseMenu();
              }}
            >
              Partnership
            </Link>
          </li>
          <li className="py-2 cursor-pointer text-[24px]">
            <Link
              to="/"
              onClick={() => {
                scrollToSection("InvestFuture");
                onCloseMenu();
              }}
            >
              For Investors
            </Link>
          </li>
          <li className="py-2 cursor-pointer text-[24px]">
            <Link
              to="/"
              onClick={() => {
                scrollToSection("AboutUs");
                onCloseMenu();
              }}
            >
              About us
            </Link>
          </li>
          <li className="py-2 cursor-pointer text-[24px]">
            <Link
              to="/"
              onClick={() => {
                scrollToSection("Questions");
                onCloseMenu();
              }}
            >
              FAQ
            </Link>
          </li>
          <div className="flex flex-row gap-4">
            <div className="h-[48px] w-[48px] px-[10px] py-[12px] bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)] flex justify-center">
              <a
                href="https://futurest.onelink.me/Awth/landing1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={AppleImg} alt="/" />
              </a>
            </div>
            <div className="h-[48px] w-[48px] px-[10px] bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)] flex justify-center items-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.futurest&hl=en&gl=US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GoogleImg} alt="/" />
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
