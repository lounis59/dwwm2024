<?php
require __DIR__."/../../ressources/service/_shoulBeLogged.php";
require __DIR__."/../model/messageModel.php";



function createMessage(){

    shouldBeLogged(true, "../connexion.php");
    
    if(isset($_POST["message"]))
    {
        newMessage();
        $_SESSION["flash"] = "Votre message a bien eter creer";
        header("Location: ../read.php?id=".$_SESSION["idUser"]);
    
    }
    require __DIR__."/../view/user/messageCreate.php";
    
}

function updateMessage(){

}