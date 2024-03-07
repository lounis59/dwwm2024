"use strict"

const h1 = document.querySelector("#mainTitle");
console.dir(h1)
// ?---------------------- Attributs style --------------------------------
/* 
    Sur tous nos element HTML nous pouront retrouver une proprieter style 
    Celle ci contien toute les proprieter CSS existante 
    En modifiant celle ci cela viendra ajouter du CSS directement sur notre balise

    ! Attention
        Les ptoprites css en plusieur mots (background-color) sont remplace par une version camlCase (backgroundColor) 
*/
h1.style.backgroundColor = "red";
// On n'a acces qu'au CSS directement dans le html sur la balise et non dans un ficher CSS
console.log(h1.style.border, h1.style.backgroundColor);
h1.style.fontStyle = "italic"
h1.style.textShadow = " 5px 5px rbda (0,0,0,0.3)"
h1.style.fontSize = "5rem"
/*
    si on se trompe de proprieter il n y a aucune erreur 
    La proprieter est ajouter mais ignorer car il ne la conait pas

*/
h1.style.couleur = "red"
// De meme si on se trompe sur la valeur donne
h1.style.color = "rgbaa(255,255,255,0.8)"

// ?--------------------- Les classes --------------------------

/* 
    Changer le style peut etre pratique mais tres verbeux
    on peut ossi choisir de changer une classe qui et donc avoir toute les proprieter de cette classe qui s'applique ou non 

    Pour cela deux posibiliter soit "className" qui permet de recuperer tout l'attribut class sous forme de string :
*/
console.log(h1.className);
// Change tout l'atribue class par une nouvelle string 
h1.className = "banane";
// suprimme toute les classe :
h1.className = "";
// Ajouter une class sans suprimer les autre :
h1.className += " banane";

/* 
    soit "classList" qui retourne un objet "DOMTokenList" contenant toute les classe sous forme de tableau 
    et des methode pour travailler avec :
*/
console.log(h1.classList);

// suprimmer une classe : 
h1.classList.remove("banane");
// Ajouter une classe :
h1.classList.add("banane");
// Ajoute ou supprime la classe selon si elle est dejat presente ou nom
h1.classList.toggle("banane");
// retourne un booleans si la class est presente :
console.log(h1.classList.contains("banane"));

// ?--------------------------- les autre atributs -----------------------------

/* 
    Pour la plupar des autre attributs 
    Il est possible de les appeler directement via leur noms 
    soit via les methode "getAttribute()" et "setAttribute"

    Les deux solution auront le meme resulta
*/
console.log(h1.id, h1.getAttribute("id"));
// pour le modifier il suffit de lui dire qu'il est egale a autre chose  
h1.id += "2";

const a = document.querySelector("footer ul li a")
//  Avec setAttribute on indique en prmier l'atribut a changer puis en second la valeur a lui donner 
a.setAttribute("target", "_blank");
/* 
    Les data-attributes font exeption
    Pour i acceder nous devont utilliser dataset
    suivi du nom du data-attribute
*/
console.log(a.dataset.color);
a.style.backgroundColor = a.dataset.color;
// Pour ajouter un data-attribute il suffit d'utiliser un nom qui n'existe pas :
a.dataset.bidule = "je ne sert rien";

// ?-------------------------------Exercisse ------------------------------------
const p = document.querySelectorAll(".step")
for (let i = 0; i < 5; i++) {
    p[i].style.fontSize = "2rem"

}
const div = document.querySelector("aside");
const div1 = document.querySelector("aside div");
let random = Math.floor(Math.random() *255)
div1.style.backgroundColor = "rgb("+random+","+random+","+random+")"
div.style.left = "30%"
div.style.transition = "1s"
    

