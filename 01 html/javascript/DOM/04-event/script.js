"use strict"

function test (e)
{
    console.log(e);
}
const h1 = document.querySelector("header > h1");
/* 
    L'orsqu'un utilisateur interagie avec la page cela produit un evenement (scroll,clique ,mouvement,clavier...)

    Nous allons pouvoir indiquer a JS d'ecouter ces evenement et lorsqu'il en entand un de produire une action en reponse

    3 solution pour ecouter un evenement la premiere etant :
    ".addEventListener()" 
    on indiquera en premier argument le nom de l'evenement a ecouter (en minuscule)
    en second la fonction a lancer lors de cet evenement
*/
h1.addEventListener("click", test);
/* 
    Par defaut js donne en argument d'une fonction devenement un objet contenant des information sur l'evenement 
    pour un clique un objet "click" avec entre autre la cible du clicque sa position x et y ...

    On peut ajouter autan d'ecouteur d'evenement que souhaiter sur un meme element 
    on peut utiliser en callback desz fonction anonyme ou fleche
*/
h1.addEventListener("click", function(e){
    let r = Math.floor(Math.random()*360);
    e.target.style.transform = `rotate(${r}deg)`
});

/* 
    On peut ossi ajouter un evenement via la proprieter qui corespond 
    chaque element HTML a de multiple propreiter comencen par on suivi du nom de levement (onclick, onload ...)
*/
const menu1 = document.querySelector('.menu1');
console.log(menu1)

menu1.onclick = test;
// On ne peut ajouter qu'un seule evenement d'un meme type via l'attribut
menu1.onclick = (e)=>{
    if(e.target.style.fontSize === ""){
        e.target.style.fontSize = "2em"
    }else{
        e.target.style.fontSize = ""
    }
}
/* 
    La troisieme facon d'ajouter un evenement est de le faire directement dans le HTML ( voir menu2 )

    Si on souhaite supprimer un evenement :
*/
menu1.onclick = "";
h1.removeEventListener("click", test);
/* 
    Petit default on ne peut retirer que les eventListener ou l'on utilise une fonction nomme
*/
// ? ---------------------------------- Option -------------------------------------
const btn1 = document.querySelector(".div1 button");
const input1 = document.querySelector(".div1 input");
/* 
    On peut ajouter des option a addEventListener
    Pour cela on donera en troisieme argument un objet cest option 

    L'option "once" permet de ne declencher un evenement qu'une seule fois
*/
btn1.addEventListener("click", ()=>h1.textContent=input1.value,{once:true});
/* 
    Si plusieur evenement sont declancher par une meme action 
    Alor l'ordre sera definie du parent le plus proche au plus eloigner

    JS fonctionne en deux phase une phase de capture ou il verifie les evenement a declendher allant des parent vers les enfant 
    et une phase de "bulle " qui remonte des enfant vers les parent en activant les evenement 
*/
const div4 = document.querySelector('.div4')
const gp = div4.querySelector('.grandParent')
const pa = div4.querySelector('.parent')
const en = div4.querySelector('.enfant');
/* 
    Avec l'option "capture" a true 
    Nous indiquons a un evenement de se declencher pendant la fase de capture donc avent les autre
*/
div4.addEventListener("click",()=>console.log("div 4"), {capture:true});
gp.addEventListener("click",()=>console.log("Grand Parent"));
pa.addEventListener("click",(event)=>{
    console.log("Parent");
    event.stopPropagation();
});
en.addEventListener("click",()=>console.log("Enfant"));
/* 
    La methode d'evenement .stopPropagation() permet d'arreter une suite d'evenement 
    La methode d'evenement ".preventDefault" permet de desactiver l'evenement par defaut d'un element HTML (La oumisison d'un formulaire , lactivation d'un lien)

*/
const menu5 = document.querySelector(".menu5 a")
menu5.addEventListener("click", e=>e.preventDefault())


// ?-------------------------------------Exercisse-------------------------------------

const pColor = document.querySelector(".div2 input");
const btnColor = document.querySelector(".div2 button")
const div = document.querySelector(".div2")

pColor.onchange = ()=>{ 
    btnColor.style.color = pColor.value
    console.dir(pColor);
};
btnColor.onclick = ()=>{
    div.style.backgroundColor = btnColor.style.color
};

const fenetre = document.querySelector("aside")
const btnMouv = document.querySelector(".div3 button")
const btnFermer = document.querySelector(".fenetre .fermer")

btnMouv.onclick = ()=>{
    fenetre.style.left = "40%"
    
    fenetre.style.transition = "1s"
    btnFermer.onclick = ()=>{
        fenetre.style.left = "100vw"
        fenetre.style.transition = "1s"
        
    }
}

const liste = document.querySelectorAll("li")
console.log(liste);
for(let i=0 ; i<liste.length ; i++){

    liste[i].onclick = (e)=>{

        if(e.target.style.fontSize === ""){
            e.target.style.fontSize = "2rem"
        }else{
            e.target.style.fontSize = ""
        }
    }
    console.log(liste);
}

const pFooter = document.querySelector("footer ");
const tFooter = document.querySelector("footer span")
let arret = true

function suivit(e){

    tFooter.style.position = "absolute"
    tFooter.style.top = e.clientY +"px"
    tFooter.style.left = e.clientX +"px"
    document.body.addEventListener("mousemove",suivit)
    if(arret == false){
        tFooter.style.position = ""
    document.body.removeEventListener("mousemove",suivit)
    arret = true

    }
    
}
    document.body.addEventListener("click",()=>arret=false)
pFooter.addEventListener("mouseenter",suivit)
pFooter.addEventListener("mouseleave", ()=>{pFooter.style.backgroundColor = ""})


console.dir(pFooter)
console.dir(tFooter);