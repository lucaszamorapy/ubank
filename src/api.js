export function EMAIL_POST(formData) {
  return {
    url: "https://summer-dev.com.br/concepts/clinica-cauchioli/sites/clinica-cauchioli/send-agendamento.php",
    options: {
      method: "POST",
      body: formData,
    },
  };
}
