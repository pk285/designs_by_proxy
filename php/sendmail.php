<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = 'Message from Designs By Proxy contact form';
$content = "From: $name\n Email: $email\n Message: $message";
$recipient = "designsproxy@gmail.com";
$mailheader = "From: noreply@designsbyproxy.com \n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Email sent!";
?>