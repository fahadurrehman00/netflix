import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const QuestionAnswer = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="p-4 lg:p-6 bg-[#414141] mb-1 cursor-pointer transition-all duration-300 hover:bg-[#575757]"
        onClick={toggleFaq}>
        <div className="flex justify-between items-center transition-all duration-300">
          <div>
            <h3 className="text-lg lg:text-2xl font-medium">{question}</h3>
          </div>
          <div className="text-2xl">{isOpen ? <RxCross2 /> : <GoPlus />}</div>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-40 opacity-100 p-4 mb-1 mt-px bg-[#414141]"
            : "max-h-0 opacity-0"
        }`}>
        <p className="text-lg lg:text-2xl cursor-pointer">{answer}</p>
      </div>
    </div>
  );
};

export default QuestionAnswer;
