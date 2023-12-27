import React, { useState } from "react";

function Contact() {
  const Result = () => {
    return <p className="submit-button-text">Your message has been sent</p>;
  };

  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    helpyouwith: "",
    message: "",
  });

  const [isMessageVisible, setMessageVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData);

    setMessageVisible(true);
    setTimeout(() => {
      setMessageVisible(false);
    }, 7000);
    setFormData({
      name: "",
      phonenumber: "",
      email: "",
      helpyouwith: "",
      message: "",
    });

    console.log("Data submitted successfully!");
  };

  const isFormEmpty = Object.values(formData).every((value) => value === "");

  return (
    <div
      className="mb-[60px] cuntact-button-margin cuntact-container"
      id="ContactUs"
    >
      <form onSubmit={handleSubmit}>
        <div className="text-center">
          <h1 className="text-[48px] text-[#fff] font-[700] cuntact-h1">
            Contact Us
          </h1>
        </div>
        <div className="flex justify-center cuntact-container-padding">
          <div className="my-[48px] mx-[20px] flex flex-col gap-[24px] w-[802px] h-auto cuntact-width ">
            <div className="flex gap-[24px] cuntact-name-phone">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-[50%] text-[20px] text-[#aaa] p-[16px] h-[62px] border-[1px] border-[var(--border-color)] rounded-[12px] bg-[var(--header-menu-color)] font-[600] cuntact-placeholder cuntact-name-phone-width focus:outline-none"
              />
              <input
                type="number"
                inputMode="numeric"
                id="phonenumber"
                name="phonenumber"
                placeholder="Phone Number"
                value={formData.phonenumber}
                onChange={handleChange}
                className="w-[50%] text-[20px] text-[#aaa] p-[16px] h-[62px] border-[1px] border-[var(--border-color)] rounded-[12px] bg-[var(--header-menu-color)] font-[600] cuntact-placeholder cuntact-name-phone-width focus:outline-none"
              />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className=" text-[20px] text-[#aaa] p-[16px] h-[62px] border-[1px] border-[var(--border-color)] rounded-[12px] bg-[var(--header-menu-color)] font-[600] cuntact-placeholder focus:outline-none"
            />
            <input
              type="text"
              id="helpyouwith"
              name="helpyouwith"
              value={formData.helpyouwith}
              onChange={handleChange}
              placeholder="How we can help you with?"
              className=" text-[20px] text-[#aaa] p-[16px] h-[62px] border-[1px] border-[var(--border-color)] rounded-[12px] bg-[var(--header-menu-color)] font-[600] cuntact-placeholder focus:outline-none"
            />
            <textarea
              cols="30"
              rows="10"
              type="text"
              id="massage"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="h-[145px] text-[20px] text-[#aaa] p-[16px] border-[1px] border-[var(--border-color)] rounded-[12px] bg-[var(--header-menu-color)] font-[600] cuntact-placeholder focus:outline-none"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            type="submit"
            className="text-[16px] text-[var(--button-text-orange)] font-[600] border-[1px] border-[var(--button-text-orange)] px-[24px] py-[16px] rounded-[8px]"
            disabled={isFormEmpty}
          >
            Request
          </button>
          <div>{isMessageVisible ? <Result /> : null}</div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
