"use strict"
/* 
    La balise canvas ne sert a rien sans JS 
    Mais avec JS on pourra creer des dessins ou animation complexes
    mais qui reste legere pour le navigateur
*/
const canvas = document.querySelector('canvas');
// ?------------------------ Optionelle, redimensionner le canvas --------------------------

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize",resize);
//  ? -------------------------------- Interagire avec le Canvas ---------------------------
/* 
    Pour interagire avec le canvas
    On va devoir recuperer le "conext"
    Cela va definir si on travaille en 2D, en 3D avec webgl
    Pour cela on utilisera la methode "getContext"
*/
const ctx = canvas.getContext("2d");
/* 
    fillRect et strokeRect permete de dessiner des rectangle 
    respectivement plein est vide
    Il prenne les paramettre suivant :
        positionX , Position Y,largeur, hauteur
    Les valeur sont des nombre qui represente des pixels
*/
ctx.fillRect(50,50,150,25);
ctx.strokeRect(100,150,25,150);
/*
    fillStyle et strokeStyle sont des proprieter qui permete de changer la couleur de remplisage et de contours
    elle prennent un string (rgb, haxadecimale, mot clef)

    Le changement s'applique uniquement sur les dessins suivants
*/
ctx.fillStyle = "rgba(156,78,94,0.5)"
ctx.strokeStyle = "red"
ctx.fillRect(25,59,78,95);
ctx.strokeRect(150,150,54,245);

/* 
    Pour des forme plus complexe ,
    On devra les desiner ligne par ligne
    on comencera par indiquer au contaxt que l'on veut comencer un nouveau chemin:
*/
ctx.beginPath();
// puis on deplacera notre curseur(crayon) la ou on souhaite commencer le dessin :
ctx.moveTo(345,70);
// Puis on indique jusque ou on souhaite tracer le trait :
ctx.lineTo(450,200);
// Pour afficher notre forme on devra indiquer de la dessiner :
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400,300);
ctx.lineTo(500,40);
ctx.lineTo(160,543);
// closePath va tenter de creer une ligne pour refermer notre forme
ctx.closePath()
ctx.strokeStyle = "green";
ctx.fillStyle = "yellow";
// lineWidth permet de gerer l'epaisseur du trait 
ctx.lineWidth = 8 ; 
ctx.stroke();
// fill permet de remplir la forme dessine
ctx.fill();

// ? --------------------- Cercle ---------------------
ctx.beginPath();
/* 
    arc permet dessiner des cercle ou arc de cercle avec les proprieter suivante :
    positionX , positionY , taille du rayon,
    position depat du radiant (0 pour un cercle complet )
    positioon en fin de radiant (Math.PI*2 pour un cercle complet)
*/
ctx.arc(89,90,42,0,2*Math.PI);
ctx.stroke();
// Suprime ce qui se trouve dans le rectangle defini en parametre :
ctx.clearRect(50,60,70,80)
// pour tous suprimer 
// ctx.clearRect(0,0,canvas.width, canvas.height);
// ? ---------------------------- Animation ---------------------
/* 
    "getImageData" permet de recuperer un objet contenant les donnee des pixels dans le rectangle donnee en argument
    
    inversement "putImageData" permet en prenant l'objet creer par "getImageData" de redessiner ce qui est sauvegarder
*/
let snapshot = ctx.getImageData(0,0,canvas.width,canvas.height);

let x = 100,y = 100, vitesseV = 5, vitesseH = 5, r =80;

function moveCercle(){

    // TODO clear & Put
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.putImageData(snapshot, 0 ,0)
    ctx.beginPath()
    ctx.arc(x,y,r,0,Math.PI*2)
    ctx.fill();
    ctx.stroke();
    // TODO Colision
    if(x+r > canvas.width || x-r < 0)
    {
        vitesseH = -vitesseH
    }
    if(y+r > canvas.height || y-r <0)
    {
        vitesseV = -vitesseV
    }
    x += vitesseH
    y += vitesseV
    /*
         Rappel la fonction callback un nombre de fois par sacond equivalent au rafraichissement de l'ecran 
         Et se met en pause quand l'onglet n'est pas actif
    */
    requestAnimationFrame(moveCercle)
}



// ? ------------------------------------ Image ----------------------------------
// Je creer un nouvel objet Image
let img = new Image();
// Je lui indique la source de l'image 
img.src= "../../img/Vector.png"
// J'attend le chargement de l'image 
img.onload=()=>{
    // Je dessine l'image : 
    ctx.drawImage(img,50,250,50,50)
    snapshot = ctx.getImageData(0,0,canvas.width,canvas.height)
    moveCercle();
}

// ? ----------------- Texte ----------------------

ctx.lineWidth = 1;
// font permet de definir la taille et la police d'ecriture 
ctx.font = "82px serif"
// 
ctx.strokeText("Coucou",500,500);
ctx.fillText("Salut",500,300);
// Chage l'alignement du texte 
ctx.textAlign = "center";
// On peut ajouter optionellement un dernier parametre pour la largeur 
ctx.fillText("Salut le monde !",500,100,200);

snapshot = ctx.getImageData(0,0,canvas.width,canvas.height)

// ?---------------- forme des trait ------------------
ctx.lineWidth = 16;

ctx.beginPath();
ctx.lineCap = "round"
ctx.moveTo(700,40);
ctx.lineTo(700,400);
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "square"
ctx.moveTo(750,40);
ctx.lineTo(750,400);
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "butt"
ctx.moveTo(800,40);
ctx.lineTo(800,400);
ctx.stroke();