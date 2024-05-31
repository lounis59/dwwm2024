<?php
require __DIR__."/../../ressources/service/_pdo.php";

function newMessage (){

        if(isset($_SESSION["idUser"])){

                $pdo = connexionPDO();
                $newMessage = $pdo->prepare("INSERT INTO message ( message, idUser) VALUES ( :mess, :id)");
                $newMessage->execute(["mess"=>$_POST["message"],"id"=>$_SESSION["idUser"]]);
        }
}

function readUserMessage(){
        if(isset($_SESSION["idUser"])){

                $pdo = connexionPDO();
                $message = $pdo->prepare("SELECT * FROM message WHERE idUser = :id");
                $message->execute(["id"=>$_SESSION["idUser"]]);
                $allMessage = $message->fetchAll();
                return $allMessage;
        }
}
function updateUserMessage(){

        if(isset($_SESSION["idUser"])){
                $pdo = connexionPDO();
                $requete = $pdo->prepare("SELECT * FROM message WHERE idMessage= ?");
                $requete->execute([$_GET["id"]]);
                $message = $requete->fetch();
                
        }
        if(!isset($_SESSION["idUser"],$message["idUser"])|| $_SESSION["idUser"] != $message["idUser"])
{
        die;
    header("Location: /05-mvc/user/messageRead?id=".$_SESSION["idUser"]);
    exit;
}
    if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['updateMessage']))  {
        $pdo = connexionPDO();
        $modifMess = $pdo->prepare("UPDATE message SET message = :mess WHERE idMessage = :idmess ");
        $modifMess->execute(["mess"=>$_POST["updateMessage"],"idmess"=>$_GET["id"]]);
        header("Location: /05-mvc/user/messageRead?id=".$_SESSION["idUser"]);
}

}