"use strict"

let r1 = [1,9,65,84,5,"bonour",32,64,72,16,35]
let r2 = [54,8,26,3,46,61,14,1,22]

r1.sort(tri)
    
r2.sort(tri)
function tri (a,b){

    if(a<b){
        return -1
    }
    if(a>b){
        return 1 
    }else{
        return 0
    }
}


console.log(r2);
function supertri(tab){

    return new Promise((resolve,reject)=>{
        tab.sort((a,b)=>{
            if( typeof a !== typeof b){
                reject("Type refuser")
            }
            if(a<b){
                return -1
            }
            if(a>b){
                return 1 
            }else{
                return 0
            }
            
        })
        resolve(tab)
    })
}

supertri(r1).then((tab)=>{console.log(tab);}).catch((err)=>{console.log(err);})

const feu1 = document.querySelector('.feu1')
const feu2 = document.querySelector('.feu2')
const feu3 = document.querySelector('.feu3')

function feuVert (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            feu1.style.backgroundColor = "green"
            feu3.style.backgroundColor = ""

            resolve()
        },2000)
    })
}
function feuOrange (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            feu2.style.backgroundColor = "orange"
            feu1.style.backgroundColor = ""
            resolve()
        },3000)
    })
}
function feuRouge (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            feu3.style.backgroundColor = "red"
            feu2.style.backgroundColor = ""
            resolve()
        },1000)
    })
}
function feuDeCirculation(){

   feuVert().then(()=>{
    feuOrange().then(()=>{
        feuRouge().then(feuDeCirculation())
    })
   })
}
feuDeCirculation()