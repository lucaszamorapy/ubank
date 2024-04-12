import React from "react";
import Accordion from "./Accordion";
import dataText from "../../config/text.json";

const Faq = () => {
  return (
    <section id="faq" className="mt-40" data-aos="fade-up">
      <div className="container">
        <h1 className="text-gray-800 px-5 text-end text-4xl uppercase font-semibold leading-1 lg:px-0 lg:text-5xl">
          Debitando suas dúvidas <br /> com a{" "}
          <span className="uppercase font-color">uBank</span>
        </h1>
        <p className="text-gray-400 text-end text-sm mt-5 mb-10 px-5 lg:px-0">
          Confira abaixo como funciona os nossos serviços e descubra <br /> como
          o uBank pode simplificar sua vida financeira
        </p>
        <div className="px-5 py-10 lg:px-10 flex flex-col bg-grayBank bg-opacity-20 shadow-lg rounded-xl">
          {dataText.AccordionText.map((item, index) => (
            <Accordion key={index} title={item.title} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
