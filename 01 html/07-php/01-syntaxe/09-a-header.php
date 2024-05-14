<?php 
    /* 
       Les header sont l'entete de la requete qui est lu par le navigateur ou le serveur avent de verifier le contenue du fichier 
       
       Toute modification des header doit se faire avant l'affichage de quelconque donnees
       
       La modification doit de header peut se faire par la creation de cookie comme avec les session vu precedement 

       Mais on peut aussi utiliser la fonction "header()" pour les modifier 
       
       On pourra l'utiliser par exemple pour modifier le code statue 
        200, 300, 404...
     */
    // header("HTTP/1.1 404 Not Found");

    // pour gerer automatiquement le protocol :
    // header($_SERVEUR["SERVEUR_PROTOCOL"]."HTTP/1.1 404 Not Found");
    
    # Si on veut juste changer le code et garder le message par defaut :
    http_response_code(404);

    /* 
        On peut aussi se servir de la fonction header pour provoquer une redirection:
    */
    if(rand(0,100) < 50)
    {
        header("Location: 09-b-header.php");
        /* 
            "exit" met fin au code ,
            tout ce qui suit ne sera pas lu
            par securite on fait cela apres chaqque redirection afin d'etre sur qu'aucun code ne soit execute.
            exit a une fonction clone qui fait exactement la meme chose appele "die"
        */
        exit;
    }
    $title = "Header page 1";
    require "../ressources/template/_header.php";
?>
<h1>vous avez de la chance de me voir </h1>
<?php
require "../ressources/template/_footer.php";
?>
