<?php 
include 'phpmailer.php';
define("SMTP_HOST", 'smtp.gmail.com'); //Hostname of the mail server
define("SMTP_PORT", '465'); //Port of the SMTP like to be 25, 80, 465 or 587
define("SMTP_UNAME", 'crave.healthysnacks@gmail.com'); //Username for SMTP authentication any valid email created in your domain
define("SMTP_PWORD", 'crave2016');

$name = $_POST['name'];
$emailadd = $_POST['email'];
$mail = new PHPMailer; // call the class 
$mail->IsSMTP(); 
$mail->SMTPDebug  = 2;
$mail->SMTPAuth   = true;
$mail->SMTPSecure = 'ssl';
$mail->Host = SMTP_HOST; //Hostname of the mail server
$mail->Port = SMTP_PORT; //Port of the SMTP like to be 25, 80, 465 or 587
$mail->Username = SMTP_UNAME; //Username for SMTP authentication any valid email created in your domain
$mail->Password = SMTP_PWORD; //Password for SMTP authentication
$mail->AddReplyTo($emailadd, $name); //reply-to address
$mail->SetFrom($emailadd, $name);    
$mail->Subject = 'Contact us: Crave';
$mail->AddAddress('crave.healthysnacks@gmail.com', 'crave.healthysnacks@gmail.com');         
$mail->MsgHTML("         
  <p>From: ".ucwords($name)."</p>
  <p>Message: ".$_POST['msg']."</p>
  ");

$send = $mail->Send(); 

if($send){
  echo 'success';
  }

?>

             