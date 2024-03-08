"use strict";
const p = document.querySelector("div p")
let rond = document.createElement('div')
rond.className="loupe"
function mouveMent(e){
    console.log(e.clientX);
    rond.style.top = e.clientY+"px"
    rond.style.left = e.clientX+"px"
    rond.style.translate = "-50% -50%"
    rond.style.backgroundColor = "violet"
   
}

function loupe(){
    let mouvement = false
    document.body.append(rond)
    
    document.body.addEventListener("mousemove",(event)=>{mouvement=true
    if(mouvement == true){
        mouveMent(event)
    }})

}
loupe()
