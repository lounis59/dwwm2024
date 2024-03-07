"use strict"
/* 
    ".getElementByTagName()" permet de recuperer tous les element Html dont le nom de la balise est donne dans les parenthese
    peu importe qu'il ait un ou plusieur resultat il son ranger dans un objet appele "HTMLCollection"
    Il fonctionera comme un tableau si je veux mon premiere element je taperais "[0]"

*/
const lis = document.getElementsByTagName("li");
console.log(lis, lis[0]);
// on ne peut pas changer tous les element d'un seul coup il faut le faire 1 par 1
lis[0].textContent = "J'ai changer le texte en JS";
/* 
    ".getElementByClassName" fonctionne comme le presedant 
    si ce n'est qu'il selectionne les element par leur nom de classe
*/
const ps = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
console.log(ps, p1);
/* 
    ".getElementById" selectionne un element par son id
    L'id devent etre unique dans une page 
    pas de HTMLCollection ici on obtien directement l'element 
*/

const h1 = document.getElementById("mainTitle");
console.log(h1);
/* 
    ".querySelector" prend en parametre sous la forme d'un string un selecteur css
    Il ira selectionne le premier element qui corespond a ce selecteur 
*/
const p2 = document.querySelector(".marche2");
console.log(p2);
/* 
    ".querySelectorAll" fonctionne comme le precedent 
    Si ce n'est qu'il rengera dans un tableau "NodeList" tous les element correspondant au selecteur css
*/
const lis2 = document.querySelectorAll("footer li");
console.log(lis2);
/* 
    J'ai recherche a chaque fois dans le document en entier 
    Mais on peut preciser notre recherche sur un element precis :
*/
const header = document.querySelector("header");
// Ici je recherche uniquement dans le header
const h = header.querySelector("h1");

// ? --------------------------------Selecteur Bonus ---------------------------------
// Selectionne le prochain element frere en HTML
console.log(header.nextElementSibling);
// Selectionne ce qui suis en HTML (ici un saut a la ligne et une indentation)
console.log(header.nextSibling);
// Selectionne l'element frere precedent en HTML
console.log(lis[2].previousElementSibling);
// Seletionne tous les enfant direct dans un objet HTMLcollection
console.log(header.children);
// Selectionne le parent de mon element HTML
console.log(lis[2].parentElement);
// Selectionne le parent le plus proche corespondant au selecteur CSS
console.log(lis[2].closest("footer"));

// ?----------------------------Suprimer ou deplacer ---------------------------------

// Pour deplacer un element il suffit de l'append ailleur 
header.append(lis[0]);
// pour suprimer un element on peut utiliser ".remove()"
lis[2].remove()
// Il est suprimmer de notre HTML mais existe tjr dans notre variable :
console.log(lis[2]);

// Il existe aussi pour supprimer :
// header.removeChild(h);

// ?------------------------------ Exercisse -------------------------------------

const page = document.querySelector("aside div")
const body = document.querySelector("body")
body.append(page)

for (let i = 0; i < 2; i++) {
    
    lis[i].textContent = "changer"
    

};
for(let n=0; n < 6 ; n++){
    if ( n%2 == 0){

        ps[n].textContent = "nouveau paragraphe"
    }

}



