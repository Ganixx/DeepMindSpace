import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: "faq1",
    question: "Who are the therapists?",
    answer: "DeepMindScape combines AI-powered support with proffesional therapy to provide comprhensive mental health care tailored to your needs."
  },
  {
    id: "faq2",
    question: "Who will be helping me?",
    answer: "DeepMindScape combines AI-powered support with proffesional therapy to provide comprhensive mental health care tailored to your needs."
  },
  {
    id: "faq3",
    question: "Is BetterHelp right for me?",
    answer: "DeepMindScape combines AI-powered support with proffesional therapy to provide comprhensive mental health care tailored to your needs."
  },
  {
    id: "faq4",
    question: "How much does it cost?",
    answer: "DeepMindScape combines AI-powered support with proffesional therapy to provide comprhensive mental health care tailored to your needs."
  },
  {
    id: "faq5",
    question: "I signed up. How long until I'm matched with a therapist?",
    answer: "DeepMindScape combines AI-powered support with proffesional therapy to provide comprhensive mental health care tailored to your needs."
  }
];

function Faq() {
  const [active, setActive] = useState(faqs[0].id);

  return (
    <>
      <h1 className="text-center text-3xl md:text-4xl my-10 mx-auto font-bold">Frequently Asked Questions</h1>
      <section className="w-full max-w-2xl mx-auto bg-gray-100 rounded-2xl shadow-md my-10">
        {faqs.map((faq, idx) => {
          const isActive = active === faq.id;
          return (
            <div
              key={faq.id}
              className={`
                border-b last:border-b-0 border-gray-200
                transition-colors
                ${isActive ? "bg-teal-800 text-white" : "bg-gray-100"}
                ${idx === 0 ? "rounded-t-2xl" : ""}
                ${idx === faqs.length - 1 ? "rounded-b-2xl" : ""}
              `}
            >
              <button
                className={`
                  w-full flex justify-between items-center px-4 md:px-8 py-5 text-base md:text-lg font-medium
                  transition-colors
                  ${isActive ? "text-white" : "text-gray-900"}
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500
                  cursor-pointer
                `}
                aria-expanded={isActive}
                aria-controls={`answer-${faq.id}`}
                id={`faq-${faq.id}`}
                onClick={() => setActive(isActive ? "" : faq.id)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`
                    transition-transform duration-300
                    ${isActive ? "rotate-180 text-white" : "text-teal-800"}
                  `}
                  size={24}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`answer-${faq.id}`}
                role="region"
                aria-labelledby={`faq-${faq.id}`}
                className={`
                  overflow-hidden transition-[max-height,padding] duration-200 ease-in-out
                  ${isActive ? "max-h-40 py-3 px-4 md:px-8" : "max-h-0 py-0 px-4 md:px-8"}
                `}
                style={{
                  transitionProperty: "max-height, padding",
                }}
              >
                <p
                  className={`
                    text-base
                    ${isActive ? "text-white" : "text-gray-700"}
                    transition-colors
                  `}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Faq;
