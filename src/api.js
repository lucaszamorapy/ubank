export function EMAIL_POST(formData) {
  return {
    url: "https://ubank-tawny.vercel.app/uBank/bank/send-agendamento.php",
    options: {
      method: "POST",
      body: formData,
    },
  };
}
