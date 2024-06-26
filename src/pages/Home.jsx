import image from "/images/img-header.png";
import { Link } from "react-scroll";
import SlideClient from "../components/slide-cliente/SlideClient";
import QuemSomos from "../components/quem-somos/QuemSomos";
import Servicos from "../components/servicos/Servicos";
import Faq from "../components/faq/Faq";
import SectionCta from "../components/section-cta/SectionCta";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Form from "../components/forms/Form";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section id="topo" className="mt-40" data-aos="fade-up">
        <div className="container">
          <div className="flex flex-col justify-center gap-4 lg:grid lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h1 className="text-gray-800 px-5 text-4xl uppercase font-semibold leading-1 lg:px-0 lg:text-6xl">
                Aprenda sobre <br />{" "}
                <span className="font-color">finanças</span> e conquiste seus{" "}
                <br /> <span className="font-color">sonhos</span>
              </h1>
              <p className="text-gray-400 px-5 text-md lg:px-0 lg:pr-52 lg:mt-10 lg:text-lg">
                O banco digital que chegou para facilitar seu bolso e tudo isso
                de forma eficaz!
              </p>
              <div className="flex flex-col justify-center items-center gap-5 mt-4 px-5 lg:px-0 md:flex-row md:justify-start">
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
              <SlideClient />
            </div>
            <img
              src={image}
              alt=""
              className="w-full px-5 object-contain lg:ml-4 lg:px-0 "
            />
          </div>
        </div>
      </section>
      <QuemSomos />
      <Servicos />
      <SectionCta />
      <Faq />
      <Form />
    </>
  );
};

export default Home;
