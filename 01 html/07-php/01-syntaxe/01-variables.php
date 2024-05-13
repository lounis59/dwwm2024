<!-- Le code PHP par <?php ?> et ceci le termine il est comun de voir HTML et PHP dans un meme fichier -->
<?php
// Commentaire sur une seule ligne
# Autre commentaire sur une seul ligne 
/* 
        comentaire
        sur plusieur ligne
    */
/* 
        PHP signifie "PHP Hypertext Preprocessor"
        Et ce second PHP est le nom d'origine "Personal Home Page"

        ! Chaque instruction de PHP se termine par un ";"
        Un saut a la ligne ne mais pas fin a l'instruction

        Lorsque l'on veut verifier la configuration de notre serveur PHP 
        On peut utiliser la fonction "phpinfo();"
    */
//phpinfo();
/* 
        Par defaut tout ce qui est ecrit en PHP n'est pas visible en HTML

        Pour afficher quelque chose en HTML il faudra utiliser une des nombreuse fonction d'ecriture de PHP

        La plus comune etant "echo" qui n'a d'ailleur pas besoin de parenthese ell peut prendre autant d'argument que voulu 
    */
echo "machin";
echo "<h2>", "afficher du texte", "</h2>";
/* 
        Il xiste ossi la fonction print qui retournera la valeur 1 et sera un peu plus lente a l'execution
    */
print "<br> PHP !!!";
/* 
        Pour debuger on utilisera plus souvent :
    */
var_dump("Bonjour", "le monde !");
/* 
        Il existe tous un tas d'autre fonction d'affichage avec chacun leur particularites
    */

#-------------------------------------------
echo "<h2>Declaration des variables </h2> <hr>";

$banane;
/* 
        On declare une variable en PHP sans mot clef
        Elle comencera obligatoirement par un "$" puis une lettre ou "_" ensuite les chiffres sont acceptes dans son nom.
        Elles sont sensible a la casse (majuscule minuscule)

        PHP n'aime pas les variable "undefined"
    */
// var_dump($banane);
$banane = "Jaune";
echo "banane : ", $banane, "<br>";

/* 
        Pour definir une constante deux posibilite : 
        L'ancienne :
            define("nomConstante", "valeurConstante");
        La nouvelle :
            const nomConstante = valeurConstente ;
        Par convention les constante sont souvent ecrite en majuscule 

    */
define("AVOCAT", "vert");
echo "avocat : ", AVOCAT, "<br>";
const AVOCATS = "verreux";
echo "avocats : ", AVOCATS, "<br>";

/* 
        On peut definir le nom d'une variable selon la valeur d'une autre variable
        On appelera cela une variable dynamique 
    */
$chaussette = "rouge";
$$chaussette = "bleu";

echo $rouge, "<br>";
// On peut detruit une variable avec "unset();"
unset($banane);
// On peut voir toute les variable existante avec : get_defined_vars();" :
var_dump(get_defined_vars());
// Pour afficher joliement un tableau on peut ecrire :
echo "<pre>" . print_r(get_defined_vars(), 1) . "</pre>";

#-----------------------------------------------
echo "<h2>Types des variables</h2><hr>";

$num = 5;
$dec = 0.5;
$str = "coucou";
$arr = [];
$boo = true;
$null = null;
$obj = (object)[];

echo gettype($num), "<br>";
echo gettype($dec), "<br>";
echo gettype($str), "<br>";
echo gettype($arr), "<br>";
echo gettype($boo), "<br>";
echo gettype($null), "<br>";
echo gettype($obj), "<br>";

# ------------------------------------------------
echo "<h1>string</h1>";
// Un string peut etre representer par "" ou '' 
echo "bonjour", 'coucou', "<br>";

// Un instruction php n'etant arrete que par un ";" on peut tres bien faire des saut a la ligne dans nos strings
echo
"<p>
            Ceci est un 
            tres long message
        </p>";
/* 
        Pour faire de l'interpolation en PHP
        Il suffit d'integrer les variables dans le string 
        Mais cela ne fonctionne qu'avec les guillemets ""
    */
$nom = "Maurice";
$age = 54;
echo "$nom a $age ans . <br>";
echo '$nom a $age ans . <br>';
// Pour faire de la concatenation on utilisera le ".";
echo $nom . " a " . $age . " ans . <br>";
//  equilavent a $nom = $nom . " Dupont"
$nom .= " Dupont";
echo $nom, "<br>";

echo $nom[8], "<br>";
$nom[8] = "L";
echo $nom, "<br>";

#--------------------------
echo "<h2>Nombres.</h2> <hr>";

/* 
        Les nombre sont de type types 
        integer pour un nombre entier 
        double (ou float) pour un nombre a virgule 
    */
var_dump("3.14 is int ?", is_int(3.14));
echo "<br>";
var_dump("3.14 is float ? ", is_float(3.14));
/* 
        on peut recuperer le plus gros nombre gerable par PHP (et le plus petit)
        via des constentes :
    */
echo "<br>";
echo PHP_INT_MAX, "<br>", PHP_INT_MIN, "<br>";
echo PHP_FLOAT_MAX, "<br>", PHP_FLOAT_MIN, "<br>";

