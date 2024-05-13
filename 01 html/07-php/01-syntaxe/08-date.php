<?php
    $title = "les dates";
    require "../ressources/template/_header.php";
    // Permet de parametrer la timezone le string doit etre "continent/capital" en anglais
    date_default_timezone_set("Europe/Paris"); 
    // Si onsouhaite recuperer le timestemp actuel :
    echo time(), "<br>";

    /* 
        Pour obtenir la date actuel , on utilisera la fonction date()
        Celle ci peut prendre Un ou deux arguments 
        Le premier est un string sur lequel on reviendra juste aprer 
        Le second optionnel est un time stamp
        
        Si on ne lui fourni pas le second la date utiliser sera celle actuelle 
        Si on lui en fourni un il indiquera la date du timestemp fourni 
    */
    echo date("");
    /* 
        Les information qui vont etre retournee par date() sont dependante du string qui est fourni
        Si il est vide aucune information est retournee

        Les lettre indique dans le string correspond chacun a une information (majuscule et minuscule sont differente );

    */
    /* 
        d = numero du jour du mois
        m = numero du mois avec le 0
        Y = Annee sur 4 chiffres
    */
    echo date("d/m/Y"),"<br>";
    /* 
        j = numero du jour sans le zero
        n = numeo du mois sans le zera
        y = Annee sur 2 chiffres
    */
    echo date("j/n/y"),"<br>";
    /* 
        D = nom du jour sur 3 lettre
        l = nom du jour complet
        M = nom du mois sur 3 lettre
        F = nom du mois complet
    */
    echo date("D = l / M = F"),"<br>";
    
    
    /* 
        N = numero du jour de la semaine avec dimanche = 7
        w = numero du jour de la semaine avec dimanche = 0
    */
    echo date("D = N = w"),"<br>";
    /* 
        z = numero du jour dans l'anne avec 1er janvier = 0
        W = numero de la semaine dans l'annee
    */
    echo date("z -> W"),"<br>";
    /* 
        t = le nombre de jour dans le mois
        L = boolean indiquant si l'annee est bissextile
    */
    echo date("F -> t / Y -> L"),"<br>";
    /* 
        h = l'heure ne format 12 avec 0
        i = les minute avec 0
        s = les seconde avec 0
        a = "am" ou "pm"
    */
    echo date("h:i:s a"),"<br>";
    /* 
        g = l'heure en format 12h sans 0
        A = "AM" ou "PM"  
    */
    echo date("g:i:s A"),"<br>";
    /* 
        H = l'heure en format 24h avec 0
        v = millisecondes avec 0
        G = l'heure ne format 24 sans 0
        * Les millisecondes ne sont gerer par defaut par date()
          
    */
    echo date("H:i:s:v / G:i:s"),"<br>";
    /* 
        O =
        P =
        Z =
        I =
    */
    echo date("O = P = Z -> I"),"<br>";
    // date complete au format ISO 8601
    echo date("c"), "<br>";
    //  date complete au format RFC 2822
    echo date("r"), "<br>";
    require "../ressources/template/_footer.php";
?>