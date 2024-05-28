<?php
require "../../../ressources/service/_pdo.php";
session_start();


if(empty($_GET["id"]))
{
    header("Location: /");
    exit;
}
if(isset($_GET["id"]))
{
    $pdo = connexionPDO();
    $message = $pdo->prepare("SELECT * FROM message WHERE idUser = :id");
    $message->execute(["id"=>$_GET["id"]]);
    $allMessage = $message->fetchAll();
    if(!empty($allMessage))
    {
        
        foreach($allMessage as $mess){
            echo "<p>". htmlspecialchars($mess["message"])."</p>".' <a href="./update.php?id='. $mess["idMessage"].'">update</a> '.' <a href="./delete.php?id='. $mess["idMessage"].'">delete</a>';
        }
    }else
    {
        echo "<p> Vous n'avez pas de message enregistrer </p>";
    }
    
    if(isset($_SESSION["flash"]))
    {
        $flash = $_SESSION["flash"];
        unset($_SESSION["flash"]);
        echo $flash;
    }
    ?>
    <hr>
    <form action="./create.php" method="post">
        <label for="message">Nouveau message :</label>
        <input type="text" name="message" id="message">
        <input type="submit" value="enregistrer">
    </form>
    <?php


}
?>