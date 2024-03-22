"use strict"

const canvas = document.querySelector('canvas');
const color = document.querySelector('#colorChoice');
const size = document.querySelector('form');
const sizeNumber = document.querySelector('#sizeChoice');
function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize()
window.addEventListener("resize",resize);

const ctx = canvas.getContext('2d');
let painting = false
let startY ,startX,mouseX,mouseY



canvas.addEventListener('mousemove',(e)=>{
    mouseX = e.clientX
    mouseY = e.clientY
    
    if(painting == true){
        
        ctx.beginPath();

        ctx.lineCap = "round"
        ctx.moveTo(startX,startY)
        ctx.lineTo(mouseX,mouseY) 

        // ctx.lineWidth = "10"
        ctx.stroke()
        
        startX = mouseX
        startY = mouseY
        
    }
    color.addEventListener('change',()=>{
        ctx.strokeStyle = color.value
    })
    size.addEventListener('submit',(e)=>{
        e.preventDefault()
        ctx.lineWidth = sizeNumber.value
    })
    
})

canvas.addEventListener('mousedown',(e)=>{
    painting=true
    startX = e.clientX
    startY = e.clientY
    })
canvas.addEventListener('mouseup',()=>{painting=false})

