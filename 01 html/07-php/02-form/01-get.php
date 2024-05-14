<?php
/* 
    Quelque conventions :
        1. Quand on place toute notre logique php dans le meme fichier que notre html
        On placera souvent toute notre logique en hau du fichier avent le HTML
        2. On aura tendence a declarer toute les variable que l'on va utiliser en haut de notre code afin de s'en souvenir et de pouvoir les modifier sans avoir a les chercher 
*/
$username = $food = $drink = "";
$error = [];
# Liste des boisson et repas selectionnable :
$foodList = ["welsh","cannelloni","oyakodon"];
$drinkList = ["jus de tomate","milshake","limonade"];

/* 
    Lorsque l'on traite un formulaire la premiere chose a verifier est que l'on a bien methode attendue (get,post...)
    Pour cela on utilisera la superglobal "$_SERVER" avec la  clef "REQUEST_METHOD"
    ! Attention la methode est donnee en majuscule 

    La methode get etant aussi celle que l'on utilise pour aller a notre page par defaut c'est simpla verification n'est pas suffisante 
    Je pourrais aussi verifier qu'un des champ est aussi envoye ou alor ajouter un "name" a mon bouton d'envoie par exemple

    Pour verifier l'existence d'une donnees envoye en get je pourrais utiliser la superglobal $_GET
*/
if($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["meal"]))
{
    #Verification du champ username :
    if(empty($_GET["username"])){
        // Si mon champ username est vide je prepare un message d'erreur
        $error["username"]="Veuiller entrer un nom d'utilisateur ";
    }else{
        // Si j'ai un nom d'utilisateur e vais traiter la donnee :
        $username = $_GET["username"];
        /* 
            L'utilisation de htmlspecialchars ou htmlentities evitera les attaque XSS
        */
        $username = htmlspecialchars($username);
        # par defaut trim retire les espace avant et apres le string  
        $username = trim($username);
        # retire les "\" present dans le string 
        $username = stripslashes($username);
        // Ensuite toute les verification qu'on souhaite imposer au nom d'utilisateur :
            if(strlen($username) <3 || strlen($username) > 255){
                $error[$username] = "Votre nom d'utilisateur n'a pas une taille adapter ";
            }
            // Si on souhaite le faire passer par une regex on utilisera :
            if(!preg_match("/^[a-zA-Z'\s-]*$/",$username)){
                $error["username"] = "Votre nom contient des characteres illicite";
            }

    }
    // Verification du champ food
    if(empty($_GET["food"]))
    {
        $error["food"] = "Veuillez choisir un repas !";

    }else{
        $food = $_GET["food"];
        // Si la donnee envoye ne corespond pas a ma liste le provoque une erreur 
        if(!in_array($food,$foodList))
        {
            $error["food"] = "Ce repas n'existe pas !";
        }
    }
    if(empty($_GET["drink"]))
    {
        $error["drink"] = "Veuillez choisir une boisson !";

    }else{
        $drink = $_GET["drink"];
        // Si la donnee envoye ne corespond pas a ma liste le provoque une erreur 
        if(!in_array($drink,$drinkList))
        {
            $error["drink"] = "Cette boisson n'existe pas !";
        }
    }

    /* 
        Une fois tous les champ verifies
        On peut verifier qu'aucune erreur n'a ete detecter :
    */
    if(empty($error))
    {
        /* 
            On pourais envoyer les donnees en BDD ici mais onvera cela dans un prochain cours
        */
    }
}

$title = " GET ";
require("../ressources/template/_header.php");
?>
<form action="" method="GET">
    <input type="text" placeholder="Entrez un nom" name="username">
    <!-- les span.error serviront à afficher les messages d'erreur. -->
    <span class="error"><?php echo $error["username"]??""?></span>
    <br>
    <fieldset>
        <legend>Nourriture favorite</legend>
        <input type="radio" name="food" id="welsh" value="welsh"> 
        <label for="welsh">Welsh (car vive le fromage)</label>
        <br>
        <input type="radio" name="food" id="cannelloni" value="cannelloni"> 
        <label for="cannelloni">Cannelloni (car les ravioli c'est surfait)</label>
        <br>
        <input type="radio" name="food" id="oyakodon" value="oyakodon"> 
        <label for="oyakodon">Oyakodon (car j'aime l'humour noir)</label>
        <span class="error"><?= $error["food"]??""?></span>
    </fieldset>
    <label for="boisson">Boisson favorite</label>
    <br>
    <select name="drink" id="boisson">
        <option value="jus de tomate">jus de tomate (je suis un vampire)</option>
        <option value="milkshake">Milkshake (aux fruits de préférence)</option>
        <option value="limonade">Limonade (J'ai besoin de sucre)</option>
    </select>
    <span class="error"><?= $error["drink"]??""?></span>
    <br>

    <input type="submit" value="Envoyer" name="meal">
</form>
<?php if(empty($error)&& isset($_GET["meal"])):?>
    <h2>meilleur repas :</h2>
    <p>
        <?php echo "Pour $username, le meilleur repas est \"$food\" avec \"$drink\"";?>
    </p>
<?php 
endif;
require("../ressources/template/_footer.php");
?>