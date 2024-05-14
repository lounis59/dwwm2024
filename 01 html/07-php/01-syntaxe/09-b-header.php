<?php
/* 
    refresh: permet de reactualiser la page au bout de quelque seconde 
    Si on ajoute url= separe par ";"
    nous pouvon creer une redirection apres quelque seconde 
*/
header("refresh: 5; url= 09-a-header.php");
/* 
    En second parametre on peut indiquer un bopolean qui vaut "true" par defaut
    Celui ci indique si le header doit remplacer le precedent ou s'y ajouter 
    En troisieme argument , on peut modifier le code de status ( seulemnt si le header n'est pas vide )
*/
$title = "Header page 2";
    require "../ressources/template/_header.php";
?>
<h1>Bienvenue sur la page 2... temporairement . </h1>
<?php
require "../ressources/template/_footer.php";
?>