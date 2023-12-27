import React, { useState, useEffect } from "react";
import ClosingBtn from "../assets/closing-button.svg";

const EventCreatorsPopup = ({ open, onClose }) => {
  const Result = () => {
    return <p className="submit-button-text">Your message has been sent</p>;
  };

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      onClick={onClose}
      className="h-screen w-full flex justify-center items-center fixed top-0 left-0 z-[90] bg-[#000] bg-opacity-60"
    >
      <form>
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[864px] max-h-[100vh] overflow-y-auto flex flex-col justify-center items-center rounded-[32px] bg-[#101010] relative popup-margin popup-container"
        >
          <div className="w-[522px] h-[710px] my-[50px] popup-padding">
            <div className="flex justify-end popup-closing-height">
              <div className="w-[32px] h-[32px] mt-[24px] mr-[24px] absolute top-0 right-0 popup-closing popup-close-btn">
                <img src={ClosingBtn} alt="/" onClick={onClose} />
              </div>
            </div>
            <div className="w-full flex flex-col items-center">
              <h1 className="text-[32px] text-[#fff] font-bold mb-[16px] popup-h1 ">
                Offer Partnership
              </h1>
              <p className="text-[20px] text-[#747474] font-600 popup-p">
                Leave your info to become a part of Futurest
              </p>
            </div>
            <div className="mt-[32px] flex flex-col items-center gap-[16px] popup-input-w-padding">
              <div className="w-[522px] flex flex-col items-center gap-[18px] popup-input-w">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-[522px] text-[20px] text-[#aaa] p-[16px] h-[62px] border-[1px] border-[var(--border-color)] rounded-[12px] bg-[var(--header-menu-color)] font-[600] focus:outline-none popup-input-w"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    placeholder="Position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-[522px] text-[20px] text-[#aaa] p-[16px] h-[62px] border-[1px] border-[var(--border-color)] rounded-[12px] bg-[var(--header-menu-color)] font-[600] focus:outline-none popup-input-w"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-[522px] text-[20px] text-[#aaa] p-[16px] h-[62px] border-[1px] border-[var(--border-color)] rounded-[12px] bg-[var(--header-menu-color)] font-[600] focus:outline-none popup-input-w"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-[522px] text-[20px] text-[#aaa] p-[16px] h-[62px] border-[1px] border-[var(--border-color)] rounded-[12px] bg-[var(--header-menu-color)] font-[600] focus:outline-none popup-input-w"
                  />
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write a Feedback"
                  className="w-[522px] h-[148px] text-[20px] text-[#aaa] p-[16px] border-[1px] border-[var(--border-color)] rounded-[12px] bg-[var(--header-menu-color)] font-[600] focus:outline-none popup-input-w"
                ></textarea>
              </div>

              <div className="w-[522px] flex flex-row gap-[8px] popup-input-w">
                <div>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      className="w-[16px] h-[16px] bg-[#808080] focus:outline-none"
                    />
                  </label>
                </div>
                <p className="text-[12px] text-[#fff] font-600">
                  Subscribe to our newsletter
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-[16px]">
              <button
                type="submit"
                className="w-[522px] text-[16px] text-[#fff] font-[600] bg-[var(--button-text-orange)] px-[24px] py-[16px] rounded-[8px] popup-button"
              >
                Request
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventCreatorsPopup;
