<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "spanhalkar@datawisecs.com";

    $email_subject = "Website Contact Form: " . $subject;

    $body = 
    "
    Name: $name
    Email: $email
    Message: $message 
    ";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $email_subject, $body, $headers)) {
        echo 'OK';
    } else {
        echo 'Unable to send email.';
    }
} else {
    echo 'Invalid request';
}
?>