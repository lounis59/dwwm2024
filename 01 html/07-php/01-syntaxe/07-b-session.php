<?php
    /* 
        Dans uneapplication complexe il est possi ble d'avoir plusieur session_start()

        Une notice apparait alors et nous indique que le second "session_start()" a ete ignorer

        Pour evite cela on peut conditionner nos session start avec les constente suivante :
            PHP_SESSION_NONE (il n'y a pas de session)
            PHP_SESSION_DISABLED (les session sont desactive)
            PHP_SESSION_ACTIVE (il y a une session demarree)
        On comparera cela a "session_statuts()" pour obtenir le status actuel de la session

        Par defaut la session prend fin quand le navigateyr est ferme mais si on souhaite le faire perdurer plus longtemp on peut lui passer une duree de vie en option
    */
    session_start([
        // Duree de vie en seconde par defaut 0
        "cookie_lifetime"=>60
    ]);
    if (session_status()===PHP_SESSION_NONE){

        session_start();
    }

    $title="Session page 2";
    require  "../ressources/template/_header.php";
    /* 
        isset retourne un boolean indiquant si ce qui lui a ete fourni en argument existe ou non
    */
    if(isset($_SESSION["logged"],$_SESSION["panier"],$_SESSION["username"])){
        echo "<p> Bonjour {$_SESSION["username"]}</p>";
        echo "Panier : <ul>";
        foreach($_SESSION["panier"] as $product){
            echo "<li>$product</li>";
        }
        echo"</ul>";
    }else{
        echo"<p>Veuillez passer par la page 1 d'abbord</p>"; 
    }
    /* 
        Si on souhaite suprimer unbe donner de la session 
        On pourra le faire comme pour suprimer un element d'un tableau assiociatif 
        avec unset() 
    */
    unset($_SESSION["panier"]);
    /* 
        Si on souhaite supprimer toute  la session 
        on commencera par "session_destroy()"
    */
    session_destroy();
    /* 
        La session est detruite mais jusqu'au prochain rechargement la variable "$_SESSION" existe toujours
        Par securite on va la supprimer aussi
    */
    unset($_SESSION);
    /* 
        La session est suprimer la superglobal aussi mais le cookie reste toujour present pour le suprimer on lui donnera une duree de vie negative:  
    */
    setcookie("PHPSESSID","",time()-3600);
    /* 
        Un message de warning est cree car nous avon notre header qui est modifie (modification de cookie qui sont envoye dans le headers)
        alors du HTML est dejat generer
        Dans un cas normal il faudrait faire cela avent l'affichage de tout html
    */
    
?>

<a href="./07-a-session.php">Page 1</a>
<?php
    require "../ressources/template/_footer.php"
?>