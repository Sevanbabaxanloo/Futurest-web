import { useState } from "react";
import QuestionElement from "./QuestionElement";
import SubtractTop from "../assets/subtracttop.svg";
import Subtractbottom from "../assets/subtractbottom.svg";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const QA = [
    {
      question: "What is Futurest?",
      Answer:
        "Futurest is a social discovery platform designed to help you connect with people who share your interests and passions, allowing you to explore meaningful, real-world experiences together.",
    },
    {
      question: "How does Futurest work?",
      Answer:
        "Futurest uses advanced algorithms to match you with events and people based on your interests and location. You can discover, join, and participate in events that align with your passions.",
    },
    {
      question: "Is Futurest a dating app?",
      Answer:
        "No, Futurest is not a traditional dating app. While it can help you meet new people, it's focused on fostering connections through shared activities and interests, not just swipes.",
    },
    {
      question: "How do I sign up for Futurest?",
      Answer:
        "You can easily sign up by downloading the Futurest app from the App Store or Google Play. Follow the registration steps to create your profile.",
    },
    {
      question: "Is Futurest available in my city?",
      Answer:
        "Futurest is expanding to new cities. Check the app to see if it's available in your area. We're continually growing our network.",
    },
    {
      question: "Can I use Futurest to promote my own events?",
      Answer:
        "Yes, Futurest welcomes event organizers. You can use the platform to promote and reach your ideal attendees for your events.",
    },
    {
      question: "Is Futurest safe and secure?",
      Answer:
        "We take your safety and privacy seriously. Our platform includes safety features, and we strive to create a secure environment for our users.",
    },
    {
      question: "How do I contact customer support?",
      Answer:
        "You can contact our customer support team through the app, or you can reach out via email at adm.futurest@gmail.com or mailto:adm.futurest@gmail.com.",
    },
    {
      question: "Are there fees associated with using Futurest?",
      Answer:
        "The basic use of Futurest is free. However, we may offer premium features or ad-free experiences for a fee.",
    },
    {
      question: "How can I delete my Futurest account?",
      Answer:
        "To delete your account, you can contact our customer support team through the app, or you can reach out via email at [adm.futurest@gmail.com](mailto:adm.futurest@gmail.com). Please note that this action is irreversible.",
    },
    {
      question: "Can I use Futurest on my computer?",
      Answer:
        "Currently, Futurest is a mobile app. You can download it from the App Store or Google Play and use it on your smartphone.",
    },
    {
      question: "How does Futurest protect my data?",
      Answer:
        "We use industry-standard security measures to protect your data. We encourage you to review our privacy policy for more details on data protection.",
    },
  ];

  return (
    <div
      className="pl-[24px] pr-[24px] mb-[120px] questions-margin"
      id="Questions"
    >
      <div className="relative w-full  flex flex-col justify-center">
        <div className="flex justify-center">
          <img src={SubtractTop} alt="/" className="w-full h-auto" />
        </div>
        <div className="w-full h-auto flex justify-center questions-h1-padding">
          <h1 className="text-[48px] font-[700] text-center text-[#FFF] mb-[32px] w-full questions-h1 ">
            Frequently asked questions
          </h1>
        </div>
        <div className="w-full h-auto flex justify-center mb-[32px] px-[260px] questionElement-padding">
          <div className="w-full ">
            {QA.map((data, index) => {
              return (
                <QuestionElement
                  key={index}
                  index={index}
                  open={index === openIndex}
                  question={data.question}
                  Answer={data.Answer}
                  toggle={toggle}
                />
              );
            })}
          </div>
        </div>
        <div className="text-center ">
          <p className="mt-[10px] mb-[24px] text-[#C5C5C5] text-[20px] font-[600] questions-p">
            Didn't find the answer to your question? Feel free to
          </p>
          <button
            className="py-[16px] px-[24px] bg-[var(--button-text-orange)] rounded-[8px] text-[#fff] text-[16px] font-[600] mb-[33px] relative questions-button-padding"
            onClick={() => scrollToSection("ContactUs")}
          >
            Contact us
          </button>
        </div>
      </div>
      <div className="relative w-full flex  justify-center">
        <img
          src={Subtractbottom}
          alt="/"
          className="absolute w-full h-auto bottom-[-18px]"
        />
      </div>
    </div>
  );
};

export default Questions;
