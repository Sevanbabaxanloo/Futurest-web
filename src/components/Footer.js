import React from "react";
import { Link, useLocation } from "react-router-dom";
import Sms from "../assets/sms.svg";
import Call from "../assets/call-incoming.svg";
import Telegram from "../assets/telegram.svg";
import Location from "../assets/location.svg";
import Apple from "../assets/apple.svg";
import Google from "../assets/google-play.svg";
import Logo from "../assets/logo-main.svg";
import Bg1 from "../assets/frame-2147223050.svg";
import Bg2 from "../assets/frame-2147223051.svg";

export function Footer() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const location = useLocation();

  const handlePhoneClick = (phoneNumber) => {
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      navigator.clipboard.writeText(phoneNumber);
    }
  };

  const scrollToSection = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 10);
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleRulesClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isSpecialPage =
    location.pathname === "/ourrules" ||
    location.pathname === "/privacypolicy" ||
    location.pathname === "/termsofuse";

  return (
    <div
      className={`relative w-full flex flex-col items-center h-[500px] footer-h ${
        isSpecialPage ? "footer-h-pages" : ""
      }`}
    >
      <div
        className={`absolute bottom-0 h-[450px] w-full flex justify-center footer-position footer-h overflow-hidden ${
          isSpecialPage ? "footer-h-pages" : ""
        }`}
      >
        <div className="flex justify-center w-full footer-h  relative">
          <div>
            <img
              src={Bg1}
              alt="/"
              className={`absolute left-[15vw] top-0 w-[10.417vw] ${
                isSpecialPage ? "footer-position-img" : ""
              }`}
            />
            <img
              src={Bg2}
              alt="/"
              className={`absolute right-[18vw] top-[-3px] w-[6.528vw] ${
                isSpecialPage ? "footer-position-img2" : ""
              }`}
            />
          </div>
          <div className="w-full">
            <div className="absolute flex flex-col items-center w-full top-[10vh] mb-[4vh] max-md:top-[10vh]">
              <div className="mb-[24px] footer-h1-margin">
                <img src={Logo} alt="/" className="w-[210px] h-[45px]" />
              </div>
              {!isSpecialPage && (
                <div className="flex flex-row gap-[8px] footer-icon-margin">
                  <div className="w-[48px] h-[48px] bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)] flex items-center justify-center">
                    <a
                      href="https://apps.apple.com/cz/app/futurest-new-friends-events/id1564082295"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Apple} alt="/" />
                    </a>
                  </div>
                  <div className="w-[48px] h-[48px] bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)] flex items-center justify-center">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.futurest&hl=en&gl=US"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Google} alt="/" />
                    </a>
                  </div>
                  <a
                    href="/"
                    className="w-[48px] h-[48px] bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)] flex items-center justify-center"
                  >
                    <img src={Telegram} alt="#" />
                  </a>
                </div>
              )}
              {!isSpecialPage && (
                <div>
                  <ul className="flex flex-row mt-[18px] mb-[34px] footer-col cursor-pointer">
                    <li className="text-[16px] text-[#808080] font-[400] px-[0.833vw] py-[12px] font-size">
                      <Link
                        to="/"
                        onClick={() => scrollToSection("ExploreApp")}
                      >
                        Explore the App
                      </Link>
                    </li>
                    <li className="text-[16px] text-[#808080] font-[400] px-[0.833vw] py-[12px] font-size">
                      <Link to="/" onClick={() => scrollToSection("Questions")}>
                        FAQ
                      </Link>
                    </li>
                    <li className="text-[16px] text-[#808080] font-[400] px-[0.833vw] py-[12px] font-size">
                      <Link to="/" onClick={() => scrollToSection("Feedbacks")}>
                        Feedbacks
                      </Link>
                    </li>
                    <li className="text-[16px] text-[#808080] font-[400] px-[0.833vw] py-[12px] font-size">
                      <Link to="/" onClick={() => scrollToSection("Partners")}>
                        Partnership
                      </Link>
                    </li>
                    <li className="text-[16px] text-[#808080] font-[400] px-[0.833vw] py-[12px] font-size">
                      <Link
                        to="/"
                        onClick={() => scrollToSection("InvestFuture")}
                      >
                        For Investors
                      </Link>
                    </li>
                    <li className="text-[16px] text-[#808080] font-[400] px-[0.833vw] py-[12px] font-size">
                      <Link to="/" onClick={() => scrollToSection("AboutUs")}>
                        About us
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              <div className="mx-[1vw] flex flex-row flex-wrap align-center justify-center gap-[3.889vw] footer-contact">
                <div className="flex flex-row gap-[12px] footer-contact-icons">
                  <div className="flex justify-center w-[24px] h-[24px]">
                    <img src={Call} alt="/" />
                  </div>
                  <div className="footer-contact-icons-text">
                    <p className="text-[12px] text-[#808080] font-[400]">
                      Have a question?
                    </p>
                    <button
                      className="text-[1vw] text-[#fff] font-[400] cursor-pointer font-size"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handlePhoneClick("+420 608 063 874")}
                    >
                      +420 608 063 874
                    </button>
                  </div>
                </div>
                <div className="flex flex-row gap-[12px] footer-contact-icons">
                  <div className="flex justify-center w-[24px] h-[24px]">
                    <img src={Sms} alt="/" />
                  </div>
                  <div className="footer-contact-icons-text">
                    <p className="text-[12px] text-[#808080] font-[400]">
                      Contact us at
                    </p>
                    <button
                      className="text-[1vw] text-[#fff] font-[400] cursor-pointer font-size"
                      onClick={() => handleEmailClick("unreal@outlook.com")}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      unreal@outlook.com
                    </button>
                  </div>
                </div>
                <div className="flex flex-row gap-[12px] footer-contact-icons">
                  <div className="flex justify-center w-[24px] h-[24px]">
                    <img src={Location} alt="/" />
                  </div>
                  <div className="footer-contact-icons-text">
                    <p className="text-[12px] text-[#808080] font-[400]">
                      Address
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Italsk%C3%A1+2581%2F67,+120+00+Vinohrady/data=!4m2!3m1!1s0x470b94972be9dc7f:0x672a6e2930474ef6?sa=X&ved=2ahUKEwj7q5SOotH6AhUNwAIHHWajDlkQ8gF6BAgeEAE"
                      className="text-[1vw] text-[#fff] font-[400] cursor-pointer font-size"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Italská 2581/67, 120 00 Vinohrady, Praha
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-end footer-contact-p">
                  <p className="text-[14px] text-[#808080] font-[400]">
                    © 2000-2021,
                  </p>
                  <h4 className="text-[14px] text-[#808080] font-[400]">
                    All Rights Reserved
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center bg-[#fff] bg-opacity-[0.05]">
        <div className="w-full py-[12px] h-[42px] flex flex-row justify-center footer-contact-last footer-last-line px-[13vw]">
          <div className="w-[66vw] flex flex-row justify-between footer-width">
            <div
              className="flex flex-row gap-[32px] footer-last-gap"
              onClick={handleRulesClick}
            >
              <Link
                to="/ourrules"
                className="text-[#808080] text-[12px] font-[400] footer-p"
              >
                Our rules
              </Link>
            </div>
            <div
              className="flex flex-row gap-[32px] footer-last-gap"
              onClick={handleRulesClick}
            >
              <p className="text-[#808080] text-[12px] font-[400] footer-p">
                <Link to="/privacypolicy">Privacy Policy</Link>
              </p>
              <p
                className="text-[#808080] text-[12px] font-[400] footer-p"
                onClick={handleRulesClick}
              >
                <Link to="/termsofuse">Terms of Use</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
