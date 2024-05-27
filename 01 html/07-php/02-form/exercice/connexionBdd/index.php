<?php 
session_start();
require "../../../ressources/service/_pdo.php";

$pdo = connexionPDO();



if(isset($_SESSION["logged"]) && $_SESSION["logged"]===true)
{
    header("Location: /");
    exit;
}


if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['login']))
{
    if(empty($_POST['email'])){
        $error['email'] = "Veuillez entrez un email";
    }else{
        $email = trim($_POST['email']);
    }
    // Verification de mot de passe :
    if(empty($_POST['password'])){
        $error['password'] = "Veuillez entrez un mot de passe";
    }else{
        $pass = trim($_POST['password']);
    }
    if(empty($error)){
                /* 
            Ma requête ne contient aucune données rentrée par l'utilisateur
            Je n'ai donc pas besoin de requête préparée.
            J'utiliserais donc la methode "query" qui est executé directement.
        */
        $sql = $pdo->prepare("SELECT * FROM users WHERE email=:em");
        $sql->execute(["em"=>$email]);
        /* 
            Lorsque ma requête attend plusieurs résultats.
            J'utiliserais "fetchAll()" au lieu de "fetch()"
        */
        $user = $sql->fetch();

        if($user){
            /* 
                Un mot de passe enregistre enBDD doit etre hache
                Mais de nos jours les methode de hachage genere un hachage diferent a chaque tentive 
                On ne pourra donc pas verifier l'exactitude de notre mot de passe avec "===" 

                On n'utilisera pour cela la fonction password_verify
            */
            if(password_verify($pass, $user["password"])){
                /* 
                    Si l'email et le mot de passe sont bon alor l'utilisateur est connecte
                    Pour cela je sauvegarderais en session le fait qu'il est connecte 
                    Ainsi que les information de l'utilisateur que je souhaite reutiliser sur le diferentes page de mon site 
                    Et si je le souhaite un temps d'expiration pour la page de connexion 
                */
                $_SESSION["logged"] = true;
                $_SESSION["username"] = $user["username"];
                $_SESSION["idUser"] = $user["idUser"];
                $_SESSION["expire"] = time()+3600;
                // Il ne me reste plus qu'a le rediriger sur la page souhaite :
                header("location: /");
                exit;
            }
            else{
                $error["login"] = "Mot de passe incorrecte"; 
            }
        }
        else{
            $error["login"] = "email incorrecte";
        }
    }
}

$title = " Connexion ";
require("../../../ressources/template/_header.php");
?>
<form action="" method="post">
    <label for="email">Email</label>
    <input type="email" name="email" id="email">
    <br>
    <span class="error"><?php echo $error["email"]??""; ?></span>
    <br>
    <label for="password">Mot de passe</label>
    <input type="password" name="password" id="password">
    <br>
    <span class="error"><?php echo $error["pass"]??""; ?></span>
    <br>
    <input type="submit" value="Connexion" name="login">
    <br>
    <span class="error"><?php echo $error["login"]??""; ?></span>
</form>