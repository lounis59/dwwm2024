<?php
require __DIR__."/../../ressources/service/_shoulBeLogged.php";
require __DIR__."/../model/messageModel.php";



function createMessage(){

    shouldBeLogged(true, "/05-mvc/user/connexion");
    
    if(isset($_POST["message"]))
    {
        newMessage();
        $_SESSION["flash"] = "Votre message a bien eter creer";
        header("Location: /05-mvc/user/messageRead?id=".$_SESSION["idUser"]);
    
    }
    require __DIR__."/../view/user/messageCreate.php";
    
}

function readMessage(){

    $allMessage = readUserMessage();
    require __DIR__."/../view/user/messageRead.php";
}

function updateMessage(){
    
    updateUserMessage();
    require __DIR__."/../view/user/messageUpdate.php";
}