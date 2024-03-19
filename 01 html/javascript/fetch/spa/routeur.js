"use strict"

const main = document.querySelector('main');
const liens = document.querySelectorAll('a')
/* 
    J'indique en clef les routes de ma SPA et en valeurs les fichiers a changer : 
*/
const routes = {
    "/":"pages/home.html",
    "/index.html":"pages/home.html",
    "/about":"pages/about.html",
    "/contact":"pages/contact.html",
    404:"pages/404.html"
};

setLinks(document);
loadPage();

function setLinks(parent){

    const tags = parent.querySelectorAll('a:not([href^="https"])');
    tags.forEach( a=> a.addEventListener("click",router));
}
/**
 * 
 * @param{Event} e
 *  */ 
function router(e){
    e.preventDefault();
    // Permet d'ajouter un lien a lhistorique et changer l'url visible en haut de page 
    window.history.pushState({},"",e.target.href);

    loadPage();
}
function loadPage(){

    // On recuopere le chemin de la page 
    const path = window.location.pathname;
    // console.log(path);
    const route = routes[path] || routes[404];
    // console.log(route);
    fetch("/01%20html/javascript/fetch/spa/"+route).then(r=>{
        if(r.ok){
            // .text() permet de recuperer des donnee textuelles
            r.text().then(d=>{
                main.innerHTML = d;
                setLinks(main);
            })
        }
    })
}

