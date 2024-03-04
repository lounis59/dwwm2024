"use strict";
// Commentaire sur une seule ligne
/* 
    Commentaire sur plusieur ligne
    "use strict" permet au navigateur de ne pas coriger les petite ereure qu'il pourait comprendre (ceci est optionnel)

    Une instruction (une ligne de code ) en JS peut optionellement se terminer par ";"
    Si il n'est pas present c'est le saut a la ligne qui mettra fin a l'instruction
*/
//  ? --------------------- Declaration des variables ------------------------
/* 
    il existe trois mots cle pour declarer des variables 
    Les variables peuvent contenir n'importe quelle lettre ,chiffre et autre charactere mais ne peuvent pas commencer par un chiffre

    let est le mot clef le plus conseiller pour declarer une variable
*/

let banane;
//  Pour utiliser une variable il sufit d'ecrire son nom
console.log("banane :", banane);
//  var cree des variables avec une portee plus grande (voir plus bas pour les portees)
var tomate;
/* 
    const permet de declarer des constante des variables qui ne peuvent pas changer
    Elle doivent etre definie au moment de leur declaration
    Pour donner une valur a une variable on utilise le symbole "="
*/
const cerise = 5;
// ! Erreure car on essaye de changer de valeurs a une constante
// cerise = 3;

//  On peut declarer plusieur variables d'un seul coup en le separent d'une virgule :
let a,b,c;
// ! On ne peut redeclarer une variable existante :
// let a;

// On peut definire la valeur de nos variable lors de leur declaration :
var d,e = 4,f = 5;

// ? ---------------- portee des variables ---------------------
let gLet =1;
var gVar =1;
//  desaccolade seules represente un  block separer du reste du code
{
    let hLet = 2;
    var hVar = 2;
    //  Dans un block les varible declarers hors de celui ci sont accessible 
    console.log(gLet,gVar,hLet,hVar);
} 
/* 
    Hors de mon block seule les variables declarers avec var sont accessible
    Les variables declarees avec "let" ne sont accessible qu'a leur niveau ou dans leurs decendant 
    "const" suis les meme regle que "let"
*/
console.log(gLet,gVar,/* hLet, */hVar);
{
    //  Onpeut re declarer des variables dans un block differant
    let gLet = 5 ;
    var gVar = 5;
    console.log("Dans le block :", gLet,gVar);
}
/* 
    le "var" redeclare dans le block vient remplacer la variable precedente 
    Le "let" est considerer comme une autre variable
    On recupere donc notre ancien "let" hors du block 
*/
console.log("hors du block :" , gLet, gVar);

// ? ----------------------- Type de variable -----------------------
// Si une instruction attend une suite (avec "," ou une parenthese non ferme ) alor le saut a la ligne ne met pas fin a celle ci
let num = 5,
    str = "coucou",
    bol = true,
    arr = [],
    obj = {},
    und;
    
console.log("num", typeof num);    
console.log("str",typeof str);    
console.log("bol", typeof bol);    
console.log("arr", typeof arr);    
console.log("obj", typeof obj);    
console.log("und", typeof und);

/* 
    Il existe 5 type en JS
    Les tableaux (array) et les odjets (object), bien qu'ayant un fonctionement diferent 
    Sont tous les deux de type "object"
    Certain langage differencies les nombre a virgule et entier mais pas JS

    JavaScript est un langage dit "non type" c'est a dire que lors de la declaration des variables nous n'avons pas a indiquer leur type 
    (ce qui est le cas dans les langage type)
    et que nos variable peuvent changer de type a tout moment :
*/
bol = 42;
console.log("bol MAJ :",typeof bol);

