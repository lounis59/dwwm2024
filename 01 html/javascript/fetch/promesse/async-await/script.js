"use strict";
// recuperation classique d'un fichier json :

fetch("tab.json").then(res=>{
    if(res.ok){
        res.json().then(data=>{
            console.log(data);
        })
    }
})
/* 
    Quand on utilise les promesse , on peut vite se retrouver dans ce que l'on appelle un "callback hell ";
    c4est a dire des callback dans des callback et ainsi de suite 
    Cela peut rendre la lecture du code complique
    
    c'est pour cela que JS implemente les mot clef "asyc et await 
    le mot clef "async" se place devant la declaration d'une fonction
        Cela rendra la fonction asynchrone
    Le mot clef "await" se place devant l'appel d'une fonction retournant une promesse 
        Il indique au code d'attendre le resultat de la promesse avant de continuer
    ! await ne peut etre utiliser que dans une fonction "async"
*/
async function exemple(){

    let response = await fetch("tab.json");
    if(!response.ok)return;
    let data = await response.json()
    console.log(data);
}
exemple();
/* 
    Petit defaut de cette technique le "catch n'ai pas gere"
    On pourra le gerer en placant le tout dans un try catch    

    Les fonction asynchrone se metten a retourner automatiquement une promesse : 
*/
function synchrone(){return "coucou"};
async function asynchrone (){return "coucou"};
console.log(synchrone(), asynchrone());

// Retour du burger

async function burger(){

    
}

// Fonction ducours precedant 
