"use strict"

const selecteur = document.querySelector('#selecteur')
const url = "./hero.json"

fetch(url).then((response)=>{
    if(response.ok){
        response.json()
        .then((data)=>{
            selecteur.addEventListener("input",()=>{
                console.dir(selecteur.options);
                let div = document.createElement('div')
                let p = document.createElement('p')
                let boite = document.querySelector('.boite')
                if(selecteur.options[0].selected  && !document.querySelector('.h1')){
                    div.className = "card h1"
                    const members0 = data.members[0]
                    p.innerHTML = "Name : " +members0.name + "<br> Age : " + members0.age + "<br>Secrete Identity : " + members0.secretIdentity + "<br><br>Powers : " + members0.powers
                    boite.appendChild(div)
                    div.appendChild(p)
                }else if(!selecteur.options[0].selected ){
                   document.querySelector('.h1')?.remove()
                   
                }
                if(selecteur.options[1].selected  && !document.querySelector('.h2')){
                    
                    div.classList = "card h2"
                    const members0 = data.members[1]
                    p.innerHTML = "Name : " +members0.name + "<br>Age : " + members0.age + "<br>Secrete Identity : " + members0.secretIdentity + "<br>Powers : " + members0.powers
                    boite.appendChild(div)
                    div.appendChild(p)
                }else if(!selecteur.options[1].selected ){
                    document.querySelector('.h2')?.remove()
                    
                 }
                if(selecteur.options[2].selected  && !document.querySelector('.h3')){
                    
                    div.className = "card h3"
                    const members0 = data.members[2]
                    p.innerHTML = "Name : " +members0.name + "<br>Age : " + members0.age + "<br>Secrete Identity : " + members0.secretIdentity + "<br>Powers : " + members0.powers.join(", ")
                    boite.appendChild(div)
                    div.appendChild(p)
                }else if(!selecteur.options[2].selected ){
                    document.querySelector('.h3')?.remove()
                    
                 }
                if(selecteur.options[3].selected  && !document.querySelector('.h4')){
                    
                    div.className = "card h4"
                    const members0 = data.members[3]
                    p.innerHTML = "Name : " +members0.name + "<br> Age : " + members0.age + "<br> Secrete Identity : " + members0.secretIdentity + "<br> Powers : " + members0.powers
                    boite.appendChild(div)
                    div.appendChild(p)
                }else if(!selecteur.options[3].selected ){
                    document.querySelector('.h4')?.remove()
                    
                 }
            })
        })
    }
})

const selectLang = document.querySelector('.selectLang')
const title = document.querySelector('.boite2 h2')
const text = document.querySelector('.boite2 p')
const lang = localStorage.getItem('lang')
const urlLang = "./lang.json"

fetch(urlLang).then((response)=>{
    if(response.ok){
        response.json().then((data)=>{
            
            selectLang.addEventListener("change",()=>{
            if(selectLang.value == "fr"){
                title.textContent = data.Welcome_message.fr
                text.textContent = data.Text.fr
                localStorage.setItem('lang','fr')
            }
            if(selectLang.value == "en"){
                title.textContent = data.Welcome_message.en
                text.textContent = data.Text.en
                localStorage.setItem('lang','en')
            }
            if(selectLang.value == "jap"){
                title.textContent = data.Welcome_message.jap
                text.textContent = data.Text.jap
                localStorage.setItem('lang','jap')
            }
            })
            if(lang){
                selectLang.value = lang
                let event = new Event("change")
                selectLang.dispatchEvent(event)
            }
        }
        )
    }
})

const urldog = "https://api.thedogapi.com/v1/images/search";

fetch(urldog).then((reponse)=>{
    if(reponse.ok){
        reponse.json().then((data)=>{
            const div = document.createElement('div')
            const img =document.createElement('img')
            console.log(data)
            img.setAttribute("src", data[0].url) 
            img.style.width = data[0].width
            img.style.height = data[0].height
            document.body.append(div)
            div.appendChild(img)
        })
    }
})

const onePunch = "https://animechan.xyz/api/random/anime?title=one%20punch%20man"

fetch(onePunch).then((response)=>{
    if(response.ok){
        response.json().then((data)=>{
            let titre = document.createElement('h2')
            let phrase = document.createElement('p')
            let boite = document.createElement('div')
            let auteur = document.createElement('p')
            boite.className = "anime"
            titre.textContent = data.anime
            phrase.textContent = data.quote
            auteur.textContent = data.character
            console.log(data);
            document.body.append(boite)
            boite.append(titre,phrase,auteur)

        })
    }
})