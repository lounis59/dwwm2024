'use stict'

export class justePrix{
    constructor(){
        this.resultat = Math.floor(Math.random()*100)
        this.init()
    }
    init(){
        this.divContainer = document.createElement('div');
        this.divContainer.className = "divPrincipale divJusteprix";
        this.divContainer.style.width = "80vw";
        this.divContainer.style.height = "50vw";
        this.divContainer.style.border = "2px solid black";
        this.divContainer.style.margin = "10rem";
        this.card = document.createElement('div')
        this.card.className = 'card'
        this.win = document.createElement('h2')
        this.win.style.color = "transparent"
        this.form = document.createElement('form')
        this.text = document.createElement('h2')
        this.dataUser = document.createElement('input')
        this.valide = document.createElement('input')
        this.dataUser.type = "text"
        this.valide.type = 'submit'
        this.valide.value = "Entrer"
        document.body.append(this.divContainer)
        this.divContainer.append(this.card,this.text,this.form)
        this.card.append(this.win)
        this.form.append(this.dataUser,this.valide)
        this.text.textContent = "Tente de trouver le juste prix"
        this.win.textContent = this.resultat
        this.event()
    }
    event(){
        this.form.addEventListener('submit',(e)=>{
            e.preventDefault()
            if(this.dataUser.value == this.resultat){
                this.text.textContent = 'bien jouer'
                this.win.style.color = ""
                this.win.style.transition = "1s"
            }
            if(this.dataUser.value > this.resultat){
                this.text.textContent = "C'est moins"
            }
            if(this.dataUser.value < this.resultat){
                this.text.textContent = "C'est plus"
            }
        })
    }
}