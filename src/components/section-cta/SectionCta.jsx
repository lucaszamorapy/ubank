import React from "react";
import { Link } from "react-scroll";
import sectionImg from "/images/img-section.png";

const SectionCta = () => {
  return (
    <section className="mt-40">
      <div className="container blue-gradient rounded-xl">
        <div
          className="grid grid-cols-1 px-5 items-center pt-10 gap-10 lg:grid-cols-2 lg:px-24"
          data-aos="fade-down"
        >
          <div className="flex flex-col gap-10 ">
            <p className="text-4xl font-semibold">
              UM <span className="font-color">BANCO</span> PENSADO PARA O SEU{" "}
              <span className="font-color">FUTURO</span>
            </p>
            <p className="justif-text">
              O uBank é um banco digital completamente focado em fazer com que
              você se empodere do seu dinheiro, e consiga com ferramentas
              simples e fáceis construir o seu futuro de forma fácil e
              intuitiva.
            </p>
            <div className="flex items-center flex-col gap-5 lg:gap-10 lg:flex-row">
              <Link
                to="contato"
                smooth={true}
                duration={500}
                className="px-0 w-[190px] text-center font-light text-md uppercase rounded-full bg-purpleBank hover:bg-blueBank text-white duration-300 ease-in-out  py-2  cursor-pointer"
              >
                Começar Agora
              </Link>
              <Link
                to="quem-somos"
                smooth={true}
                duration={500}
                className="px-0 w-[190px] text-center font-light text-md uppercase rounded-full bg-purpleBank hover:bg-blueBank text-white duration-300 ease-in-out  py-2  cursor-pointer"
              >
                Saber Mais
              </Link>
            </div>
          </div>
          <img src={sectionImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SectionCta;
