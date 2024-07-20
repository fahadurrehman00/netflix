import React from "react";
import QuestionAnswer from "./questionAnswer/QuestionAnswer";
import SignupButton from "../../commanComponent/signupButton/SignupButton";

const qa = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of movies, TV shows, and documentaries on a single platform.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD8.99 to USD17.99 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, such as smart TVs, smartphones, tablets, streaming media players, and game consoles.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
];

const Faq = () => {
  return (
    <div className="bg-black mt-2 p-6 md:p-16 ">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <h2 className="text-3xl sm:text-5xl font-black mb-6 text-center">
          Frequently Asked Questions
        </h2>
        {qa.map((items, index) => (
          <QuestionAnswer
            key={index}
            question={items.question}
            answer={items.answer}
          />
        ))}
        <div className="mt-10">
          <SignupButton />
        </div>
      </div>
    </div>
  );
};

export default Faq;
