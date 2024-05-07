<?php

header("Access-Control-Allow-Origin: *");

// Permitir solicitações com os métodos GET, POST, PUT, DELETE e OPTIONS
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// Permitir que o cabeçalho 'Content-Type' seja enviado
header("Access-Control-Allow-Headers: Content-Type");

// Verificar se é uma solicitação 'OPTIONS'
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  // Responder com sucesso e encerrar o script
  http_response_code(200);
  exit;
}

date_default_timezone_set('America/Sao_Paulo');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "vendor/autoload.php";

$nm_name = $_POST['nm_name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$ds_message = $_POST['ds_message'] ?? '';
$date = date("Y-m-d H:i:s"); // Capturando a data atual

// Configurações do banco de dados PostgreSQL
$servername = "pgsql:host=ep-round-wind-a4spkjhx-pooler.us-east-1.aws.neon.tech;port=5432;dbname=verceldb";
$username = "default";
$password = "FOMyb7WwN6RP";

try {
  // Cria uma conexão com o banco de dados PostgreSQL usando PDO
  $conn = new PDO($servername, $username, $password);

  // Define o modo de erro do PDO para exceção
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Prepara e executa a declaração SQL para inserir dados no banco de dados
  $stmt = $conn->prepare("INSERT INTO formulario (nm_name, email, phone, ds_message, date) VALUES (?, ?, ?, ?, ?)");
  $stmt->execute([$nm_name, $email, $phone, $ds_message, $date]);

  // Obtém o ID do último registro inserido
  $maxId = $conn->lastInsertId();

  // Resposta JSON
  $response = [
    'success' => true,
    'message' => 'E-mails enviados com sucesso!',
    'id' => $maxId
  ];
  echo json_encode($response);
} catch (PDOException $e) {
  // Em caso de erro, captura a exceção e envia uma resposta de erro
  $response = [
    'success' => false,
    'message' => 'Erro ao enviar e-mails.'
  ];
  echo json_encode($response);
}

// Prepara o corpo do e-mail do cliente
$bodyCliente  = "
<table border=0 cellspacing='7' cellpadding='7' >
<tr bgcolor='#f8f8f8'>
<td colspan='4'>
<center>

</center>
</td>
</tr>

<tr bgcolor='#f8f8f8'><td><font face='Arial, Helvetica, sans-serif'><b>Nome:</b></font></td> 
<td><font face='Arial, Helvetica, sans-serif'> $nm_name </font> </td></tr>
<tr bgcolor='#f8f8f8'><td><font face='Arial, Helvetica, sans-serif'><b>Email:</b></font></td> 
<td><font face='Arial, Helvetica, sans-serif'> $email </font> </td></tr>
<tr bgcolor='#f8f8f8'><td><font face='Arial, Helvetica, sans-serif'><b>Telefone:</b></font></td> 
<td><font face='Arial, Helvetica, sans-serif'> $phone </font> </td></tr>
<tr bgcolor='#f8f8f8'><td><font face='Arial, Helvetica, sans-serif'><b>Mensagem:</b></font></td> 
<td><font face='Arial, Helvetica, sans-serif'> $ds_message </font> </td></tr>
<tr bgcolor='#f8f8f8'><td><font face='Arial, Helvetica, sans-serif'><b>Data:</b></font></td> 
<td><font face='Arial, Helvetica, sans-serif'> $date </font> </td></tr>
</table>
";

// Prepara o corpo do e-mail de resposta
$bodyResposta = "
<html>
<head>
  <title>Re: Agende sua conta - UBank seu banco jovem!</title>
</head>
<body>
  <p>Prezado(a) $nm_name,</p>
  <p>Agradecemos por entrar em contato conosco para agendar sua consulta na UBank. Recebemos suas informações e estamos processando sua solicitação.</p>
  <p>Em breve, entraremos em contato com você para confirmar os detalhes da consulta. Se você tiver alguma dúvida ou precisar de assistência adicional, não hesite em nos contatar.</p>
  <p>Atenciosamente,<br>UBank</p>
</body>
</html>
";

$mail = new PHPMailer(true);

try {
  // Configurações do servidor SMTP
  $mail->IsSMTP();
  $mail->Host = "smtp.gmail.com";
  $mail->SMTPAuth = true;
  $mail->Username = 'lucas.zamora@summercomunicacao.com.br';
  $mail->Password = '1Uz@9orN';
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = 587;

  // Remetente e destinatário do e-mail
  $mail->setFrom('avellar.dev@gmail.com', 'Seu Nome');
  $mail->addAddress('avellar.dev@gmail.com', 'Seu Nome');
  $mail->addBCC('avellar.dev@gmail.com', 'Seu Nome');

  // Configurações adicionais do e-mail
  $mail->IsHTML(true);
  $mail->CharSet = 'UTF-8';

  // Assunto e corpo do e-mail do cliente
  $mail->Subject = "$platform | UBank | Agende sua conta - Nº  $maxId";
  $mail->Body = $bodyCliente;

  // Envie o e-mail
  $mail->Send();

  // Limpe os destinatários e adicione o e-mail de resposta
  $mail->clearAddresses();
  $mail->addAddress($email, 'UBank');
  $mail->Subject = 'Re: Trabalhe Conosco - UBank';
  $mail->Body = $bodyResposta;
  $mail->Send();
} catch (Exception $e) {
  // Em caso de erro, capture a exceção e envie uma mensagem de erro
  echo "Erro ao enviar e-mail: {$mail->ErrorInfo}";
}