// Pour convertire un string ou float en integer on peut simplement le preceder de (int)
echo (int)"42chaussette", "<br>", (int)3.14, "<br>";
// evidament on va retrouver les operateur mathematique 
echo "1+1=", 1 + 1, "<br>";
echo "1-1=", 1 - 1, "<br>";
echo "2*2=", 2 * 2, "<br>";
echo "8/2=", 8 / 2, "<br>";
// modulo (reste de la division)
echo "11%3=", 11 % 3, "<br>";
// 2 puissance 4
echo "2**4=", 2 ** 4, "<br>";

// On retrouve les operateur d'assignement :
$x = 5;
$x += 2;
$x -= 3;
$x *= 4;
$x /= 2;
$x %= 3;
$x **= 2;

echo $x, "<br>";
// On retrouve aussi l'incrementation et la decrementation :
echo $x++, "-->", $x, "<br>";
echo ++$x, "-->", $x, "<br>";
echo $x--, "-->", $x, "<br>";
echo --$x, "-->", $x, "<br>";

# ---------------------------------------------------
echo "<h1>Array</h1> <hr>";
/* 
            Il y a deux facon de creer un tableau 
            L'ancienne avec la fonction "array()"
            et la nouvalle directement avec []
        */
$a = array("banane", "pizza", "avocat");
$b = ["banane", "pizza", "avocat"];
// On peut pas faire echo d'un tableau
var_dump($a, $b);
echo "<pre>" . print_r($a, 1) . "<pre>";

// Pour selectionner un element d'un tableau on indique l'index entre []:
echo "J'aime la $a[0], la $a[1] et l'$a[2]";

// Pour conaitre la taille d'un tableau on utilisera la fonction "count()"
echo count($a), "<br>";

// Pour ajouter un element a mon tableau : 
$b[] = "fraise";

/* 
            En PHP il existe de type de tableaux 
            Les tableau classique indexe par des chiffres 
            Et les tableaux assosiatif (assosiative array) dont 'lindex chiffre est remplacer par une clef nominative (un string)
        */
$person = ["prenom" => "Maurice", "age" => 54];
// Si je veux afficher les donne j'utilise le nom de mais clefs :
echo $person["prenom"] . " a " . $person["age"] . " ans <br>";

// Les tableaux peuvent etre multidimentionnel :
$person["loisir"] = ["petanque", "bowling"];
// On accolera les different crochet pour afficher ces donnees :
echo $person["loisir"][0], "<br>";
// Supprimer un élément d'un tableau
unset($person["age"]);
echo '<pre>' . print_r($person, 1) . '</pre>';

// Cela ne pose aucun problème pour un tableau associatif mais pour un tableau indexé par des nombres :
unset($b[1]);
var_dump($b);
echo "<br>";
// Pour corriger la disparition de l'index 1, deux solutions :
// array_values va créer un nouveau tableau avec les même valeurs :
$b = array_values($b);
var_dump($b);
echo "<br>";
// Soit on supprimera l'élément avec array_splice :
array_splice($a, 1, 1);
// Cette fonction supprime un élément du tableau en premier argument, à la position en second argument, sur une longueur donnée en troisième.
var_dump($a);
// On pourra trier un tableau avec sort ou ses dérivés
sort($a);
/* 
    rsort() trier par ordre décroissant :
    pour tableau associatif :
        asort() trier par ordre croissant des valeurs
        ksort() trier par ordre croissant des clefs
        arsort() trier par ordre décroissant des valeurs
        krsort() trier par ordre décroissant des clefs
*/
# --------------------------------------------------
echo "<h2>Boolean</h2> <hr>";
/* 
    Les booleans ne peuvent être que "true" ou "false"
    Ils peuvent être récupéré par les même comparateurs que JS
        <, >, <=, >=, ==, ===, != (ou <>), !== 

    "and" peut s'écrire de deux façons :
*/
var_dump(true and false);
var_dump(true && false);
// De même pour "or"
var_dump(true or false);
var_dump(true || false);

// En php il existe aussi "xor"
var_dump(true xor true);
// vrai uniquement si l'un des deux est vrai. (mais pas les deux)
var_dump(!true);
#---------------------------------------------
echo "<h1>Les variables super globals</h1><hr>";

/* 
        Les variables super global sont des variables predefinie accessible n'importe ou dans le code 

        $GLOBALS
        stocks toute les variables globals definies (par vous ou php)

        $_SERVER
        Contient les information liees au serveur et a la requete

        $_REQUEST
        contien les meme information que $_POST,$_GET et $_COOKIE

        $_POST
        Contien toute les donnees envoye en method POST

        $_GET
        Contien toute les donnee envoye en method GET

        $_FILES
        Contien toute les information des fichier televerses

        $_ENV
        Contient les variables d'environnement
        
        $_COOKIE
        Contient toute les information des cookies

        $_SESSION
        Contient toute les informations stocke en session
*/
echo '<pre>'.print_r($_ENV,1).'<pre>';


?>