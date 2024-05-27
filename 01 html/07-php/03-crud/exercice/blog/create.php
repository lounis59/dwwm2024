<?php
require "../../../ressources/service/_shoulBeLogged.php";
require "../../../ressources/service/_pdo.php";

shouldBeLogged(true, "../connexion.php");

if(isset($_POST["message"]))
{
    $pdo = connexionPDO();
    $newMessage = $pdo->prepare("INSERT INTO message ( message, idUser) VALUES ( :mess, :id)");
    $newMessage->execute(["mess"=>$_POST["message"],"id"=>$_SESSION["idUser"]]);
    header("Location: ./read.php");

}
?>