<?php
require __DIR__."/../../ressources/service/_shoulBeLogged.php";
require __DIR__."/../../ressources/service/_csrf.php";
require __DIR__."/../model/userModel.php";
/**
 * Gere la page d'incription
 *
 * @return void
 */
function createUser(){

    shouldBeLogged(false, "/05-mvc");

    $usename = $email = $password = "";
    $error = [];
    $regexpass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";

    if($_SERVER['REQUEST_METHOD'] === 'POST' &&isset($_POST['inscription']))
    {
        // Traitemne t de username
        if(empty($_POST['username']))
        {
            $error["username"] = "Veuillez entre un nom d'utilisateur";
        }else
        {
            $username = cleanData($_POST["username"]);
            if(!preg_match("/^[a-zA-Z'\s-]{2,25}$/",$username))
            {
                $error["username"] = "Veuillez saisir un nom d'utilisateur valide";
            }
        }
        // Traitement de l'email :
        if(empty($_POST["email"]))
        {
            $error['email'] = "Veuillez saisir un email";
        }else
        {
            $email = cleanData($_POST["email"]);
            if(!filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                $error["email"] = "Veuillez entrer une adresse email valide";
            }
            // On verifie si l'email est dejat enregistre
            $resultat = getOneUserByEmail($email);
            if($resultat)
            {
                $error["email"] = "Cet email est dejat enregistre";
            }
        }
        // Traitement du mot de passe
        if(empty($_POST["password"]))
        {
            $error["password"] = "Veuillez saisir un mot de passe";
        }
        else
        {
            $pasword = trim($_POST["password"]);
            if(!preg_match($regexpass,$password))
            {
                $error["password"] = "Veuillez saisir un mot de passe valide";
            }
            else
            {
                $password = password_hash($password, PASSWORD_DEFAULT);
            }
        }
        // Traitement de la comfirmation de mot de passe :
        if(empty($_POST["passwordBis"]))
        {
            $error["passwordBis"] = "Veuillez saisir a nouveau votre mot de passe";
        }elseif($_POST["password"] != $_POST["passwordBis"])
        {
            $error["passwordBis"] = "Veuillez saisir le meme mot de passe";
        }

        if(empty($error))
        {
            // On ajoute l'utilisateur en BDD
            addUser($username,$email,$password);
            header("Location: /05-mvc");
            exit;
        }
    } // Fin traitement de formulaire
    // Inclure la vue 
    require __DIR__."/../view/user/inscription.php";
}
/**
 * Gere la page "liste d'utilisateur"
 *
 * @return void
 */
function readUsers(){
    // Je recupere tous mes utilisateur 
    $users = getAllUsers();
    // Je verifie l'existence de message flash
    if(isset($_SESSION["flash"]))
    {
        $flash = $_SESSION["flash"];
        unset($_SESSION["flash"]);
    }
    // J'inclu ma vue
    require __DIR__."/../view/user/list.php";
    

}
/**
 * Gere la page "mise a jour de l'utilisateur"
 *
 * @return void
 */
function updateUser(){

    shouldBeLogged(true, "05-mvc");
    // On verifie que l'id en get correspond a celui de l'utilisateur connecte
    if(empty($_GET["id"] || $_SESSION["idUser"] != $_GET["id"]))
    {
        header("Location: /05-mvc");
        exit;
    }
    // Je recuperre les information de mon utilisateur 
    $user = getOneUserById((int)$_GET["id"]);

    $username = $password = $email = "";
    $error = [];
    $regexpass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";

if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update']))
{
    // Traitement de l'username 
    if(empty($_POST["username"]))
    {
        $username = $user["username"];
    }
    else
    {
        $username = cleanData($_POST["username"]);
        if(!preg_match("/^[a-zA-Z'\s-]{2,25}$/",$username))
        {
            $error["username"] = "Votre nom d'utilisateur n'est pas valide";
        }
    }
    }// Fin de traitement formulaire
    if(empty($_POST["email"]) || $_POST["email"] == $user["email"])
    {
        $email = $user["email"];
    }
    else
    {
        $email = cleanData($_POST["email"]);
        if(!filter_var($email,FILTER_VALIDATE_EMAIL))
        {
            $error["email"] = "Veuillez entre un email valide";
        }
        $resultat = getOneUserByEmail($email);
        if($resultat)
        {
            $error["email"] = "Cet email existe dejat";
        }
        
        if(empty($_POST["passwordBis"]))
        {
            $error["passwordBis"] = "Veuillez saisir a nouveau votre mot de pass";
        }
        elseif($_POST["password"] != $_POST["passwordBis"])
        {
            $error["passwordBis"] = "Veuillez saisir le meme mot de passe";
        }
    }
    // Traitement du mot de passe
// J'inclu la vue:
require __DIR__."/../view/user/update.php";
}
/**
 * Gere la page "suppression de l'utilisateur"
 *
 * @return void
 */
function deleteUser(){
    shouldBeLogged(true, "/05-mvc/");
    if(empty($_GET["id"] || $_SESSION["idUser"] !=$_GET["id"]))
    {
        header("Location: /05-mvc");
        exit;
    }
    // On supprime l'utilisateur :
    deleteUserById((int)$_GET["id"]);
    // On deconnecte l'utilisateur
    unset($_SESSION);
    session_destroy();
    setcookie("PHPSESSID","",time()-3600);
    // Je le redirige a pres quelque seconde
    header("refresh: 5;url = /05-mvc");
    // J'inclue la vue 
    require __DIR__."/../view/user/delete.php";
}
?>