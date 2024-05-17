<?php
    if(session_status()===PHP_SESSION_NONE)
    {
        session_start();
    }
    /**
     * Verifie si l'utilisateur est connecte ou non et le redirige dans le cas contraire
     * 
     * Si le boolean est a true verifie si l'utilisateur est connecte 
     * Si le boolean est a false verifie si l'utilisateur est deconnecte
     *
     * @param boolean $logged
     * @param string $redirect
     * @return void
     */
    function shouldBeLogged(bool $logged = true,string $redirect = "/"):void{
    if($logged){
            // Est ce qu'un temp d'expiration est parmetre en session
        if(isset($_SESSION["expire"])){
            // Est ce que le temp est expire
            if(time() > $_SESSION["expire"]){
                unset($_SESSION);
                session_destroy();
                setcookie("PHPSESSID","",time()-3600);
            }
        }else{
            // Sinon on renouvelle pour une heure 
            $_SESSION["expire"] = time() + 3600;
        }
        // Si l'utilisateur n'est pas connecte on le redirige :
        if(!isset($_SESSION["logged"]) || $_SESSION["logged"] !==true){
            header("Location: $redirect");
            exit;
        }
    }else
    {
        // Si l'utilisateur doit etre deconnecte pour acceder a la page :
        if(isset($_SESSION["logged"]) && $_SESSION["logged"] === true){
            header("Location: $redirect");
            exit;
        }
    }
    }
    
?>