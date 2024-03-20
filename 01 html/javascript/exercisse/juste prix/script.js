"use strict"

const data = document.querySelector('form');
const text = document.querySelector('h2');
const nombre = document.querySelector('#reponse');
data.addEventListener('submit',(e)=>{
    e.preventDefault()

    if(nombre.value == 5){
        text.textContent = "bienjouer"
    }
    
})