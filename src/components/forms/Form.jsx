import Input from "../../utils/input/Input";
import useForm from "../../hooks/useForms";
import useFetch from "../../hooks/useFecth";
import { EMAIL_POST } from "../../api";
import UbankCard from "/images/card-ubank.png";
import "react-toastify/dist/ReactToastify.css";

const Forms = () => {
  const nome = useForm("name");
  const email = useForm("email");
  const message = useForm();
  const { data, error, loading, request, responseMessage } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nm_name", nome.value);
    formData.append("email", email.value);
    formData.append("ds_message", message.value);

    const { url, options } = EMAIL_POST(formData); // Obtém a URL e as opções de requisição para postagem de foto
    request(url, options); // Envia a requisição HTTP
  };
  return (
    <section id="contato" className="mt-20 px-5 lg:px-0" data-aos="fade-up">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="text-4xl text-gray-800 uppercase font-semibold text-redR2R200">
              Seja você, seja <span className="font-color">UBank</span>
            </h1>
            <img
              src={UbankCard}
              alt="Cartão da UBank"
              className="mt-10 mb-5 lg:w-[400px] lg:mb-0"
              style={{
                animation: "floatAnimation 3s infinite", // Defina a animação e sua duração
              }}
            />
          </div>
          <form
            className="flex py-10 flex-col gap-6  bg-transparent"
            onSubmit={handleSubmit}
          >
            <Input label="Nome" type="name" name="nome" {...nome} />
            <Input label="Email" type="email" name="email" {...email} />
            <Input
              label="Mensagem"
              type="message"
              name="message"
              {...message}
            />

            <ToastContainer limit={1} />

            {loading ? (
              <button
                disabled
                className="bg-purpleBank text-white w-[120px] py-2 rounded-full"
              >
                Enviando...
              </button>
            ) : (
              <button className="bg-purpleBank text-white w-[120px] py-2 rounded-full">
                Enviar
              </button>
            )}
          </form>
          {responseMessage && (
            <h1 className="text-black text-2xl text-center font-bold my-10">
              {responseMessage}
            </h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Forms;
