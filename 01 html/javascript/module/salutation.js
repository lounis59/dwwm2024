'use strict'
/**
 * Affiche un message de salutation
 */
export default function bonjour(){
    console.log("Bonjour les gens");
}
/**
 * Afficjer un message de salutaion 
 */
export function salut (){
    console.log('Salut les gens !');
}
/**
 * Afficher un message de salutation adresse a quelqu'un
 * @param {string} name nom de la personne
 */
export function coucou(name)
{
    parler(name,"Coucou tout le monde !")
}
/**
 * Afficher message dans la consolepreceder d'un nom
 * @param {string} nom nom d'une personne 
 * @param {string} text message de la personne
 */
function parler(nom,text){
    console.log(`${nom} : ${text}`);
}
console.log("Salutaion importé ! ");