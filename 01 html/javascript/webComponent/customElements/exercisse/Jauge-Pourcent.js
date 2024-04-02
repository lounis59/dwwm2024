"use strict"
export default class Jauge_Pourcent extends HTMLElement
{
    constructor()
    {
        super()
        this.innerHTML = ` <svg id="svg" width="200" height="200" viewPort="0 0 100 100" xmlns="https://www.w3.org/2000/svg">
        <circle id="cercleFond"r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" >
        </circle>
        <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48"
            stroke-dashoffset="0"></circle>
    </svg>`
        this.circleComplet = document.querySelector('svg');
        this.pourcentage = document.querySelector('.jauge span');
        this.input = document.querySelector('.jauge input');
        this.jauge = document.querySelector('#bar');
        const circle = document.querySelector('circle');
        const radius = parseFloat(circle.getAttribute('r'));
        this.circumference = 2 * Math.PI * radius;
        this.jauge.style.strokeDashoffset = `${this.circumference}`
        this.circleComplet.style.rotate = "-90deg"
        console.log(this.circumference);
        this.change()
    }
    change()
    {
        this.input.addEventListener('change',()=>{
            if(this.input.value > 100 || this.input.value<0){return}
            if(!this.input.value ){this.pourcentage.textContent = "0%"}
            this.pourcentage.textContent = this.input.value + "%"
            this.jauge.style.strokeDashoffset =  this.circumference - this.circumference/100*this.input.value
            this.jauge.style.transition = "1s"
            console.log(this.jauge.style.strokeDashoffset);
        })
    }
}

customElements.define("jauge-pourcent", Jauge_Pourcent)