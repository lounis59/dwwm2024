"use strict"

function test (e)
{
    console.log(e);
}
const h1 = document.querySelector("header > h1");
/* 
    L'orsqu'un utilisateur interagie avec la page cela produit un evenement (scroll,clique ,mouvement,clavier...)

    Nous allons pouvoir indiquer a JS d'ecouter ces evenement et lorsqu'il en entand un de produire une action en reponse

    3 solution pour ecouter un evenement la premiere etant :
    ".addEventListener()" 
    on indiquera en premier argument le nom de l'evenement a ecouter (en minuscule)
    en second la fonction a lancer lors de cet evenement
*/
h1.addEventListener("click", test);
/* 
    Par defaut js donne en argument d'une fonction devenement un objet contenant des information sur l'evenement 
    pour un clique un objet "click" avec entre autre la cible du clicque sa position x et y ...

    On peut ajouter autan d'ecouteur d'evenement que souhaiter sur un meme element 
    on peut utiliser en callback desz fonction anonyme ou fleche
*/
h1.addEventListener("click", function(e){
    let r = Math.floor(Math.random()*360);
    e.target.style.transform = `rotate(${r}deg)`
});

/* 
    On peut ossi ajouter un evenement via la proprieter qui corespond 
    chaque element HTML a de multiple propreiter comencen par on suivi du nom de levement (onclick, onload ...)
*/
const menu1 = document.querySelector('.menu1');
console.log(menu1)

menu1.onclick = test;
// On ne peut ajouter qu'un seule evenement d'un meme type via l'attribut
menu1.onclick = (e)=>{
    if(e.target.style.fontSize === ""){
        e.target.style.fontSize = "2em"
    }else{
        e.target.style.fontSize = ""
    }
}
/* 
    La troisieme facon d'ajouter un evenement est de le faire directement dans le HTML ( voir menu2 )

    Si on souhaite supprimer un evenement :
*/
menu1.onclick = "";
h1.removeEventListener("click", test);
/* 
    Petit default on ne peut retirer que les eventListener ou l'on utilise une fonction nomme
*/