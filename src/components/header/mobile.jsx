import { Link } from "react-scroll";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useEffect } from "react";

const Mobile = ({ isOpened, links }) => {
  useEffect(() => {
    const updateURL = () => {
      // Check if the page is reloaded (not a navigation within the page)
      if (performance.navigation.type === 1) {
        // Set the default URL to "home" and reload the page
        window.location.replace("/");
      }
    };

    // Check and update URL on component mount
    updateURL();
  }, []);
  return (
    <nav className={`menu bg-gray-400 z-10 ${isOpened && "menu-active"}`}>
      <div className="w-full">
        <ul className="mt-24 pt-2 flex flex-col gap-5 px-6 border-t-2 border-white lg:border-none">
          {links.map((link) => (
            <li key={link.url}>
              <Link
                to={link.url.substring(1)} // Remove o "#" do href
                spy={true}
                smooth={true}
                duration={500}
                className="link-list text-white uppercase text-sm font-medium"
                onClick={(e) => {
                  if (link.url.startsWith("#")) {
                    e.preventDefault();

                    // Extract the section ID without the "#" symbol
                    const sectionId = link.url.substring(1);

                    // Update the URL without triggering a page reload
                    window.history.replaceState({}, "", `#${sectionId}`);
                  }
                }}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex justify-center gap-x-10 px-4 bg-blackBirdz py-4">
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
    </nav>
  );
};

export default Mobile;
