"use strict"
import Human from "./Human.js"

const h = new Human("Maurice","Dupont",54);

console.log(h,Human);

//  La prorpieter static est accesible sur la classe mais pas sur l'objet :
console.log(Human.categorie, h.categorie);
Human.description();
// h.description();

// J'ai acces a ma proprietee public mais pas a la privee
console.log(h.vivant,/* h.#name */);

// Si je souhaite un nouvel humain, il me suffit d'instancier encore ma classe :

const h2 = new Human("Pierre","Fontaine",39)

h.salutation();
h2.salutation();

import Dev from "./Dev.js";

const d = new Dev("Bruno","Dubois",19,"Javascript")
d.salutation()
d.aniversaire()

//  On peut verifier ci un objet est une instance ou une classe avec :
console.log(d instanceof Dev);
//  Un objet instancier depuis une classse qui herite est aussi une instance de la classe herite :
console.log(d instanceof Human);