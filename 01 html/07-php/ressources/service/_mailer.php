<?php

/* 
    PHPMailer est la bibliotheque d'envoi de mail la plus populaire chez php
    Elle peut s'installer avec composer via :
        * composer require phpmailer/phpmailer
*/

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/../../vendor/autoload.php";

function sendMail(string $from,string $to,string $subject,string $body):string
{
    /* 
        On cree un nouvel objet PHPMailer
        L'argument a true permet d'activer les exceptions (type d'erreur)
    */
    $mail = new PHPMailer(true);
    try
    {
        /* 
            On active l'utilisation de SMTP
            (Simple Mail Transfer Protocol)
        */
        $mail->isSMTP();
        /* 
            On indique ou heberger le serveur de mail :
        */
        $mail->Host = "TODO";
        /* 
            On active l'authentification par SMTP
        */
        $mail->SMTPAuth = true;
        /* 
            On indique le port du serveur mail :
            TODO
        */
        $mail->Port = 0000;
        /* 
            On indique les identifiant du serveur de mail 
        */
        $mail->Username = "TODO";
        $mail->Password = "TODO";
        /* 
            Permet de donner de nombreux detail sur le deroulement de la requete
        */
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        /* 
            Quel type de chiffrement sera utilise pour envoyer les mails  
        */
        // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        /* 
            Indique l'expediteur de mail
        */
        $mail->setFrom($from);
        /* 
            permet d'ajouter une adresse mail auquel envoyer l'email
        */
        $mail->addAddress($to);
        /* 
            On trouvera aussi :
                - addReplyTo
                - addCC
                - addBCC
                - addAttachment
            
            Indique le format du mail est en HTML
        */
        $mail->isHTML(true);
        /* 
            Indique le sujet du mail 
        */
        $mail->Subject = $subject;
        /* 
            Indique le corp de l'email (le message )
        */
        $mail->Body = $body;
        /* 
            On peut aussi ajouter un "AltBody" dans le cas ou le gestionaire de mail ne gere pas le html 

            Envoi le mail 
        */
        $mail->send();
        return "message envoye";

    }catch(Exception $e)
    {
        return "Le messsage n'a pas pu etre envoye Mailer Error :
        {$mail->ErrorInfo}";
    }
}
?>