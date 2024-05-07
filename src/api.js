export function EMAIL_POST(formData) {
  return {
    url: "https://ubank-tawny.vercel.app/send-agendamento.php",
    options: {
      method: "POST",
      body: formData,
    },
  };
}
