<?php
require __DIR__."/../../ressources/service/_shoulBeLogged.php";
require __DIR__."/../../ressources/service/_csrf.php";
require __DIR__."/../model/userModel.php";

function userConnexion(){
    if(isset($_SESSION["logged"]) && $_SESSION["logged"]===true)
{
    header("Location: /");
    exit;
}
$email = $pass = "";
$error = [];
if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['login']))
{
    // Vérification email :
    if(empty($_POST["email"]))
    {
        $error["email"] = "Veuillez entrer un email";
    }
    else
    {
        $email = trim($_POST["email"]);
    }
    // Vérification mot de passe :
    if(empty($_POST["password"]))
    {
        $error["password"] = "Veuillez entrer un mot de passe";
    }
    else
    {
        $pass = trim($_POST["password"]);
    }  
    if(empty($error))
    {
        
        $connexion = connexionPDO();

        $sql = $connexion->prepare("SELECT * FROM users WHERE email = :em");
        $sql->execute(["em"=>$email]);

        $user = $sql->fetch();

        if($user)
        {
            /* 
                Un mot de passe enregistré en bdd doit être haché, 
                Mais de nos jours, les méthodes de hachage génère un hachage différent à chaque tentative.
                On ne pourra donc pas vérifier l'exactitude de notre mot de passe avec "==="

                On n'utilisera pour cela la fonction password_verify
            */
            if(password_verify($pass, $user["password"]))
            {
                /* 
                    Si l'email et le mot de passe sont bon,
                    alors l'utilisateur est connecté,
                    Pour cela je sauvegarderais en session le fait qu'il est connecté.
                    Ainsi que les informations de l'utilisateur que je souhaite réutiliser sur les différentes pages de mon site.
                    Et si je le souhaite un temps d'expiration pour la connexion.
                */
                $_SESSION["logged"] = true;
                $_SESSION["username"] = $user["username"];
                $_SESSION["idUser"] = $user["idUser"];
                $_SESSION["expire"] = time()+3600;
                // Il ne me reste plus qu'à le redigé sur la page souhaité :
                header("Location: /");
                exit;
            }
            else
            {
                $error["login"] = "Mot de passe incorrecte";
            }
        }
        else
        {
            $error["login"] = "email incorrecte";
        }
    }  
}
require __DIR__."/../view/user/connexion.php";
}