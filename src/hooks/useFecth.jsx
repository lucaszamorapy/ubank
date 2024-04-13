import React, { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
      if (response.ok) {
        setResponseMessage(
          `Muito obrigado por entrar em contato, em breve retornaremos sua Solicitação.`
        );
        setIsSubmitDisabled(true);
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
      setResponseMessage("Erro ao enviar o email");
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
    isSubmitDisabled,
    responseMessage,
  };
};

export default useFetch;
