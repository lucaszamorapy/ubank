import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const SlideClient = ({ style }) => {
  // Função para gerar o caminho da imagem com base no número
  const getImagePath = (number) => {
    return `/images/clientes/${number}.png`; // Caminho para a pasta public/images/clientes
  };

  // Array com números de 1 a 30
  const imageNumbers = Array.from({ length: 9 }, (_, i) => i + 1);

  const swiperSettings = {
    effect: "slide",
    grabCursor: true,
    centeredSlides: true,
    modules: [Pagination, Autoplay],
    className: "mySwiper w-full mt-6",
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 2000, // Defina uma velocidade alta para que pareça contínuo
    loop: true, // Ativa o looping infinito
    breakpoints: {
      425: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <h3 className="text-gray-400 text-md px-5 mt-10 lg:mt-16 lg:text-lg lg:px-0">Quem confia</h3>
      <Swiper {...swiperSettings} className={`${style} w-full mb-10`}>
        {imageNumbers.map((number) => (
          <SwiperSlide key={number}>
            <div className="flex justify-center items-center h-full">
              <img src={getImagePath(number)} alt={`Slide ${number}`} className="max-h-full max-w-full object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlideClient;
