<?php 
    $title = "Go to";
    require "../ressources/template/_header.php";
    
    /* 
        Le go to permet de sauter une partie du code
        On peut s'en servir dans une condition ou une boucle a la facon d'un break
        ! Attention on ne peut pas : 
            entrer dans une fonction une boucle une condition avec goto
            sortir d'une fonction
            
        go to fonctionne en deux parties la premiere est une balise qui servira d'ancre a notre goto
            Elle est representer par un "unMotChoicie:"
            Et le mot clef "goto" suivi du nom d'un ancre 
    */
    for ($i=0;$i < 10;$i++)
    {
        echo "<p>Ceci est le message $i !</p>";
        if ($i ===5)
        {
            // le got indique ici que l'on sort de la boucle et saute un echo
             goto fin;
        }
    }
    echo "<p>Ce message est voué a disparaite </p>";
    //  Ici une balise pour goto que j'ai nomme "fin"
    fin:
    echo "<p> Ceci est la fin du code </p>";    
    require "../ressources/template/_footer.php";
?>