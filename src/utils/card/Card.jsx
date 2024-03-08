import React from "react";
import dataBank from "../../config/ubank.json";

const Card = () => {
  return (
    <>
      <div className="flex mt-10 flex-col px-5 gap-5 lg:grid lg:grid-cols-3 lg:px-0">
        {dataBank["ubank"].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg px-5 lg:px-10 py-10"
          >
            <img src={item.image} alt="" />
            <p className="text-black text-end text-sm px-5 mt-10 lg:px-0">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
