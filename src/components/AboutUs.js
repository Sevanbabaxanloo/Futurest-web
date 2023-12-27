import React from "react";
import MdiLinkedin from "../assets/mdi_linkedin.svg";
import RiInstagramFill from "../assets/ri_instagram-fill.svg";
import Goose from "../assets/goose-bg.svg";

function AboutUs() {
  return (
    <div id="AboutUs" className="py-[120px] feedbacks-padding">
      <div className="mb-[60px]">
        <div className="flex flex-col items-center gap-[8px]">
          <h1 className="text-[3.333vw] text-[#fff] font-[700] about-h1">
            About Us
          </h1>
          <p className="text-[20px] text-[#747474] font-600 text-center about-paragraph">
            We just love real life meetings and suggest you to join us
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className=" relative">
          <img src={Goose} alt="/" />
          <div className="flex flex-row items-center">
            <div className="w-[42%]  absolute right-[10%] top-[14%] text-position">
              <div>
                <p className="text-[18px] text-[#fff] font-[700] text-bold feedbacks-font">
                  Goose
                </p>
                <p className="text-[16px] text-[#fff] font-[400] about-text-paragraph">
                  is someone, who always promises to join the party and never
                  shows up You know what? Goose is not real, but you are. Meet
                  new people. Discover local experiences. Create your own
                  events. Don't be a goose.
                </p>
                <p className="text-[16px] text-[var(--button-text-orange)] font-[400] text-bold mb-[9px] about-margin feedbacks-font">
                  Founder
                </p>
              </div>
              <div className="flex flex-row gap-[12px]">
                <div className="p-[12px] bg-[var(--header-menu-color)] border-[1px] border-[var(--border-color)] rounded-[112px] about-button-padding">
                  <a
                    href="https://www.linkedin.com/company/futurest-group/about/"
                    target="_blank"
                  >
                    <img src={MdiLinkedin} alt="/" />
                  </a>
                </div>
                <div className="p-[12px] bg-[var(--header-menu-color)] border-[1px] border-[var(--border-color)] rounded-[112px] about-button-padding">
                  <a
                    href="https://www.instagram.com/futurest.cz/"
                    target="_blank"
                  >
                    <img src={RiInstagramFill} alt="/" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
