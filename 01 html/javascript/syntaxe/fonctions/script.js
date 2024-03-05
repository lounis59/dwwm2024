"use strict";
/* 
    Pour declarer une fonction on utilisera le mot clef "function"
    On le fera suivre du nom que l'on souhaite donner a la fonction
    puis de parenthese contenant ou non des parametre 
    et en fin des acolade contenant le corp de la fonction 

    une fonction declare mais qui n'est pas appeler n'executera aucun code 
    pour apeler une fonction on ecrit son nom suivi de parenthese 

    On peut appeler une fonction avent ou aprer sa declaration 
    De ce fait une bonne pratique es de placer toute les fonction enssemble (soit au debut du code ou a la fin)
*/
salut();
function salut (){
    console.log("Salut le monde !");
}
salut();

/* 
    Il existe d'autre facon de declarer une fonction 
    Ces autre facon ne peuvent etre utiliser qu'apres leur declaration 
    On peut creer une fonction anonime en la rangeant dans une variable, un tableau ou un objet
*/
// salut2(); Impossible d'appler avent la declaration 
const salut2 = function (){
    console.log("Salut les gens !");
}
salut2();
/* 
    On peut ossi declarer des fonction fleche
    Des fonction anonyme dont le mot clef funtion a disparue 
*/
const salut3 = ()=>{
    console.log("Coucou le peuple !");
}
salut3();


// ?--------------------------------- parametres (ou arguments)------------------------------
/* 
    Lorsque l'on place des parametre dans la declaration de fonction 
    Celle ci attend des argument lors de son appel 
    Ces argument sont transmit a la fonction
*/
function bonsoir(nom){
    console.log("Bonsoir " + nom);
}
bonsoir("Romain");
/* 
    Si il manque des argument les parametre seront "undefined"
    Si il en a trop ils seront juste ignore
*/
bonsoir();
/* 
    On peut avoir avoir autent de parametre que souhaiter simplement en les separent d'une virgule 
    Le premier argument sera transmit au premier parametre et ainsi de suite
*/
function bonneNuit(nom1,nom2){
    console.log(`%cBonne nuit ${nom1} et ${nom2}`,"color:yellow;background:blue;");
}
bonneNuit("Patrick","Raphael");
/* 
    Il est possible de donner une valeur par defaut a nos parametres 
    Dans se cas si l'argument n'est pas fournie 
    au lieu d'etre undefined il prendra sa valeur par defaut
*/

function goodBye(nom1,nom2="les autres"){
    console.log(`Good bye ${nom1} et ${nom2}`);
}
goodBye("kevin");
goodBye("kevin","Alan");

console.log(1,2,3,4,5,6,7,8,9);
/* 
    Si on souhaite une infinite d'argument possible 
    On peut utiliser le rest operator "..."
    Tous les argument suplementaire iront dans un tableau
*/

function goodMorning(...noms){
    // console.log(noms)
    console.log(`Good morning ${noms.toString()}`);
    console.log(`Good morning ${noms.join()}`);
}
goodMorning("pierre","paul","jacques");