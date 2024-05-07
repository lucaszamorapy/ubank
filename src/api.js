export function EMAIL_POST(formData) {
  return {
    url: "https://ubank-tawny.vercel.app/ubank/send-agendamento.php",
    options: {
      method: "POST",
      body: formData,
    },
  };
}
