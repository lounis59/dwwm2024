"use strict"
const title = document.createElement('h1');
const valeur = document.querySelector('input') as HTMLInputElement;

document.body.append(title);
valeur.addEventListener('input',()=>{
    let valeurDouble = parseInt(valeur.value)*2
    title.textContent = `Le double de l'input est : ${valeurDouble.toString()}`
})