import React from "react";
import ArturCeo from "../assets/team/ArturCeo.svg";
import Oleg from "../assets/team/Oleg.svg";
import Liana from "../assets/team/Liana.svg";
import Vladislav from "../assets/team/Vladislav.svg";
import Oksana from "../assets/team/Oksana.svg";
import Andrey from "../assets/team/Andrey.svg";
import Mariam from "../assets/team/Mariam.svg";
import Yuliia from "../assets/team/Yuliia.svg";
import Artur from "../assets/team/Artur.svg";
import Ilya from "../assets/team/Ilya.svg";
import Linkedin from "../assets/mdi_linkedin.svg";
import Instagram from "../assets/ri_instagram-fill.svg";

function Team() {
  return (
    <div className="mb-[180px] mx-[52px] flex justify-center team-margin">
      <div className="w-full grid grid-cols-4 gap-[16px] team-grid">
        <div className=" flex flex-col justify-between p-[24px] rounded-[32px] bg-[var(--header-menu-color)] border-[1px] border-[var(--border-color)]">
          <div className="flex flex-row ">
            <img
              src={ArturCeo}
              alt="/"
              className="w-[7.083vw] h-[7.083vw] team-img"
            />
            <div className="flex flex-col justify-center ml-[16px]">
              <h4 className="text-[16px] text-[#fff] font-[700] team-text">
                Artur Harutyunyan
              </h4>
              <p className="text-[16px] text-[var(--button-text-orange)] font-[400] team-paragraph">
                CEO
              </p>
            </div>
          </div>
          <div className="flex flex-row  justify-end gap-[12px]">
            <a
              href="https://www.linkedin.com/in/artur-harutyunyan-66aa65199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="/" className="w-[24px] h-[24px]" />
            </a>
            <a
              href="https://instagram.com/harutyunyarty/"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="/" className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
        <div className=" flex flex-col p-[24px] rounded-[32px] bg-[var(--header-menu-color)] border-[1px] border-[var(--border-color)]">
          <div className="flex flex-row ">
            <img
              src={Oleg}
              alt="/"
              className="w-[7.083vw] h-[7.083vw] team-img"
            />
            <div className="flex flex-col justify-center ml-[16px]">
              <h4 className="text-[16px] text-[#fff] font-[700] team-text">
                Oleg Ovsianikov
              </h4>
              <p className="text-[16px] text-[var(--button-text-orange)] font-[400] team-paragraph">
                Back-end Developer
              </p>
            </div>
          </div>
          <div className="flex flex-row  justify-end gap-[12px]">
            <a
              href="https://ua.linkedin.com/in/oleg-ovsianikov-18628336"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="/" className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
        <div className=" flex flex-col p-[24px] rounded-[32px] bg-[var(--header-menu-color)] border-[1px] border-[var(--border-color)]">
          <div className="flex flex-row ">
            <img
              src={Liana}
              alt="/"
              className="w-[7.083vw] h-[7.083vw] team-img"
            />
            <div className="flex flex-col justify-center ml-[16px]">
              <h4 className="text-[16px] text-[#fff] font-[700] team-text">
                Liana Manasaryan
              </h4>
              <p className="text-[16px] text-[var(--button-text-orange)] font-[400] team-paragraph">
                Head of Design
              </p>
            </div>
          </div>
          <div className="flex flex-row  justify-end gap-[12px]">
            <a
              href="https://www.linkedin.com/in/liana-manasaryan/"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="/" className="w-[24px] h-[24px]" />
            </a>
            <a
              href="https://www.instagram.com/lii____an/"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="/" className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
        <div className=" flex flex-col p-[24px] rounded-[32px] bg-[var(--header-menu-color)] border-[1px] border-[var(--border-color)]">
          <div className="flex flex-row ">
            <img
              src={Vladislav}
              alt="/"
              className="w-[7.083vw] h-[7.083vw] team-img"
            />
            <div className="flex flex-col justify-center ml-[16px]">
              <h4 className="text-[16px] text-[#fff] font-[700] team-text">
                Vladislav Meleshko
              </h4>
              <p className="text-[16px] text-[var(--button-text-orange)] font-[400] team-paragraph">
                iOS Developer
              </p>
            </div>
          </div>
          <div className="flex flex-row  justify-end gap-[12px]">
            <a
              href="https://www.linkedin.com/in/vladislav-meleshko-837015177/"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="/" className="w-[24px] h-[24px]" />
            </a>
            <a
              href="https://www.instagram.com/vledly"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="/" className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
        <div className=" flex flex-col p-[24px] rounded-[32px] bg-[var(--header-menu-color)] border-[1px] border-[var(--border-color)]">
          <div className="flex flex-row ">
            <img
              src={Oksana}
              alt="/"
              className="w-[7.083vw] h-[7.083vw] team-img"
            />
            <div className="flex flex-col justify-center ml-[16px]">
              <h4 className="text-[16px] text-[#fff] font-[700] team-text">
                Oksana Ryzhenko
              </h4>
              <p className="text-[16px] text-[var(--button-text-orange)] font-[400] team-paragraph">
                SMM Specialist
              </p>
            </div>
          </div>
          <div className="flex flex-row  justify-end gap-[12px]">
            <a
              href="https://www.linkedin.com/in/oksana-ryzhenko/"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="/" className="w-[24px] h-[24px]" />
            </a>
            <a
              href="https://www.instagram.com/kseniiyar/?hl=en"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="/" className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
        <div className=" flex flex-col p-[24px] rounded-[32px] bg-[var(--header-menu-color)] border-[1px] border-[var(--border-color)]">
          <div className="flex flex-row ">
            <img
              src={Andrey}
              alt="/"
              className="w-[7.083vw] h-[7.083vw] team-img"
            />
            <div className="flex flex-col justify-center ml-[16px]">
              <h4 className="text-[16px] text-[#fff] font-[700] team-text">
                Andrey Kolesnikov
              </h4>
              <p className="text-[16px] text-[var(--button-text-orange)] font-[400] team-paragraph">
                Android Developer
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col p-[24px] rounded-[32px] bg-[var(--header-menu-color)] border-[1px] border-[var(--border-color)]">
          <div className="flex flex-row ">
            <img
              src={Mariam}
              alt="/"
              className="w-[7.083vw] h-[7.083vw] team-img"
            />
            <div className="flex flex-col justify-center ml-[16px]">
              <h4 className="text-[16px] text-[#fff] font-[700] team-text">
                Mariam Melkonyan
              </h4>
              <p className="text-[16px] text-[var(--button-text-orange)] font-[400] team-paragraph">
                UI/UX Designer
              </p>
            </div>
          </div>
          <div className="flex flex-row  justify-end gap-[12px]">
            <a
              href="https://www.linkedin.com/in/mariam-melqonyan/"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="/" className="w-[24px] h-[24px]" />
            </a>
            <a
              href="https://www.instagram.com/_miriami/"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="/" className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
        <div className=" flex flex-col p-[24px] rounded-[32px] bg-[var(--header-menu-color)] border-[1px] border-[var(--border-color)]">
          <div className="flex flex-row ">
            <img
              src={Yuliia}
              alt="/"
              className="w-[7.083vw] h-[7.083vw] team-img"
            />
            <div className="flex flex-col justify-center ml-[16px]">
              <h4 className="text-[16px] text-[#fff] font-[700] team-text">
                Yuliia Pshenychna
              </h4>
              <p className="text-[16px] text-[var(--button-text-orange)] font-[400] team-paragraph">
                Head of Marketing
              </p>
            </div>
          </div>
          <div className="flex flex-row  justify-end gap-[12px]">
            <a
              href="https://www.linkedin.com/in/ypshenychna?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="/" className="w-[24px] h-[24px]" />
            </a>
            <a
              href="https://instagram.com/kasha_pshenychnaya?igshid=MzRlODBiNWFlZA=="
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="/" className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
        <div className="team-empty-div"></div>
        <div className=" flex flex-col p-[24px] rounded-[32px] bg-[var(--header-menu-color)] border-[1px] border-[var(--border-color)]">
          <div className="flex flex-row ">
            <img
              src={Artur}
              alt="/"
              className="w-[7.083vw] h-[7.083vw] team-img"
            />
            <div className="flex flex-col justify-center ml-[16px]">
              <h4 className="text-[16px] text-[#fff] font-[700] team-text">
                Artur Sviridov
              </h4>
              <p className="text-[16px] text-[var(--button-text-orange)] font-[400] team-paragraph">
                Project Manager
              </p>
            </div>
          </div>
          <div className="flex flex-row  justify-end gap-[12px]">
            <a
              href="https://www.linkedin.com/in/artur-sviridov-14a651240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="/" className="w-[24px] h-[24px]" />
            </a>
            <a
              href="https://instagram.com/arthur_sviridov?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="/" className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
        <div className="team-empty-div-2"></div>
        <div className=" flex flex-col p-[24px] rounded-[32px] bg-[var(--header-menu-color)] border-[1px] border-[var(--border-color)]">
          <div className="flex flex-row ">
            <img
              src={Ilya}
              alt="/"
              className="w-[7.083vw] h-[7.083vw] team-img"
            />
            <div className="flex flex-col justify-center ml-[16px]">
              <h4 className="text-[16px] text-[#fff] font-[700] team-text">
                Ilya Yushkov
              </h4>
              <p className="text-[16px] text-[var(--button-text-orange)] font-[400] team-paragraph">
                iOS Developer
              </p>
            </div>
          </div>
          <div className="flex flex-row  justify-end gap-[12px]">
            <a
              href="https://www.linkedin.com/in/ilyayushkov?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="/" className="w-[24px] h-[24px]" />
            </a>
            <a
              href="https://instagram.com/ilyayushkov?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
              className="w-[48px] h-[48px] flex justify-center items-center bg-[var(--header-menu-color)] rounded-[112px] border-[1px] border-[var(--border-color)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="/" className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
