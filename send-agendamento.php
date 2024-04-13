<?php

date_default_timezone_set('America/Sao_Paulo');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "vendor/autoload.php";

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$message = $_POST['message'] ?? '';
$date = date('Y-m-d H:i');
$useragent = $_SERVER['HTTP_USER_AGENT'];
$platform = (preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i', $useragent) || preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikim|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|n(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i', substr($useragent, 0, 4))) ? 'M' : 'C';

$servername = ""; // Endereço do servidor MySQL
$username = ""; // Nome de usuário do MySQL
$password = ""; // Senha do MySQL
$database = ""; // Nome do banco de dados

// Crie uma conexão com o MySQLi
$conn = new mysqli($servername, $username, $password, $database);

// Verifique a conexão
if ($conn->connect_error) {
  $response = [
    'success' => false,
    'message' => 'Erro na conexão com o banco de dados.'
  ];
  echo json_encode($response);
  exit;
}

try {
  $stmt = $conn->prepare("INSERT INTO tb_contactUs (nome, email, phone, message, date) VALUES (?, ?, ?, ?, ?)");

  $stmt->bind_param('sssss', $name, $email, $phone, $message, $date);

  $stmt->execute();

  $gid = $conn->prepare("SELECT MAX(id) FROM tb_contactUs");
  $gid->execute();

  $getid = $gid->get_result()->fetch_assoc();
  $maxId = $getid['MAX(id)'];

  $response = [
    'success' => true,
    'message' => 'E-mails enviados com sucesso!',
    'id' => $maxId
  ];

  echo json_encode($response);
} catch (Exception $e) {
  $response = [
    'success' => false,
    'message' => 'Erro ao enviar e-mails.'
  ];
  echo json_encode($response);
}

$conn->close();

$bodyCliente  = "
<table border=0 cellspacing='7' cellpadding='7' >
<tr bgcolor='#f8f8f8'>
<td colspan='4'>
<center>
<a target='_blank' href='ubank-tawny.vercel.app'>
    // <img style='width:180px; height:56px' src='https://summer-dev.com.br/concepts/logline/sites/v1/logo/logo-topo-blue.png'
</a>
</center>
</td>
</tr>

<tr bgcolor='#f8f8f8'><td><font face= 'Arial,  Helvetica, sans-serif'> <b>Nome:</b></font></td> 
<td><font face= 'Arial, Helvetica, sans-serif'> $name </font> </td></tr>
<tr bgcolor='#f8f8f8'><td><font face= 'Arial,  Helvetica, sans-serif'> <b>Email:</b></font></td> 
<td><font face= 'Arial, Helvetica, sans-serif'> $email </font> </td></tr>
<tr bgcolor='#f8f8f8'><td><font face= 'Arial,  Helvetica, sans-serif'> <b>Telefone:</b></font></td> 
<td><font face= 'Arial, Helvetica, sans-serif'> $phone </font> </td></tr>
<tr bgcolor='#f8f8f8'><td><font face= 'Arial,  Helvetica, sans-serif'> <b>Mensagem:</b></font></td> 
<td><font face= 'Arial, Helvetica, sans-serif'> $message </font> </td></tr>
<tr bgcolor='#f8f8f8'><td><font face= 'Arial,  Helvetica, sans-serif'> <b>Data:</b></font></td> 
<td><font face= 'Arial, Helvetica, sans-serif'> $date </font> </td></tr>


</table>
";

$bodyResposta = "
<html>
<head>
  <title>Re: Agende sua conta - UBank seu banco jovem!</title>
</head>
<body>
  <p>Prezado(a) " . $name . ",</p>
  <p>Agradecemos por entrar em contato conosco para agendar sua consulta na UBank. Recebemos suas informações e estamos processando sua solicitação.</p>
  <p>Em breve, entraremos em contato com você para confirmar os detalhes da consulta. Se você tiver alguma dúvida ou precisar de assistência adicional, não hesite em nos contatar.</p>
  <p>Atenciosamente,<br>UBank</p>
</body>
</html>
";


$mail = new PHPMailer(true);

try {

  $mail->IsSMTP();
  $mail->Host = "smtp.gmail.com";
  $mail->SMTPAuth = true;
  $mail->Username = 'avellar.dev@gmail.com';
  $mail->Password = 'T3p@Su6V1k';
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = 587;

  // $mail->setFrom('tecnologia@summercomunicacao.com.br', 'Logline Logística');

  // $mail->AddAddress('tecnologia@summercomunicacao.com.br', 'Logline Logística');
  // $mail->AddBCC('developers@summercomunicacao.com.br', 'Summer Comunicação');

  $mail->IsHTML(true);
  $mail->CharSet = 'UTF-8';

  $mail->Subject = $platform . " | UBank | Agende sua conta - Nº  $maxId";
  $mail->Body = $bodyCliente;

  $mail->Send();

  $mail->clearAddresses();
  $mail->addAddress($email, 'UBank'); // Seu endereço de e-mail
  $mail->Subject = 'Re: Trabalhe Conosco - UBank';
  $mail->Body = $bodyResposta;

  $mail->Send();

  // echo 'E-mails enviados com sucesso!';

  // $mail->ClearAllRecipients();
  // $mail->ClearAttachments();
} catch (Exception $e) {
  // echo "Erro ao enviar e-mail: {$mail->ErrorInfo}";
}