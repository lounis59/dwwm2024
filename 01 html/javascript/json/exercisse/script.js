"use strict"

const form = document.querySelector('form');
let userTask =localStorage.getItem("donne")
userTask = JSON.parse(userTask)
let userData=userTask??[]

form.addEventListener("submit", tache);

function tache (event){
    event.preventDefault();
    let data = new FormData(form);
    let user 
   
    data.forEach((value)=>{
        user=value
        
        
        console.log(user);
    })
    userData.push(user)
    console.log(userData);
    let strUser = JSON.stringify(userData)
    console.log(strUser);
    localStorage.setItem("donne",strUser)
    if(strUser){
        let cross = document.createElement('p')
        cross.textContent = "❌"
        let div =  document.createElement("div")
        div.classList.add("cadre")
        let p = document.createElement("p")
        p.textContent = user
        div.appendChild(p)
        div.appendChild(cross)
        document.body.append(div)
        console.dir(div)
        
        cross.addEventListener("click",()=>{
            document.body.removeChild(div)
            localStorage.removeItem("donne");
        })
    }
    
}




if(userTask){
    userData.forEach((text)=>{

        let cross = document.createElement('p')
        let div =  document.createElement("div")
        let p = document.createElement("p")
        div.classList.add("cadre")
        cross.textContent = "❌"
        p.textContent = text
        div.appendChild(p)
        div.appendChild(cross)
        document.body.append(div)
        cross.addEventListener("click",()=>{
            document.body.removeChild(div);
            userData.splice(p)

           localStorage.setItem("donne", JSON.stringify(userData));
        })
    })
}