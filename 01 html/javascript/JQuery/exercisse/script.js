"use strict"
let idInterval;
document.addEventListener("DOMContentLoaded",()=>{
    console.log("fffr");
    document.body.querySelectorAll("#slider ul li:nth-child(odd)").forEach((e)=>e.style.backgroundColor = "#aaa")
    document.body.querySelector('#checkbox').addEventListener('change',()=>{
        if(this.checked === true)
        {
            idInterval = setInterval(moveRight , 1500);
        }else
        {
            clearInterval(idInterval)
        }
    })

    let slideCount = document.body.querySelectorAll('#slider ul li').length;
    let slideWidth = document.body.querySelector('#slider ul li').offsetWidth;
    let slideHeight = document.body.querySelector('#slider ul li').offsetHeight;
    let sliderUlWidth = slideCount * slideWidth;

    document.body.querySelector('#slider').style.width = slideWidth +"px";
    document.body.querySelector('#slider').style.height = slideHeight + "px";

    document.body.querySelector('#slider ul').style.width = sliderUlWidth + "px"
    document.body.querySelector('#slider ul').style.marginLeft = -slideWidth + "px"

    document.body.querySelector('#slider ul').insertBefore(document.body.querySelector('#slider ul li:last-child'),document.body.querySelector('#slider ul').firstChild);

    function moveLeft(){
        document.body.querySelector
    }
})