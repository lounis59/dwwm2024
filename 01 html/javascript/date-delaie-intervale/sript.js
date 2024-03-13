'usestrict';

const copyright = document.querySelector('footer span')
const mainTime = document.querySelector('main time')
const mainBtn = document.querySelector('main button');
const progress = document.querySelector('.progress')

/*  
    Certain objet de javascript doivent etre creer a partir de classe (ou de constructeur)
    nous rentron dands les detail sur le cours POO

    Pour l'instant il faut savoir c'est que pour cree ces objet 
    nous devont faire preceder leur nom du mot clef "new"

    Cela va creer une nouvelle instance de cet objet 
    Dans notre cas nous allons utiliser  l'objet "Date" qui contiendra l'heure et la date du moment de sa creation 
*/
const date = new Date()
console.log(date);
// cet objet contient tout un tas de methode pour recuperer les differentes informztion sur la date et l'heure
copyright.textContent =date.getFullYear()
mainTime.textContent = date.toLocaleTimeString();

function timer(){
    const dateTimer = new Date()

    mainTime.textContent=dateTimer.toLocaleTimeString();
}
/* 
    la fontion setInterval permet de relancer la fontion donne en preier argument (en ms)

    Elle retourne un id que l'on peut reutiliser ailleur 
*/
setInterval(timer , 1000)
let idInterval = setInterval(timer, 1000);
console.log(idInterval);

// ClearInterval 
mainBtn.addEventListener("click", ()=>clearInterval(idInterval));

//  setTimeout() works same as setInterval , relaunche only 1 time after time given

let idTimeout = setTimeout( ()=>console.log("Coucou en retard"), 3000);

let w = 0;

function load()
{
    if(w === 100)return;
    w++;
    progress.style.width = w+"%";
    setTimeout(load, 100);
}
load();
const aiguille2 = document.querySelector('.aiguille2');
const aiguille3 = document.querySelector('.aiguille3')

const aiguille1 = document.querySelector('.aiguille1');


setInterval(()=>{
    const date = new Date
  let  h = date.getHours()
   let m = date.getMinutes()
   let s = date.getSeconds()

   let hAngle = h*30-90
   let mAngle = m*6-90
   let sAngle = s*6-90
   aiguille1.style.rotate = sAngle + "deg"
   aiguille2.style.rotate = mAngle + "deg"
   aiguille3.style.rotate = hAngle + "deg"
},1000)




