"use strict"
export default class SuperDiv extends HTMLDivElement
{
    constructor()
    {
        super();
        this.setStyle();
        this.addEventListener('click',this.hide)
    }
    hide()
    {
        if(this.style.height === "1rem")
        {
            this.style.height = this.size.height + "px"
        }else
        {
            this.style.height = "1rem"
        }
    }
    setStyle()
    {
        this.style.display = "block";
        this.style.overflow = "hidden";
        this.style.backgroundColor = this.getAttribute("bg")??"red";
        this.style.transition = "height 0.3s linear";
        this.size = this.getBoundingClientRect();
        this.style.height = this.size.height + "px"; 
    }

    connectedCallback()
    {
        console.log("Element ajouter a la page")
    }
    disconnectedCallback()
    {
        console.log("elemnt retirer de la page");
    }
    adoptedCallback()
    {
        console.log("Elemnt deplacer dans un autre document");
    }
    attributeChangedCallback(name,old,now)
    {
        console.log(`l'attribut "${name}" a change`);
        console.log("ancienement : ", old);
        console.log("maintenant :", now);
    }
    static get observedAttributes()
    {
        return ["style","class"]
    }

}

customElements.define("super-div",SuperDiv, {extends : "div"})