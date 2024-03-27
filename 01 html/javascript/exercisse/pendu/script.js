"use strict"

const mots = ["developeur", "peche", "poisson", 'code', "sport"];
const toucheBtn = document.querySelector('.lettre');
const motCacher = document.querySelector('.mot');
const message = document.querySelector('h1');
const random = Math.floor(Math.random() * mots.length);
const mot = mots[random];
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
}





