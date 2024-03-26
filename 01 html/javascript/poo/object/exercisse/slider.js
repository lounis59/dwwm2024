"use strict"

const imgSources = ["arbre.jpg", "singe.jpg", "chat.jpg"];

export class ImageSlider {
    constructor() {
        this.divContainer = document.createElement('div')
        this.divContainer.className = "divPrincipale"
        this.divContainer.style.width = "80vw"
        this.divContainer.style.height = "50vw"
        this.divContainer.style.border = "2px solid black"
        this.divContainer.style.margin = "10rem"
        this.currentIndex = 0;
        this.interval = null;
        this.container = document.createElement('div');
        this.container.className = 'imgContainer';
        this.div = document.createElement('div');
        this.div.className = 'container';
        this.btnNext = document.createElement('button');
        this.btnNext.textContent = "Suivant";
        this.btnPrev = document.createElement('button');
        this.btnPrev.textContent = "Précédent";
        this.btnImg1 = document.createElement('input');
        this.btnImg1.type = "radio";
        this.btnImg1.name = "choix";
        this.btnImg2 = document.createElement('input');
        this.btnImg2.type = "radio";
        this.btnImg2.name = "choix";
        this.btnImg3 = document.createElement('input');
        this.btnImg3.type = "radio";
        this.btnImg3.name = "choix";
        this.initialiser();
    }

    initialiser() {
        this.btnNext.addEventListener('click', () => this.imageSuivante());
        this.btnPrev.addEventListener('click', () => this.imagePrecedente());
        this.btnImg1.addEventListener('change', () => this.changerImage(0));
        this.btnImg2.addEventListener('change', () => this.changerImage(1));
        this.btnImg3.addEventListener('change', () => this.changerImage(2));
        this.div.append(this.container);
        document.body.append(this.divContainer)
        this.divContainer.append(this.btnNext, this.btnPrev, this.btnImg1, this.btnImg2, this.btnImg3, this.div);
        this.afficherImage();
        this.demarrerIntervalle();
    }

    afficherImage() {
        this.container.innerHTML = "";
        const image = document.createElement('img');
        image.style.width = "80%"
        image.style.maxHeight = "50%"
        image.src = imgSources[this.currentIndex];
        this.container.append(image);
        if (this.currentIndex === 0) {
            this.btnImg1.checked = true;
            
        } else if (this.currentIndex === 1) {
            this.btnImg2.checked = true;
            
        } else if (this.currentIndex === 2) {
            this.btnImg3.checked = true;
            
        }
    }

    imageSuivante() {
        this.currentIndex = (this.currentIndex + 1) % imgSources.length;
        this.afficherImage();
        this.arreterIntervalle()
    }

    imagePrecedente() {
        this.currentIndex = (this.currentIndex - 1 + imgSources.length) % imgSources.length;
        this.afficherImage();
        this.arreterIntervalle()
    }

    changerImage(index) {
        this.currentIndex = index;
        this.afficherImage();
    }

    demarrerIntervalle() {
        this.interval = setInterval(() => this.imageSuivante(), 1000);
    }

    arreterIntervalle() {
        clearInterval(this.interval);
    }
}

const slider = new ImageSlider();
