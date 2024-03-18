"use strict"

/* 
    Lorsque l'on veut recuperer des donnees depuis un autre fichier ou bien depuid une API
    nous avon besoin que JS envoi une requete (de preference aasynchrone) a ce fichier (ou au site de l'API)
    Pour cela deux solution:
        -Le plus ancient XMLHttpRequest();
        - Le plus recent fetch();
*/

const url = "./hero.json";
// ? ------------------------------ XMLHttpRequest() -----------------------------------

// Je cree un nouvel objet :
const xmlhttp = new XMLHttpRequest();
// Je lui ajoute une fonction a lancer lors de l'evenement "onreadystatechange"
xmlhttp.onreadystatechange = handleRequest ;

/* 
    J'ouvre la requete en lui donanat les parametre suivant :
        1. La methode utiliser en string (ici GET)
        2. L'url auquel lancer la requete 
        3. Si la requete doit etre asynchrone
*/
xmlhttp.open("GET",url,true);
// On envoi la requete : 
xmlhttp.send();

function handleRequest(){
    console.log(xmlhttp.readyState, xmlhttp.status);
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
        let success, data;
        /* 
            Le try{}catch(e){}
            Permet de tenter l'execution du code passe dans le try 
            Si une ereure et provoquer elle  sera capturer et le catch sera lance
            cela permet d'eviter que notre application plante en cas d'erreur

            Le finally est optionnelle et se lance dans tous les cas une fois le try catch termine 
        */
        try{
            console.log(xmlhttp.responseText);
            data = JSON.parse(xmlhttp.responseText);
            console.log(data);
            success = true
        }catch(e){
            console.error(e.message + "Dans -> "+xmlhttp.responseText);
            success = false;
        }finally{
            if(success){
                document.body.innerHTML = `<h1>${data.squadName}</h1>`
            }

        }
    }
}
console.log("coucou");



// ?----------------------- fetch -------------------------------
/* 
    fetch est toujour en asynchronne 
    par defaut il est en methode "get"
    Il prendra en premier parmetre l'url auquel envoyer la requete et optionelement en scond des option
    
    On le fera suivre d'un ".then()" qui contiendra une fonction callback a lance une fois la requete erminer 
*/
fetch(url).then(handleFetch)
function handleFetch(response){
    if (response.ok){
        /* 
            L'objet response de fetch contient sa propre methode asynchrone pour traiter le json
            Je ne passerais donc pas par "JSON.parse()" mais par ".json()"
            elle sera suivi elle aussi d'un "then()" ainsi que d'un "catch" en cas d'erreur 
        */
       response.json()
            .then(function(data){
                    document.body.innerHTML += `<h2>${data.homeTown}</h2>`;

            })
            .catch(error=>console.error(error))
    }
}