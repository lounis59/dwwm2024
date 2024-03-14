"use strict"

const form = document.querySelector('form');


form.addEventListener("submit", tache);

function tache (event){
    event.preventDefault();
    let data = new FormData(form)
    let user
    
    data.forEach((value, name)=>{
        user=value
        
        console.log(user);
    })
    
    let strUser = JSON.stringify(user)
    console.log(strUser);
    localStorage.setItem("donne",strUser)
    let userTask =localStorage.getItem("donne")
    if(userTask){
        let cross = document.createElement('p')
        cross.textContent = "❌"
        let div =  document.createElement("div")
        div.classList.add("cadre")
        let p = document.createElement("p")
        p.textContent = user
        div.appendChild(p)
        div.appendChild(cross)
        document.body.append(div)
        localStorage.setItem("tache","div")
        console.dir(div)
        
        cross.addEventListener("click",()=>{
            document.body.removeChild(div)
        })
    }
    
}
document.body.appendChild = localStorage.getItem("tache")

