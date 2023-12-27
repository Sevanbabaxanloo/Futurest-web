import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const QuestionElement = ({ index, open, toggle, question, Answer }) => {
  return (
    <div>
      <div
        className="w-full flex justify-between mb-[8px] border-t-[1px] border-[#FFF3EA] cursor-pointer"
        onClick={() => toggle(index)}
      >
        <p className="text-[#fff] text-[18px] font-[600] pt-[25px] pb-[32px] questionElement-h1">
          {question}
        </p>
        <div className="mt-[25px] mb-[32px] text-[var(--button-text-orange)] w-[24px] h-[24px] border-[1px] border-[var(--button-text-orange)] rounded-full flex justify-center items-center">
          {open ? <FiMinus /> : <FiPlus />}
        </div>
      </div>
      {open && (
        <div className="text-[#aaa] mb-[32px] text-[16px] font-[400]">
          {Answer}
        </div>
      )}
    </div>
  );
};

export default QuestionElement;
