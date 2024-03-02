import { Link as ScrollLink } from "react-scroll";
import logo from "/images/logo.png";
import whiteLogo from "/images/logo-branco.png";

import "./desktop.css";

const Desktop = ({ isOpened, action, links }) => {
  return (
    <>
      <div className="flex justify-between py-4 w-full lg:w-auto">
        <a
          className={`relative z-20 flex gap-4 items-center font-bold ${
            isOpened ? "text-white" : "text-black"
          }`}
          href="/"
        >
          <img
            className="xl:w-[90px] md:w-[95px] lg:flex hidden"
            src={isOpened ? whiteLogo : logo}
            alt="Logo Header"
          />
          <img
            className={`w-[60px] lg:hidden flex-initial lg:absolute ${
              isOpened ? "rotate-360" : "rotate-0"
            }`}
            src={isOpened ? whiteLogo : logo}
            alt="Logo Header"
          />
        </a>

        <button
          className={`menu-toggle bg-white focus:outline-none flex lg:hidden ${
            isOpened && "menu-toggle-active"
          }`}
          onClick={action}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className="hidden lg:flex items-center justify-center">
        <ul className="flex gap-3 items-center lg:gap-6">
          {links.map((link, index) => (
            <li className="text-sm linha" key={index}>
              {/* Link de rolagem suave */}
              <ScrollLink
                className="cursor-pointer uppercase text-black"
                to={link.url.substring(1)}
                spy={true}
                smooth={true}
                duration={300}
                offset={-98}
              >
                {link.text}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Desktop;
