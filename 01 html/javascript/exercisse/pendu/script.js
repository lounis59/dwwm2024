"use strict"

const mots = ["developeur", "peche", "poisson", 'code', "sport"];
const toucheBtn = document.querySelector('.lettre');
const motCacher = document.querySelector('.mot');
const message = document.querySelector('h1');
const random = Math.floor(Math.random() * mots.length);
const mot = mots[random];
const trait1 = document.querySelector('.trait1');
const trait2 = document.querySelector('.trait2');
const trait3 = document.querySelector('.trait3');
const trait4 = document.querySelector('.trait4');
const trait5 = document.querySelector('.trait5');
const trait6 = document.querySelector('.trait6');
const trait7 = document.querySelector('.trait7');
let erreurs = 0;
let trouve = false;

function touche() {
    const lettres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    lettres.forEach((lettre) => {
        const boutton = document.createElement('button');
        boutton.className = 'boutton';
        boutton.textContent = lettre;
        toucheBtn.appendChild(boutton);
        boutton.addEventListener('click', () => {
            choix(lettre);
        });
    });
    message.textContent = `Essaie : ${erreurs}/7`;
}
touche();

let lettres = mot.split("");
lettres.forEach((lettre) => {
    const lettresCacher = document.createElement('div');
    const textCacher = document.createElement('span');
    lettresCacher.className = 'lettresCacher';
    textCacher.textContent = lettre;
    motCacher.appendChild(lettresCacher);
    lettresCacher.append(textCacher);
    textCacher.style.color = "transparent";
});

function choix(lettre) {
    if (erreurs >= 7 || trouve) return; // Si le jeu est terminé, ne pas exécuter la suite du code
    const lettresCacher = document.querySelectorAll('.lettresCacher span');
    let trouveActuel = false;
    lettresCacher.forEach((lettreCacher) => {
        if (lettreCacher.textContent === lettre) {
            lettreCacher.style.color = "";
            trouveActuel = true;
        }
    });
    if (!trouveActuel) {
        erreurs++;
    }
    message.textContent = `Essaie : ${erreurs}/7`;
    if (erreurs >= 7) {
        message.textContent = "Perdu! Le mot était : " + mot;
    } 
    trouve = [...document.querySelectorAll('.lettresCacher span')].every(span => span.style.color !== "transparent");
    if (trouve) {
        message.textContent = "Bravo! Vous avez trouvé le mot : " + mot;
    }
    if(erreurs == 1){
        trait1.style.backgroundColor = ""
    }
    else if(erreurs == 2){
        trait2.style.backgroundColor = ""
    }
    else if(erreurs == 3){
        trait3.style.backgroundColor = ""
    }
    else if(erreurs == 4){
        trait4.style.backgroundColor = ""
    }
    else if(erreurs == 5){
        trait5.style.backgroundColor = ""
    }
    else if(erreurs == 6){
        trait6.style.backgroundColor = ""
    }
    else if(erreurs == 7){
        trait7.style.backgroundColor = ""
    }
}
trait1.style.backgroundColor = "transparent"
trait2.style.backgroundColor = "transparent"
trait3.style.backgroundColor = "transparent"
trait4.style.backgroundColor = "transparent"
trait5.style.backgroundColor = "transparent"
trait6.style.backgroundColor = "transparent"
trait7.style.backgroundColor = "transparent"





