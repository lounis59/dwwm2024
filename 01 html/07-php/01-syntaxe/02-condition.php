<?php 
$r = rand(0,100);
echo $r,"<br>";

if($r < 50){

    echo '$r est plus petit que 50. <br>';
}
// peut s'ecrire "elseif" ou "else if"
else if ($r>50){
    
    echo '$r est plus grand que 50. <br>';
}
else{
    
    echo '$r vaut 50. <br>';
}

// On peut encapsuler du HTML dans une condition (ou une boucle php)
if($r > 50){
    ?>
<p>$r est plus grand que 50 !</p>
<?php 
}

echo "<h2>Autre syntaxe possible :</h2> <hr>";
/* 
    On peut oublier les acolade et ajouter ":" apres le mot clef
    puis treminer la condition avec "endif"
*/
if($r < 50):
    echo '$r est plus petit que 50. <br>';
elseif($r > 50):    
    echo '$r est plus grand que 50. <br>';
else:
    echo '$r vaut 50. <br>';
endif;

/* 
Et onretrouve aussi les condition pour une seule instruction 
*/

if($r < 50)
    echo '$r est plus petit que 50. <br>';
elseif($r > 50)    
    echo '$r est plus grand que 50. <br>';
else
    echo '$r vaut 50. <br>';

// Les ternaires sont de retour :
echo '$r est plus '.($r<=50? "petit ou egal a":"grand que")." 50.<br>";
// Verifier l'existance d'une variable :
    echo $nonDefinie ?? "La variable precedante n'existe pas";
// parfois on peut vouloir faire certains actions selon si une variable est défini ou non:
$message1 = "Bonjour le monde <br>";
echo $message1 ?? "rien à dire <br>";
echo $message2 ?? "rien à dire <br>";
// si la variable existe alors on la choisi, sinon on prend la valeur après les "??";
#------------------------------------------------------------------------------------
echo "<h1>switch.</h1> <hr>";
$pays = ["France", "Japon", "Angleterre", "Suisse", "france"];
$r2 = rand(0,count($pays)-1);
echo $pays[$r2], "<br>";
// le switch permet de gérer des cas précis.
switch($pays[$r2]){
    // la valeur donné en argument sera évalué et switch lancera le cas correspondant
    case "Japon":
        echo "Second pays où la cuisine est réputé";
        // chaque cas doit finir par un "break" sinon il enchaînera avec les instructions du cas suivant.
        break;
    case "Suisse":
        echo "Pays où tous ne parlent pas la même langue";
        break;
    case "France":
    case "france":
        // il est possible ainsi d'avoir deux cas faisant la même action.
        echo "Pays de la cuisine !";
        break;
    default:
        // default se lancera si aucun des cas ne correspond.
        echo "Je ne vais pas détailler tous les pays";
}

?>