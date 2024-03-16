import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };
  return (
    <>
      <div className="container mt-10">
        <div className="p-4 text-sm text-purpleBank bg-white rounded-lg shadow-lg lg:text-xl h-full hover:bg-purpleBank hover:text-white duration-300 ease-in-out">
          <button
            onClick={toggleAccordion}
            className="flex justify-between w-full items-center"
          >
            <span className="font-semibold">{title}</span>
            {/* <span>{accordionOpen ? "-" : "+"}</span> */}
            <svg
              className="fill-indigo-500 shrink-0 ml-8 hover:fill-white"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
            </svg>
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-400 text-sm ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="overflow-hidden">{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
