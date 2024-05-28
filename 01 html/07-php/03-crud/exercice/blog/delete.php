<?php
require "../../../ressources/service/_pdo.php";
require "../../../ressources/service/_shoulBeLogged.php";

shouldBeLogged(true, "./read.php");

if(!empty($_GET["id"])){
    $pdo = connexionPDO();
    $requete = $pdo->prepare("SELECT * FROM message WHERE idMessage= ?");
    $requete->execute([$_GET["id"]]);
    $message = $requete->fetch();
}
if(!isset($_SESSION["idUser"],$message["idUser"])|| $_SESSION["idUser"] != $message["idUser"])
{
    header("Location: ./read.php");
    exit;
}

$pdo = connexionPDO();
$deleteMess = $pdo->prepare("DELETE from message WHERE idMessage = :id ");
$deleteMess->execute(["id"=>$_GET["id"]]);
$_SESSION["flash"] = "Votre message a bien eter suprimer";

header("Location: ./read.php?id=".$_SESSION["idUser"]);

?>