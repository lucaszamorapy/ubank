import React, { useState, useEffect } from "react";
import text from "../../config/text.json";

const QuemSomos = () => {
  // Definindo estados para os números de projetos, clientes e prêmios
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [awards, setAwards] = useState(0);

  // Função para verificar se a seção "Quem somos?" está visível ao rolar a página
  const handleScroll = () => {
    const quemSomosSection = document.getElementById("quem-somos");
    if (quemSomosSection) {
      const { top, bottom } = quemSomosSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Se a seção estiver visível, iniciar a animação dos números
      if (top < windowHeight && bottom > 0) {
        animateNumbers(10000, 5000, 50); // Chama a função animateNumbers com os valores finais desejados
        window.removeEventListener("scroll", handleScroll); // Remove o listener de scroll para evitar chamadas repetidas
      }
    }
  };

  // Efeito que adiciona o listener de scroll ao montar o componente e remove ao desmontar
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Função para animar os números até seus valores finais
  const animateNumbers = (finalProjects, finalClients, finalAwards) => {
    const totalIncrements = 100;
    const incrementProjects = finalProjects / totalIncrements;
    const incrementClients = finalClients / totalIncrements;
    const incrementAwards = finalAwards / totalIncrements;

    let currentProjects = 0;
    let currentClients = 0;
    let currentAwards = 0;

    const interval = setInterval(() => {
      // Incrementa os valores atuais até atingirem os valores finais
      if (currentProjects < finalProjects) {
        currentProjects += incrementProjects;
        setProjects(Math.min(Math.ceil(currentProjects), finalProjects));
      }
      if (currentClients < finalClients) {
        currentClients += incrementClients;
        setClients(Math.min(Math.ceil(currentClients), finalClients));
      }
      if (currentAwards < finalAwards) {
        currentAwards += incrementAwards;
        setAwards(Math.min(Math.ceil(currentAwards), finalAwards));
      }

      // Para o intervalo quando todos os valores atingirem seus valores finais
      if (
        currentProjects >= finalProjects &&
        currentClients >= finalClients &&
        currentAwards >= finalAwards
      ) {
        clearInterval(interval);
      }
    }, 10);
  };

  return (
    // Componente de seção "Quem somos?"
    <section id="quem-somos" className="mt-40 " data-aos="fade-down">
      <div className="container py-10 rounded-xl bg-grayBank bg-opacity-20 shadow-lg lg:px-10 ">
        <div className="grid grid-cols-1 gap-10 px-5 lg:grid-cols-2 lg:px-0 lg:gap-28">
          <img
            src="./images/img-about.png"
            className="w-full px-5 lg:px-0"
            alt="Sobre"
          />
          <div className="flex flex-col  justify-center gap-10">
            <h1 className="text-purpleBank px-5 text-4xl uppercase font-semibold leading-1 lg:px-0 lg:text-5xl">
              O <span className="font-color">Banco </span>que pode mudar sua{" "}
              <span className="font-color">Vida</span>
            </h1>
            <p className="text-gray-600 tracking-normal text-md px-5 lg:text-lg lg:px-0">
              {text.textAbout1}
            </p>
            {/* <p className="text-gray-600 tracking-normal text-md px-5 lg:text-lg lg:px-0">
              {text.textAbout2}
            </p> */}
            <div className="flex flex-wrap items-center gap-5 px-5 lg:gap-10 lg:px-0 xl:flex-nowrap">
              <div className="flex-col">
                <span className="font-color font-bold text-4xl">
                  +{projects}
                </span>
                <p className="text-gray-600 text-lg font-semibold uppercase">
                  Clientes
                </p>
              </div>
              <div className="flex-col gap-5">
                <span className="font-color font-bold text-4xl">
                  +{clients}
                </span>
                <p className="text-gray-600 text-lg font-semibold uppercase">
                  Rendimentos
                </p>
              </div>
              <div className="flex-col gap-5">
                <span className="font-color font-bold text-4xl">+{awards}</span>
                <p className="text-gray-600 text-lg font-semibold uppercase">
                  Parcerias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
