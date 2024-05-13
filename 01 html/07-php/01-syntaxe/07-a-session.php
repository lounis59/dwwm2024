<?php
    /* 
        Lorsque l'on souhaite utiliser la session 
        Il faut toujour la commencer par la demarrer avec :
            session_start();
        !Attention : On ne doit commencer une session , qu'avent tout affichage HTML
    */
    session_start();

    $title="Session page 1";
    require  "../ressources/template/_header.php";
    
    /* 
        Lorsque l'on lance cette fonction ,
        Si aucune session n'existe elle en cree une sinon elle recupere celle existante

        Lorsqu'une session est cree elle possede un id pour la diferencier des autre 
        Et celui ci est partage au navigateur de l'utilisateur via un cookie nomme par defaut "PHPSESSID"

        On pourra recuperer l'id de session via "session_id()"
    */
    var_dump(session_id());
    /* 
        Pour sauvegarder ou reccupêrer des information en session 
        On peut tout simplement utiliser la superglobal "$_SESSION"

        Celle ci est un tableau associatif pouvant contenir tout type de donnees  
    */
    $_SESSION["username"]="Maurice";
    $_SESSION["panier"]=["boule de petanque","quille de bowling"];
    $_SESSION["logged"]=true;
?>
<hr>
<a href="./07-b-session.php">Page 2</a>
<?php
    require "../ressources/template/_footer.php"
?>