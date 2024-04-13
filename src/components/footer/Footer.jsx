import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className="mt-40">
      <div className="container">
        <h1 className="text-6xl text-center text-gray-800 italic font-semibold cursor-pointer">
          TENHA SUA{" "}
          <Link
            to="topo"
            spy={true}
            smooth={true}
            duration={300}
            offset={-98}
            className="font-color"
          >
            CONTA
          </Link>{" "}
          AGORA!
        </h1>
        <div className="flex justify-between mt-24 py-5 border-t-2 border-gray-200 items-center flex-col lg:flex-row">
          <p className="text-gray-400">
            Copyright ©2024 Todos os direitos reservados
          </p>
          <ul className="flex items-center gap-x-10 px-4 bg-blackBirdz py-4">
            <li>
              <a
                href="https://www.facebook.com/agenciabirdz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={32} color="#8318EE" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/agencia-birdz/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} color="#8318EE" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/agenciabirdz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={32} color="#8318EE" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
