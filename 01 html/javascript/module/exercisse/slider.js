'use strict'

const imgSources = ["arbre.jpg", "singe.jpg", "chat.jpg"];

export default function sliderJS() {
    window.onclick = ()=>{
        window.onclick = ""
        const btnNext = document.createElement('button');
        const btnPrev = document.createElement('button');
        const btnImg1  = document.createElement('input')
        const btnImg2  = document.createElement('input')
        const btnImg3  = document.createElement('input')
        const div = document.createElement('div')
        const container = document.createElement('div')
       
        container.className = 'imgContainer'
        div.className = 'container'
        btnImg1.type = "radio"
        btnImg2.type = "radio"
        btnImg3.type = "radio"
        btnImg1.name = "choice"
        btnImg2.name = "choice"
        btnImg3.name = "choice"
        btnNext.textContent = "Next";
        btnPrev.textContent = "Previous";
        document.body.append(btnNext, btnPrev , btnImg1,btnImg2,btnImg3,div);
        div.append(container)
        let interval;
        let translate = 0
        let currentIndex = 0; // Variable pour suivre l'index de l'image actuellement affichée
    
        const displayImage = () => {
            // Supprimer toutes les images précédentes
            imgSources.forEach(()=>{
                
                const image = document.createElement('img');
                image.src = imgSources[currentIndex];
                container.append(image);
                currentIndex ++
                console.log(currentIndex);
            })
    
            // Créer et afficher l'image actuelle
            if(currentIndex == 0){
                btnImg1.checked = true
            }else if(currentIndex == 1){
                btnImg2.checked = true
            }else if(currentIndex == 2){
                btnImg3.checked = true
            }
        };
    
        // Afficher la première image au chargement
        displayImage();
        function nextImage(){
            btnImg1.checked = false
            btnImg2.checked = false
            btnImg3.checked = false
            currentIndex ++
            translate -= 50
            if(translate <  -100){
                translate =0
            }
            container.style.transform = `translateX(${translate}vw)`;
        }
        function prevImage(){
            
            btnImg1.checked = false
            btnImg2.checked = false
            btnImg3.checked = false
            currentIndex --
            translate +=50
            if(translate > 0){
                translate = -100 
            }
            container.style.transform = `translateX(${translate}vw)`;
        }
        // Gérer le clic sur le bouton Next
        btnNext.addEventListener('click', ()=>{
            nextImage()
            
        });
        interval = setInterval(nextImage,1000)
        // Gérer le clic sur le bouton Previous
        btnPrev.addEventListener('click', () => {
            prevImage()
            
        });
        btnImg1.addEventListener('input',()=>{
            clearInterval(interval)
            if(container.style.transform !== 0){
                
               
                container.style.transform = ""
            }else{
            }
            
        })
        btnImg2.addEventListener('input',()=>{
            clearInterval(interval)
            if(translate !== 50 && translate > 50){
                
                container.style.transform = `translateX(50vw)`;
            }else if(translate !== 50 && translate < 50){
                
                container.style.transform = `translateX(-50vw)`;
            }
            
        })
        btnImg3.addEventListener('input',()=>{
            clearInterval(interval)
            if(translate !== 100 && translate > 100){
                
                container.style.transform = `translateX(+100vw)`;
            }else if(translate !== 100 && translate < 100){
                
                container.style.transform = `translateX(-100vw)`;
            }
            
            })
           
    }
}

