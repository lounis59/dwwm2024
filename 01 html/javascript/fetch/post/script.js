"use strict";

const url = "https://api.thedogapi.com/v1/images/upload";
const api_key = "live_HNxwffBhlhvMDixG9LUYZ4B2X59sYpt6y2sxED3soDZKLRRWo4msDrGNBs739NN4";

const formulaire = document.querySelector('form')
const result = document.querySelector('.result')

formulaire.addEventListener("submit", uploadDog);

function uploadDog(e){
    e.preventDefault();
    result.textContent = "Chargement en cours";

    const formData = new FormData(formulaire)
    /* 
        Le deuxieme argument de fetch , premet de lui ajouter des options.
        On pourra y trouver :
            la methode a utiliser ,
            Les header d la requete,
            Le corps de la requete 
    */
    fetch(url, {
        method: "POST",
        headers: {"x-api-key": api_key},
        body: formData
    }).then(checkresponse);
}
function checkresponse(response){

    result.textContent = "Chargemment Terminé !";
    if(response.ok){

        response.json().then(data=>{
            result.innnerHTML = `<hr><img src="${data.url}" alt="photo de chien" width="400">`;

        })
    }else{

        result.textContent = response.statusText;
    }
}

