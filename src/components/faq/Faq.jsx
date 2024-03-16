import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <section id="faq" className="mt-40">
      <div className="container">
        <h1 className="text-black px-5 text-end text-4xl uppercase font-semibold leading-1 lg:px-0 lg:text-5xl">
          Debitando suas dúvidas <br /> com a{" "}
          <span className="uppercase text-purpleBank">uBank</span>
        </h1>
        <p className="text-gray-400 text-end text-sm mt-5 px-5 lg:px-0">
          Confira abaixo como funciona os nossos serviços e descubra <br /> como
          o uBank pode simplificar sua vida financeira
        </p>
        <div className="px-5 mt-10 lg:px-10 flex flex-col bg-grayBank rounded-xl">
          {" "}
          <Accordion
            title={`Qual o nível de segurança da uBank?`}
            answer={
              "A segurança do Ubank, ou de qualquer instituição financeira, depende de vários fatores, incluindo medidas de segurança técnica, políticas de segurança, conformidade regulatória e práticas de segurança cibernética. "
            }
          />
          <Accordion
            title={`Como o Ubank protege as transações financeiras dos seus clientes?`}
            answer={
              "O Ubank utiliza protocolos de segurança robustos em suas plataformas online e móveis para garantir que as transações financeiras dos clientes sejam protegidas contra interceptações e manipulações."
            }
          />
          <Accordion
            title={`Como o Ubank protege os clientes contra fraudes e atividades suspeitas em suas contas?`}
            answer={
              "O Ubank emprega sistemas avançados de detecção de fraudes que monitoram constantemente as atividades das contas dos clientes em busca de padrões incomuns ou atividades suspeitas."
            }
          />
          <Accordion
            title={`Como o Ubank garante a segurança das transações financeiras realizadas através de sua plataforma online?`}
            answer={
              "O Ubank utiliza protocolos de segurança de internet, como SSL (Secure Sockets Layer) e HTTPS, para criptografar as comunicações entre os dispositivos dos clientes e seus servidores, garantindo que as transações financeiras sejam seguras e protegidas contra interceptação."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
