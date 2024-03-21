"use strict"

const text1 = document.querySelector('.text1 p');
const text2 = document.querySelector('.text2 p');
const bar = document.querySelector('.boite1 span');
const text3 = document.querySelector('.text3 p');
const text4 = document.querySelector('.text4 p');
const bar2 = document.querySelector('.boite2 span');

function anime(){
    const keyframes = [
        
        {direction:"alternate"},
        {width: "315px"}
    ]
    const keyframes3 = [
        {opacity:1}   
    ]
    const keyframes4 = [
        {opacity:0}   
    ]
    const keyframes2 = [
        {opacity: 1},
        {opacity: 0}    
    ]
    const options2 = {
        
        delay: 3000,
        fill: "forwards",
        duration: 1000  
    }
    const options3 = {
        
        fill:"forwards",
        duration: 1000  
    }
    const options4 = {
        
        delay:4000,
        fill:"forwards",
        duration: 1000  
    }
    
    const options = {
        
        delay:1000,
        duration: 2000,
        fill:"forwards"  
    }
    const options5 = {
        
        delay:5000,
        duration: 2000,
        fill:"forwards"  
    }
    const options6 = {
        delay:5000,
        fill:"forwards",
        duration: 1000  
    }
    text1.animate(keyframes,options)
    text1.animate(keyframes2,options2)
    text2.animate(keyframes,options)
    text2.animate(keyframes2,options2)
    bar.animate(keyframes3,options3)
    bar.animate(keyframes4,options4)
    text3.animate(keyframes,options5)
    text4.animate(keyframes,options5)
    bar2.animate(keyframes3,options6)
    
}
anime()