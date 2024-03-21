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