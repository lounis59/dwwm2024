"use strict"
/* 
    JSON signifie Javascript Object Notation
    C'est un language qui permet de stoker des information complexes (tableau, objet ...) sous la forme d'un string
    ainsi que de transferer des donnee entre deux language qui ne pourait pas se comprendre autrement (JS et PHP) 
*/

const form = document.querySelector('form')

form.addEventListener("submit", saveData)

function saveData(event){

    // J'empeche la soumission de formulaire
    event.preventDefault();
    // Je transmer les donne de mon formulaire a l'objet "FormeData"
    const data = new FormData(form);

    let user = {}
    // Je parcour mon formulaire pour en recuperer les "name" et "value"
    data.forEach((value, name)=>{
        console.log(value,name);
        user[name] = value
    })
    // J'obtien un objet contenant les value et name de mon formulaire
    console.log(user);

    showUser(user);
    // Avec JSON.stringify() je transforme des donne en format JSON
    const strUser = JSON.stringify(user);
    console.log(strUser);
    // je peut donc stocker mon objet sous forme JSON (string)
    localStorage.setItem("user", strUser)
}

function showUser(u){
    const h1 = document.querySelector('h1');
    h1.textContent=`Je suis ${u.prenom}, ${u.age} ans !`    
}

const userString = localStorage.getItem("user");
if(userString){
    // Je transforme un string JSON en objet javascript
    const user = JSON.parse(userString);
    console.log(user);
    showUser(user);
}
