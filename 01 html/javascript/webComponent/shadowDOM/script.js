"use strict"

/* 
    Le shadow DOM permet de creer un arbre DOM separe du reste du DOM
    Ce DOM fantome obeit a ses propre regles, ignorant les scripte et style appliques au DOM parent 
    De meme les script et style applique au DOM fantome n'influront pas le DOM parent

    Pour creer un hote fantome (shadow host) il suffit d'appeler la methode "attachShadow" sur l'element qui doit acceullir le shadow DOM
        * elementHTML.attachShadow({mode:""})
        Le mode peut etre open ou closed

        En mode open le shadowDOM est accessible depuis l'element HTML
        En closed le shadowDOM n'est accessible qu'avec la valeur retourne par attachShadow
*/
const open = document.querySelector('.open');
const close = document.querySelector('.close');

const shadowpen = open.attachShadow({mode:"open"});
const shadowclose = close.attachShadow({mode:"closed"});

// Accessible dans tous les cas :
console.log(shadowpen , open.shadowRoot);
// Non accessible via la proprieter shadowRoot :
console.log(shadowclose , close.shadowRoot);

/* 
    Dans l'exemple suivant ,chacun des 3 h1 ne sont affecte que par le style de leur DOM

    Pour l'exemple j'utilise des feuille de style interne mais on pourrait y lier des feuille externe 

    le selecteur CSS ":host" correspondera a l'hote de notre shadow DOM (ici les div .open et .close)
*/
const style1 = document.createElement("style");
style1.textContent = /* CSS */
    `
    :host{text-align: right;}
    h1{background-color: black;}
    `;
const h01 = document.createElement('h1');
h01.textContent = "Je vois des fantomes dans les ombres";
shadowpen.append(style1,h01)  

const style2 = document.createElement("style");
style2.textContent = /* CSS */
    `
    :host{text-align: center;}
    h1{text-shadow: 5px 5px 5px red;}
    `;
const h02 = document.createElement('h1');
h02.textContent = "Mon ombre cache des fantome";
shadowclose.append(style2,h02)  

/* 
    Si je tente de selectionner tous les h1 du document seul ceux hors d'un shadow DOM seront selectionner 

    Pour selectionner un element du show dom il me faut rechercher directement dans celui ci
*/
const hx = document.querySelectorAll('h1');
console.log(hx);

const hx1 = shadowpen.querySelectorAll('h1');
const hx2 = shadowclose.querySelectorAll('h1');
console.log(hx1,hx2);

// Maintenant lions nos custom element avec notre shadow DOM:
import SuperBalise from "./superBalise.js"