import React from "react";
import Card from "../../utils/card/Card";

const Servicos = () => {
  return (
    <>
      <section id="servicos" className="mt-40">
        <div className="container">
          <h1 className="text-black px-5 text-4xl uppercase font-semibold leading-1 lg:px-0 lg:text-5xl">
            Vem tranquilo <br /> com a{" "}
            <span className="uppercase text-purpleBank">uBank</span>
          </h1>
          <p className="text-black text-sm mt-5 px-5 lg:px-0">
            Confira abaixo como funciona os nossos serviços e descubra <br />{" "}
            como o uBank pode simplificar sua vida financeira
          </p>
          <Card />
        </div>
      </section>
    </>
  );
};

export default Servicos;