// ? --------------------- Chaine de caracteres ---------------------------
/* 
    Pour definir un string (chaine de charactere ) on pourra utiliser au choix "",'' ou ``;
    "" et `` n'ont aucune diference dans leurs utilisaton
*/
let s1 = "L'apostrophe ne pose aucun probleme ici";
let s2 = 'L\'apostrophe pose probleme ici ' ;
s1 = 'Le grand ordinateur a dit "42"';
s2 = "Le grand ordinateur a dit \"42\"";
/* 
    L'utilisation de "" ou '' peut etre utile si on a besoin de l'otre dans notre string 
    Mais si on n'a pas le choix on peut venir echapper un caractere 
    Cela signifie indiquer au code de ne pas prendre en compte ce caractere 
    Pour cela on le fais preceder de "\"
*/
s1 = "karl";
/* 
    La concatenation est le fait de fusionner au moins 2 string 
    En JS celle ci se fait avec le caractere "+"
*/
s2 ="bonjour " + s1 + " Comment va-tu ?";
console.log(s2);
/* 
    On peut obtenir le meme resultat avec l'interpolation 
    C'est le fait d'inserer du code dans un string 
    Cela ne peut etre fait en JS qu'avec les ``
    On placera le code a l'interieur de ${}
*/
let s3 = `Bonjour ${s1} Comment va-tu ?`
console.log(s3);
//  ne fonctionne pas 
console.log('bonjour ${s1} Comment va-tu ?');

/* 
    Avec "" ou '' impossible d'ecrire un string sur plusieur ligne 
    Mais c'est posible avec `` 
*/
/* s1 = "je ne peux pas 
sauter de ligne "; */
s3 = `Je peut 
    sauter des ligne`;
console.log(s3);
/* 
    Bonus :
    On peut ajouter du CSS sur un console.log
    Pour cela il faut placer "%c" au debut du string puis mettre le CSS en second parametre :
*/
console.log("%cATTENTION !!!", "color:yellow;background-color:red;font-size:3rem;");

// ? --------------------- Les nombre ------------------------
/* 
    Javascript pert en precision sur le grand nombre
    Il est possible d'espacer les nombre avec "_" pour plus lisibilite 
*/ 
console.log(9_999_999_999_999_999);
/* 
    Il peut avoir des resultat etrange avec certain nombre a virgule 
*/
console.log(0.2 + 0.1);
// Les operation standar disponible sont :
console.log(
    5+5,
    5-5,
    5*5,
    5/5,
    5%5,
    5**5
);
// % (modulo) retourn le reste de la division
// ** represente la puissance
console.log(
    5 + "5",
    5 - "5",
    5 + "banane",
    5 - "banane"
);
/* 
    Si on tente d'aditionner un chiffre et un string cela devient une concatenation 
    Si on tente de soustraire si le tring est un chiffre pas de probleme sinon il nous retourne "NaN" (not a number)
    De quel type est NaN
*/
console.log(typeof NaN);
// Il est possible si une variable ou une operation retourne un NaN avec la fonction "isNaN()"
console.log(isNaN(5-"chaussete"), isNaN(5-"1"));
// On peut representer la plus grande valeur numerique en JS par :
console.log(Infinity, -Infinity);

/* 
    Les operateur d'affectation permette de donner une valeurs a une variable 
    On a vu "="
    Mais il en existe d'autre 
*/
let n = 0;
n+=5; // equivaut a n = n+5;
n-= 2;
n*=3;
n/=4;
n%=3;
n**=2;
console.log(n);
/* 
    Il arrive souvent en developement que l'on veuille ajouter retirer 1 a une valleur 
    C'est ce qu'on appele incrementer ou decrementer 
    Cela peut se faire avec les caractere suivant :
*/
n++;// equivaut n += 1; 
n--;// equivaut n -= 1;
++n;
--n;
/* 
    Si le signe est placer apre le nombre d'origine est donne puis l'opration effectuer 
    Si il est place avent l'operation est efectuer puis le nouveau nombre est donne
*/
console.log("n++", n++, n);
console.log("n--", n--, n);
console.log("++n", ++n, n);
console.log("--n", --n, n);

n = 17;
/* 
    Javasript utilise des fonction est des metode 
    La difference etant leur placement 
    Une fonction s'ecrit directement comme "isNaN()"
    Une methode s'ecrit a la suite d'un "." console.log()
    
    La methode ".toString()" permet de transformer un nombre en string
*/
console.log(n , n.toString());
//  On peut obtionelement ajouter un parametre pour changer la base mathematique :
console.log(n,n.toString(2));

// Pour l'effet inverse on utilisera la fonction parseInt()
let s = "10011101";
console.log(s,parseInt(s));
// On peut obsionelment ajouter un second parametre pour changer la base mathematique :
console.log(s,parseInt(s,2));

