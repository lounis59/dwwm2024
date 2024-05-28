<?php
require "../../../ressources/service/_pdo.php";
require "../../../ressources/service/_shoulBeLogged.php";

shouldBeLogged(true, "./create.php");
if(!empty($_GET["id"])){
    $pdo = connexionPDO();
    $requete = $pdo->prepare("SELECT * FROM message WHERE idMessage= ?");
    $requete->execute([$_GET["id"]]);
    $message = $requete->fetch();
}
if(!isset($_SESSION["idUser"],$message["idUser"])|| $_SESSION["idUser"] != $message["idUser"])
{
    header("Location: ./read.php?id=".$_SESSION["idUser"]);
    exit;
}
// if(!$_SESSION["idUser"])
    if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['updateMessage']))  {
    $modifMess = $pdo->prepare("UPDATE message SET message = :mess WHERE idMessage = :idmess ");
    $modifMess->execute(["mess"=>$_POST["updateMessage"],"idmess"=>$_GET["id"]]);
    header("Location: ./read.php?id=".$_SESSION["idUser"]);
}
?>
<form action="" method="post">
    <label for="updateMessage">Modifier votre message ici :</label>
    <input type="text" name="updateMessage" id="updateMessage">
    <input type="submit" value="Modifier">
</form>
<?php


?>