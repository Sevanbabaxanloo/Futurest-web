import React, { useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "../assets/logo-main.svg";
import AppleImg from "../assets/apple.svg";
import GoogleImg from "../assets/google-play.svg";
import Menu from "../assets/menu.svg";
import HeaderMenu from "./HeaderMenu";

const Header = ({ hide }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 10);
  };

  useLayoutEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  });

  const isSpecialPage =
    location.pathname === "/ourrules" ||
    location.pathname === "/privacypolicy" ||
    location.pathname === "/termsofuse";

  return (
    <div
      className={`w-full h-[110px] flex menu-padding-header height-container py-[32px] px-[60px] fixed z-[90] ${
        hide ? "hidden-menu" : ""
      }`}
      id="Header"
    >
      <div
        className={`w-full flex justify-between items-center background-header ${
          isSpecialPage ? "header-logo" : ""
        }`}
      >
        <div className="flex flex-col justify-center cursor-pointer">
          <div className="flex flex-col justify-center cursor-pointer">
            <Link to="/">
              <img src={LogoImg} alt="/" className="w-full h-auto logo" />
            </Link>
          </div>
        </div>
        {!isSpecialPage && (
          <div className="flex header">
            <ul className="flex flex-row space-x-1 md:space-x-3 lg:space-x-6 xl:space-x-8 2xl:space-x-12 bg-[var(--header-menu-color)] border-[1px] border-[var(--border-color)] px-[24px] py-[12px] rounded-[32px]">
              <li className="flex items-center text-white font-bold cursor-pointer text-base sm:text-xs md:text-xs lg:text-base xl:text-base 2xl:text-base">
                <Link to="/" onClick={() => scrollToSection("ExploreApp")}>
                  Explore the App
                </Link>
              </li>
              <li className="flex items-center text-white text-[16px] font-bold cursor-pointer text-base sm:text-xs md:text-xs lg:text-base xl:text-base 2xl:text-base">
                <Link to="/" onClick={() => scrollToSection("Questions")}>
                  FAQ
                </Link>
              </li>
              <li className="flex items-center text-white text-[16px] font-bold cursor-pointer text-base sm:text-xs md:text-xs lg:text-base xl:text-base 2xl:text-base">
                <Link to="/" onClick={() => scrollToSection("Feedbacks")}>
                  Feedbacks
                </Link>
              </li>
              <li className="flex items-center text-white text-[16px] font-bold cursor-pointer text-base sm:text-xs md:text-xs lg:text-base xl:text-base 2xl:text-base">
                <Link to="/" onClick={() => scrollToSection("Partners")}>
                  Partnership
                </Link>
              </li>
              <li className="flex items-center text-white text-[16px] font-bold cursor-pointer text-base sm:text-xs md:text-xs lg:text-base xl:text-base 2xl:text-base">
                <Link to="/" onClick={() => scrollToSection("InvestFuture")}>
                  For Investors
                </Link>
              </li>
              <li className="flex items-center text-white text-[16px] font-bold cursor-pointer text-base sm:text-xs md:text-xs lg:text-base xl:text-base 2xl:text-base">
                <Link to="/" onClick={() => scrollToSection("AboutUs")}>
                  About us
                </Link>
              </li>
            </ul>
          </div>
        )}
        {!isSpecialPage && (
          <div className="flex flex-row items-center gap-4 md:gap-2 xl:gap-4 header mr-[50px] md:mr-[0px]">
            <div className="flex flex-cral flex-wrap items-center justify-center w-[48px] h-[48px] bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)] sm:w-10 sm:h-10">
              <a
                href="https://apps.apple.com/cz/app/futurest-new-friends-events/id1564082295"
                className="h-7 w-7 flex items-center justify-center"
                target="_blank"
              >
                <img src={AppleImg} alt="/" className="w-5 h-5 menu-shop-img" />
              </a>
            </div>
            <div className="flex flex-cal flex-wrap justify-center items-center w-[48px] h-[48px] bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)] sm:w-10 sm:h-10">
              <a
                href="https://play.google.com/store/apps/details?id=com.futurest&hl=en&gl=US"
                className="h-7 w-7 flex items-center justify-center"
                target="_blank"
              >
                <img
                  src={GoogleImg}
                  alt="/"
                  className="w-5 h-5 menu-shop-img"
                />
              </a>
            </div>
          </div>
        )}
        {!isSpecialPage && (
          <div className="hidden menu" onClick={toggleMenu}>
            <div className="h-8 w-8 px-2 py-2.5 bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)] flex items-center header-hidden">
              <img src={Menu} alt="/" />
            </div>
          </div>
        )}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[var(--background-color)] z-50 flex justify-end overflow-y-hidden">
            <HeaderMenu onCloseMenu={() => setIsMenuOpen(false)} />
            <Link to={"/"}></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

