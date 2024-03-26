"use strict"

import { ImageSlider } from "./slider.js"
import { CanvasApp } from "./paint.js"
import { justePrix } from "./justeprix.js"



const select = document.querySelector('select')

select.addEventListener('input',()=>{
    document.querySelector('.divPrincipale')?.remove()
    if(select.value == "slider"){
        const slider = new ImageSlider();
    }
    if(select.value == "paint"){
        const canvas = new CanvasApp()
       
    }
    if(select.value == "justePrix"){
        const jeu = new justePrix()
    }
})