<?php
/* 
    La seule difference entre un formulaire en get et post est que l'on va recuperer les donnees du formulaire via $_POST
    que notre formulaire aura en attributs "method" la valeur "post"
    Et que l'on verifira avant la verification que l'on arrive bien en methode post

    comme ce cours serait dejat fini si on s'arreter la la ameliorons notre formulaire :
        1. On va transformer nos tableaux de donnees en tableau associatif
        2. faire apparaitre nos option et radio avec une boucle
        3ajouter une classe "formError a certaine de nos balise 
        4. ajouter une case a cocher pour valider le formulaire
        5. faire que nos utilisateur n'ai pas a remplir a nouveaux les champ en cas d'erreur 
*/
$username = $food = $drink = "";
$error = [];
# Liste des boisson et repas selectionnable :
$foodList = [
    "welsh" => "Welsh (car vive le fromage) ",
    "cannelloni" => "Cannelloni (car les raviolie c'est sur fait)",
    "oyakodon" => "Oyakodon (car j'aime l'humour noir)"
];
$drinkList = [
    "jus de tomate"=>"Jus de tomatte (pour les vampire)",
    "milshake"=>"Milkshake (aux fruit depreference)",
    "limonade"=>"Limonade (J'ai besoin de sucre)"
];

/* 
    Lorsque l'on traite un formulaire la premiere chose a verifier est que l'on a bien methode attendue (post,post...)
    Pour cela on utilisera la superglobal "$_SERVER" avec la  clef "REQUEST_METHOD"
    ! Attention la methode est donnee en majuscule 

    La methode post etant aussi celle que l'on utilise pour aller a notre page par defaut c'est simpla verification n'est pas suffisante 
    Je pourrais aussi verifier qu'un des champ est aussi envoye ou alor ajouter un "name" a mon bouton d'envoie par exemple

    Pour verifier l'existence d'une donnees envoye en post je pourrais utiliser la superglobal $_POST
*/
if($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["meal"]))
{
    #Verification du champ username :
    if(empty($_POST["username"])){
        // Si mon champ username est vide je prepare un message d'erreur
        $error["username"]="Veuiller entrer un nom d'utilisateur ";
    }else{
        // Si j'ai un nom d'utilisateur e vais traiter la donnee :
        $username = $_POST["username"];
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
    if(empty($_POST["food"]))
    {
        $error["food"] = "Veuillez choisir un repas !";

    }else{
        $food = $_POST["food"];
        // On change in_array par array_key_exists car nous voulont verifier les clef de nos tableaux assiosiatif
        if(!array_key_exists($food,$foodList))
        {
            $error["food"] = "Ce repas n'existe pas !";
        }
    }
    if(empty($_POST["drink"]))
    {
        $error["drink"] = "Veuillez choisir une boisson !";

    }else{
        $drink = $_POST["drink"];
        // Si la donnee envoye ne corespond pas a ma liste le provoque une erreur 
        if(!in_array($drink,$drinkList))
        {
            $error["drink"] = "Cette boisson n'existe pas !";
        }
    }
    if(empty($_POST["cgu"]))
    {
        $error["cgu"]= "Veuillez accepter nos condition d'utilisation";
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

$title = " POST ";
require("../ressources/template/_header.php");
?>
<form action="" method="POST">
    <input 
    type="text" 
    placeholder="Entrez un nom"
     name="username"
     class="<?= empty($error["username"])?"":"formError"?>"
    value="<?= $username?>">
    <!-- les span.error serviront à afficher les messages d'erreur. -->
    <span class="error"><?php echo $error["username"]??""?></span>
    <br>
    <fieldset>
        <legend>Nourriture favorite</legend>
        <?php foreach($foodList as $key => $value):?>
            <input type="radio" name="food" id="<?= $key?>" value="<?= $key?>" <?= $food === $key?"checked":""?>>
            <label for="<?= $key?>"><?= $value?></label>
        <?php endforeach;?>
        <span class="error"><?= $error["food"]??""?></span>
    </fieldset>
    <label for="boisson">Boisson favorite</label>
    <br>
    <select name="drink" id="boisson">
        <?php foreach($drinkList as $clef => $text):?>
            <option value="<?= $clef?>"<?= $drink === $clef?"selected":""?>><?= $text?></option>
        <?php endforeach?>
    </select>
    <span class="error"><?= $error["drink"]??""?></span>
    <br>
    <input type="checkbox" name="cgu" id="cgu">
    <label for="cgu">J'accepte de vendre mon ame</label>
    <span class="error"><?php echo $error["cgu"]??""?></span>
    <br>
    <input type="submit" value="Envoyer" name="meal">
</form>
<?php if(empty($error)&& isset($_POST["meal"])):?>
    <h2>meilleur repas :</h2>
    <p>
        <?php echo "Pour $username, le meilleur repas est \"$food\" avec \"$drink\"";?>
    </p>
<?php 
endif;
require("../ressources/template/_footer.php");
?>