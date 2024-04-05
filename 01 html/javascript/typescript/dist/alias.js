"use strict";
/*
    J'ai declarer un type "fruit" avec le mot clef "type"
    Puis je peux l'utiliser pour typer mes variable
*/
let f = { nom: "Pomme", couleur: "Rouge" };
let af = [f, { nom: "Banane", couleur: "Verte" }];
let p = { nom: "Maurice", age: 45 };
let n = "George";
let fp = "age";
/*
    "typeof" permet de creer un type qui corespond a un objetprecedement créé
*/
let objet = { vieux: true, prenom: "Maurice", age: 78 };
let o2 = { vieux: false, prenom: "Pierre", age: 24 };
// -------------------- Generiques ----------------------
function useless(arg) {
    return arg;
}
let machine = useless("Salut");
/*
    TS regarde pas le fonctionement de ma fonction
    Si on lui indique une valeur de retour "any"
    Alors la variable a laquelle on atribut notre fonction type "any"

    Mais avec les generics on peut indiquer a TS que le type recu en arguments sera le meme que celui de la valeur de retour
*/
function useful(arg) {
    return arg;
}
let machine2 = useful("Bonjour");
let machine3 = useful(42);
/*
    Ici on indique que ma fonction va utiliser un type particulier
    Que l'argument est un tableux de ce type
    Mais que la valeur de retour est juste ce type
*/
function lastOf(arr) {
    return arr[arr.length - 1];
}
let last1 = lastOf([24, 42, 12]);
let last2 = lastOf(["a", "b", "c"]);
/*
    Ici j'indique que le type recu en argument doit obligatoirement posseder la propriete length
*/
function logSize(arg) {
    console.log(arg.length);
    return arg;
}
let size1 = logSize([45]);
let size2 = logSize("Test");
// let size3 = logSize(54);
logSize({ nom: "Charlie", length: 145 });
