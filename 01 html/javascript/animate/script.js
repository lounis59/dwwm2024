"use strict"
const div = document.querySelector('.anime')

document.querySelector('.b1').addEventListener('click', animation1);
document.querySelector('.b2').addEventListener('click', animation2);
document.querySelector('.b3').addEventListener('click', animation3);
document.querySelector('.b4').addEventListener('click', animation4);
document.querySelector('.b5').addEventListener('click', animation5);
function animation1 (){
    /* 
        La methode animate de JS permet des animation plus pousses qu'and CSS
        Elle prendra deux argument , le premier etant la liste des keyframes 
        le second un objet contenant les option de l'animation 
        Les keyframes peuvent etre un tableau d'objet 
            ou un objet contenant des tableau
    */
   const keyframes = [
    {left:0,top:0},
    {left: "80%",top:"-20px"},
    {left:"20%",top:"500px"}
   ];
   const option = {
        duration: 2000,
        iterations:3,
        fill:"forwards",
        direction:"alternate"
   };
//    J'utilise la methode animate sur l'element HTML que je souhaite animer : 
   div.animate(keyframes, option);
}
function animation2 (){
    // Version de keyframes avec un objet contenat des tabmeaux :
    const keyframes = {
        backgroundColor: ["blue","red","green"],
        opacity: [1,0,0.5]
    };
    div.animate(keyframes, {
        duration: 2000,
        direction: "alternate",
        iterations: 2 
    })
    console.log(keyframes);
}

function animation3 (){
    // on peut sauvegarder l'objet animate dans une variable afin d'avoir acces a certaine methode comme "addEventListener "
    const anime = div.animate(
        {transform:["skew(0deg,0deg)","skew(360deg,180deg)","skew(0deg,360deg)"]},
        {duration:1500,direction:"alternate",iterations:1}
    )
    console.log(anime);

    anime.addEventListener("finish",()=>{
        document.querySelector('.b4').style.opacity = 1;
    })
}
let a4 ;
function animation4 (){
    if(!a4){

        a4=div.animate(
            {borderRadius: ["0","50%","5px","25%"]},
            {duration: 2500, fill:"forwards"}
        );
    }else{
        // On peut remettre a 0 notre animation avec ".cancel()"
        a4.cancel();
        a4 = undefined;
    }
}
// La methode animate n'ait qu'un racourci pour l'utilisation  des objet suivants:
let keyframes = new KeyframeEffect(div,[
    {transform:"translate(0,0)"},
    {transform: "translate(100%,50%)"}
],{duration: 2500,fill:"forwards"});

let a5 = new Animation(keyframes,document.timeline);
async function animation5 (){
    const b5 = document.querySelector('.b5');
    // La proprieter ".playState" represente l'etat dans lequel est l'animation (en cours, termine...)
    switch(a5.playState){
        case "idle":
            a5.play();
            b5.textContent = "Pause";
            // La proprieter finished contient une promesse se resolvant quand l'animation est terminee 
            await a5.finished
            b5.textContent="Reverse"
            break
        case "running":
            a5.pause()
            b5.textContent="Continue"

            break;
        case "paused":
            a5.play()
            b5.textContent = "pause"
            break;
        case "finished":
            a5.reverse()
            b5.textContent = "pause"
            await a5.finished
            b5.textContent = "Start"
            break;

    }
}