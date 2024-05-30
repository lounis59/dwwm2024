<?php
require __DIR__."/../../ressources/service/_pdo.php";

function newMessage (){

        $pdo = connexionPDO();
        $newMessage = $pdo->prepare("INSERT INTO message ( message, idUser) VALUES ( :mess, :id)");
        $newMessage->execute(["mess"=>$_POST["message"],"id"=>$_SESSION["idUser"]]);
}