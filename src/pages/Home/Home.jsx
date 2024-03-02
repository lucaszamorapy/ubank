import Header from "../../components/header"
import image from "/images/img-header.png";
import data from "../../config/home-text.json"
import { Link } from "react-scroll";
import SlideClient from "../../components/slide-cliente/SlideClient";

const Home = () => {
  return (
    <>
      <Header />
      <section id="topo" className="mt-40">
        <div className="container">
          <div className="flex flex-col justify-center gap-4 lg:grid lg:grid-cols-2">
            <div className="flex flex-col  gap-4">
              <h1 className="text-black px-5 text-4xl uppercase font-semibold leading-1 lg:px-0 lg:text-6xl">Aprenda sobre <br/> <span className="text-purpleBank">finanças</span> e conquiste seus <br/> <span className="text-blueBank">sonhos</span></h1>
              <p className="text-gray-400 px-5 text-md lg:px-0 lg:pr-52 lg:mt-10 lg:text-lg">{data.dynamicText}</p>
              <div className="flex flex-col justify-center items-center gap-5 mt-4 px-5 lg:px-0 md:flex-row md:justify-start">
              <Link
                to="contato"
                smooth={true}
                duration={500}
                className="px-0 w-[190px] text-center font-light uppercase bg-purpleBank hover:bg-blueBank text-white duration-300 ease-in-out  py-2  cursor-pointer"
              >
                Começar agora
              </Link>
              <Link
                to="quem-somos"
                smooth={true}
                duration={500}
                className="px-0 w-[190px] text-center font-light h-auto uppercase bg-transparent border-2 border-purpleBank text-purpleBank hover:border-blueBank hover:text-blueBank py-2 duration-300 ease-in-out cursor-pointer"
              >
                Saber mais
              </Link>
              </div>
              <SlideClient />
            </div>
            <img src={image} alt="" className="w-full px-5 object-contain lg:h-[750px] lg:px-0 lg:ml-10"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home