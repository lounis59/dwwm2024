"use strict";
const
    indicator = document.querySelector('.scroll-indicator'),
    main = document.querySelector('main'),
    option = {
        /* 
         Dans quel element l'observation se fait par defaut le viewport mais on pourait detecter l'intersection dans un autre element 
        */
        // root: main
        /* 
            Permet de changer a partir d'ou se fait la detection 
            une valeur positive provoquera la detection avent l'entrer dans le viewport
            une valeur negative le fera apres sont arriver dans le viewport 
        */
        // rootMargin: "-100px"
        // threshold: 0.05
    };

/* 
    Les observeur sont des objet permetant un peu comme un ecouteur d'evenement ,
    d'attendre une action dans la page pour lancer une fonction 

    On trouvera par exemple le mutation observeur qui attend un changement dans le HTML

    Ou celui qu'on testera ici, l'intersection observeur qui attend qu'un element HTML entre ou sort du viewport 

    Dans se premier exemple on activera un addEventListener quand la main entre dans le viewport et on le retirera quand il sortira du viewport 
    Cela peu servir a alleger la page lorsqu'un evenement ne sert a rien

    L'intersection observeur se presente comme une classe a instencier avec en premier parametre une fonction callback et en seconde des possible option sous forme d'objet
*/
const observer = new IntersectionObserver(setIndicator, option);
/* 
     L'observer a besoin qu'on lui indique quel element HTML il doit observe:
*/
observer.observe(main)
/* 
    La fonction callback sera lance a chaque fois qu'un element observe entre ou quitte le viewport 
    Elle va recuperer en argument un tableau contenant une entre pour chaque element observe entre ou quitant le viewport

*/
function setIndicator(entries) {
    // console.log(entries);
    /* 
       Au chargement de la page la fonction est apeler une premiere fois 
       Cela pour indiquezr si les element observer sont dejat present ou non 
       Dans notre cas on observe qu'un seul element donc pour eviter de travailler avec un tableau j'utilise une nouvelle variable
    */
    const entry = entries[0];

    // console.log(entry);

    if (entry.isIntersecting) {
        window.addEventListener("scroll", indicatorAnimation);
    }
    else {
        window.removeEventListener("scroll", indicatorAnimation);
    }
}
/* 
    Si on souhaite arrete une observation on peut utiliser :
    observer.unobserve(main)
    Si on souhaite suprimer toute les observation : 
    observer.disconnect()
*/
function indicatorAnimation() {
    // console.log("SCROOOLLL!!!");
    /* 
        scrollY represente le nombre de pixel scrolle 
        offsetTop la position de l'element par rapport a la page 
    */
    if (window.scrollY > main.offsetTop) {
        /* 
            "scrollheight" la hauteur de l'element incluane le padding vertical
            "nombre.tofixed(n)"retourne un string d'un nombre avec "n" chiffre aprer la virgule 
        */
        const prc = ((window.scrollY - main.offsetTop) / main.scrollHeight).toFixed(2);
        // console.log(prc);
        indicator.style.transform = `scaleX(${prc})`;
    }
    else {
        indicator.style.transform = ""
    }
}



const p = document.querySelectorAll('p'),
    option2 = {threshold:0.5},
    observer2 = new IntersectionObserver(invisible, option2);
    for(let n =0; n <p.length;n++){
        observer2.observe(p[n])
        p[n].style.color = "transparent"
        p[n].style.transition = "1.5s"
    }

function invisible(target){
    
    
    for(let i = 0; i < target.length ; i++){
        let paragraphe = target[i]
        // console.log(paragraphe);
        if(paragraphe.isIntersecting){
                paragraphe.target.style.color = ""
                paragraphe.target.style.rotate = ""
            }else{
                paragraphe.target.style.color = "transparent"
                paragraphe.target.style.rotate = "x 360deg"
        }
        
       
            
        
            

        
    }
    
    // console.log(target);
}
const 
pDernier=document.querySelector('main p:last-child'),
option3 = {rootmargin:"200px"
} ,
    observe3 = new IntersectionObserver(ajout, option3); 
    observe3.observe(pDernier)
    function ajout (entrer){
        if(entrer[0].isIntersecting){
            
            
        let newP
        for(let o = 0 ; o < 10 ; o++){
             newP = document.createElement("p")
            newP.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et recusandae quidem quia est similique ut, doloribus voluptas maiores, aspernatur dicta eum placeat molestias quo, ipsam nihil fugiat voluptatibus. Cum, numquam!"
            main.append(newP)
            newP.style.color = "transparent"
            newP.style.transition = "1.5s"
            observer2.observe(newP)

        }
        observe3.unobserve(pDernier)
        observe3.observe(newP)
    }    
}