import React from "react";

const OurRulesComponent = () => {
  const Rules = [
    {
      Number: "1.",
      Text: " Our goal is to create a safe, friendly, and honest community without spam and violence. We are open to collaboration with event organizers who share our beliefs.",
    },
    {
      Number: "2.",
      Text: "The foundation of the platform are events. Any event proposed for publication must have a purpose and the character of an event. Creating events solely for advertising is not welcome.",
    },
    {
      Number: "3.",
      Text: "The Futurest team does not support events aimed solely at enriching organizers or promoting illegal or unscientific means of enrichment and/or wellness that could potentially harm event participants.",
    },
    {
      Number: "4.",
      Text: "We understand that the consumption of alcohol and light drugs is a personal matter. However, we reserve the right not to publish events whose main purpose is the consumption of alcohol or drugs.",
    },
    {
      Number: "5.",
      Text: "Events posted on the platform should not contain profanity in their titles or descriptions.",
    },
    {
      Number: "6.",
      Text: "Events submitted for publication must include a title, description, location, and relevant image; otherwise, the event cannot be published.",
    },
    {
      Number: "7.",
      Text: "By posting an event on the platform, the organizer agrees to provide participants with complete information about the event within the Futurest app, respond to questions in the chat, and promptly notify of any changes.",
    },
    {
      Number: "8.",
      Text: "Events on our platform should not support terrorism, organized crime, incite hatred, or be directed against specific social, racial, or political groups.",
    },
    {
      Number: "9.",
      Text: "While we welcome creating events to make new connections, we aim for Futurest to be a safe platform for all genders. We believe there are other places and apps specifically for romantic encounters and dating.",
    },
    {
      Number: "10.",
      Text: "Platform administrators reserve the right not to publish events that do not align with the community's principles.",
    },
  ];

  return (
    <div className="w-full h-full container-p">
      <div className="mx-[5.556vw] py-[4vh] rules-title">
        <h1 className="text-[6.111vw] text-[var(--button-text-orange)] font-bold leading-[7vh] rules-h1">
          Our rules
        </h1>
        <h3 className="text-[3.889vw] text-[#999] font-bold py-[4vh] rules-text">
          Gooooood! This one seems shorter :D
        </h3>
        <p className="text-[1.7vw] text-[#fff] font-[400] rules-update">
          Last Updated:
          <span className="text-[1.528vw] font-[100] opacity-[0.6] rules-update">
            &nbsp;08.10.2023
          </span>
        </p>
      </div>
      <div className="w-[59.236vw] px-[5.556vw] py-[4vh] flex flex-col gap-[20px] rules-text-container">
        {Rules.map((rules) => (
          <div className="flex justify-start" key={rules.Number}>
            <div className="text-[1.7vw] text-[#fff] font-[700] rules-paragraph">
              {rules.Number}
            </div>
            <div className="text-[1.7vw] text-[#fff] font-[700] ml-[10px] rules-paragraph">
              {rules.Text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurRulesComponent;