// ? -------------------------- Tableaux / Array --------------------------
/* 
    Un tableau est une liste de valeur 
    Pour la declarer il y a deux solution :
    La recente :
*/
let a1 = [5,"truc",true];
// Et l'ancienne :
let a2 = new Array(5,"truc",true);
// Peut importe celle choisie le resulta est le meme :
console.log(a1,a2);
/* 
    Pour afficher un elemnt presit du tableau 
    Je dois faire suivre sa variable de []
    Dans le quelle j'indique l'index de l'element a afficher .
    ! Les index d'un tableau commence a 0
*/
console.log(a1[1]);
// On peut recuperer la taille d'un tableaux avec la proprieter ".length"
console.log(a1.length);
//  Pour obtenir le dernier element d'un tableau  dont la taille n'est pas connu : 
console.log(a1[a1.length-1]);
// Depuis EcmaScript 2022 , la methode .at() permet aussi de recuperer un element d'un tableau
// Mais celle ci accepte les nombre negatif pou choisire depuis la fin du tableau :
console.log(a1.at(-1));
// A noter que ces selection fonction ossi sur les string :
console.log("Salut"[2], "Salut".at(-1));

//  On peut ajouter un element a la fin de notre tableau avec la methode ".push()" :
a1.push("Bidule");
console.log(a1);
// On peut retirer le dernier element de notre tableau avec :
a1.pop();
console.log(a1);
// On peut ajouter un element du tableau avec :
a1.unshift(42);
console.log(a1);
// On peut suprimer un elemnt au debut du tableau avec :
a1.shift();
console.log(a1);

/* 
    Pour ajouter / retirer des element dans le tableau
    On utilisera ".splice()"
    Celle ci prendra au moin 2 argument 
        Le premier l'index ou se positionner.
        Le second combien d'elemnt suprimer 
    Si on souhaite en ajouter on les placera a la suite
*/
a1.splice(1,1);
console.log(a1);
a1.splice(1,0, "chaussette");
console.log(a1);

let a3 = [4,1,42,8,14];
// La methode .sort() permet de trier par ordre alphabetique ... uniquement :
a3.sort();
console.log(a3);
/* 
    On peut ameliorer la fonction sort mais on vera cela dans le cours sur le fonctions

    On peut ajouter ou modifier un element au tableau en indiquant directement l'index :
*/
a1[1] = "Pizza";
console.log(a1);
// si on saute des index il crera des case vides
a1[8] = "Poivre";
console.log(a1);
// En indiquant sa longeur comme index on obtiendra toujour la derniere case
a1[a1.length] = "Sel"
console.log(a1);

let a4 = a1;
console.log(a4,a2);
/* 
    Si on souhaite faire une copie d'un tableau 
    Simplement lui indiquer qu'une variable est egale au precedant tableau ne fonctionne pas 
    Cela car ce qui est stocké dans la variable n'est pas un tableau mais l'adresse dans la memoire du tableau 
    On donne donc a notre nouvelle variable cette meme adress 
    en modifier un modifira donc l'autre  
*/
a4.push("Super Tableau !");
console.log(a4,a2);
/* 
    Pour eviter cela on utilisera plutot le "spread operator "
    Celui ci permet de decomper un tableau en different element separes d'une virgule 
    par exempl :
*/
console.log(a2, ...a2);
// En decomposant mon tableau dans un nouveau tableau j'obtien une copie :
let a5 = [...a2];
a5.push("Super Clone !");
console.log(a2, a5);
// On peut ossi se servir du spread operator pour fusionner un tableau dans un autre :
let a6 = ["pizza", ...a5, "pomme","banane"];
console.log(a6);
// Sans le spread operator , on se retrouve avec un tableau dans un tableau :
let a7 = ["pizza",a5,"pomme","banane"];
console.log(a7);
// Pour acceder a une valeur d'un tableau multidimensionelle il suffit de faire suivre les index
console.log(a7[1][3], a7[1].length);
// On peut avoir autan de tableau multidimentionelle que l'on souhaite :
let a8 = [[[[[["Coucou"]]]]]]
console.log(a8 , a8[0][0][0][0][0][0]);

// Pour echanger la place de deux element d'un tableau deux solution :
let tmp = a7[0];
a7[0]=a7[3];
a7[3] = tmp;
// ou alors :
[a7[0],a7[3]] = [a7[3],a7[0]]

// ? ---------------------- Objets ------------------------
// ?----------------------- Booleans -----------------------