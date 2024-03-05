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

// ? ---------------------- Mettre fin a une fonction, renvoyer une information -----------------------------------

/* 
    On peut parfois avoir besoin de mettre fin a une fonction avant la fin de celle ci
    Ou bien retourner une information que l'on poura  reutiliser ailleur 
    Ces deux cas utilisent le mot clef "return"
*/

function insulte(nom){
    if(nom === undefined){
        console.error("Donne moi un nom")
        // Placer un return seul mettra fin a la fonction sans autre effet
        return;
    }
    // Si le mot clef "return est suivi d'une valeur la fonction prend fin en retournent cette valeur"
    return nom + " Le Poltron";
}
insulte();
// La valeur retourne est ensuite utilisable dans une varible ou une fonction :
let newName = insulte("Bob");
console.log(newName);
console.log(insulte("Bill"));
/* 
    Les fonction fleche avec une seule instruction (sans acolade) ont un return implicite
    C'est a dire que meme si le mot clef n'y est pas il y a un return qui se produit
*/
const add = (a,b)=>a+b;
console.log(add(4,8))

// ? ------------------------------Fonction recursives --------------------------------------
/* 
    Une fonction recursive est une fonction qui s'appele elle meme
    Attention de bien prevoir une condition de sortie pour eviter les boucle infinie
*/
/** 
 * fonction recurcive qui produit un decompte
 * @param {number} x un nombre positif
 * @returns undefined 
  */
function decompte(x){
    console.log(x--);
    if (x < 0)return;
    decompte(x);
}
decompte(10);

// ? ------------------------------ Les fonction callback --------------------------------------
/* 
    une fonction callback est une fonction qui est donne en parametre 
    puis appeler par la fonction qui recoit cet argument 

    C'est le cas de "foreach()"
    qui va parcourir un tableau en appele a chaque fois la fonction donne en callback
*/
let pr = ["Alice","Ariel","Mulan","Belle"];
// On peut donner en callback une fonction definie anonyme ou flechee
pr.forEach(bonsoir);
pr.forEach(function(princesse){
    console.log("Bienvenue "+princesse)
});
pr.forEach(princesses=>console.log("Bonjour Bonjour "+ princesses));

// Exemple de fonction utilisant le callback

function compliment(maFonction,nom){
    maFonction(nom+ " Le magnifique")
}
compliment(bonsoir,"Greg")