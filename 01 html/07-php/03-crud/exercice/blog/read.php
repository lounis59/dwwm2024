<?php
require "../../../ressources/service/_pdo.php";



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
            echo "<p>". htmlspecialchars($mess["message"])."</p>".' <a href="./update.php?id='. $mess["idMessage"].'">update</a> '.' <a href="">delete</a>';
        }
    }else
    {
        echo "<p> Vous n'avez pas de messge enregistrer </p>";
    }
    ?>
    <form action="./create.php" method="post">
        <label for="message">nouveau message</label>
        <input type="text" name="message" id="message">
        <input type="submit" value="enregistrer">
    </form>
    <?php


}
?>