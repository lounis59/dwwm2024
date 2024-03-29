"use strict"
export default class Jauge_Pourcent extends HTMLElement
{
    constructor()
    {
        super()
        this.innerHTML = ` <svg id="svg" width="200" height="200" viewPort="0 0 100 100" xmlns="https://www.w3.org/2000/svg">
        <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" >
        </circle>
        <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48"
            stroke-dashoffset="0"></circle>
    </svg>`

        const circle = document.querySelector('circle');
        const radius = parseFloat(circle.getAttribute('r'));
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDashoffset = `${circumference}`
        console.log(circumference);
    }
}

customElements.define("jauge-pourcent", Jauge_Pourcent)