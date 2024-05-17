<?php
    session_start();
    require "../ressources/service/_shoulBeLogged.php";
    shouldBeLogged();

    unset($_SESSION);
    session_destroy();
    setcookie("PHPSESSID","",time()-3600);

    header("Location: ./04/connexion.php");
    exit;
?>