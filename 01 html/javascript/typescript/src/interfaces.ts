/* 
    Les interfaces sont a la jonctions entre les types et les classe abstraite
    a la difference des classe abstraite l'interface ne contiendra que des declaration aucune definition 
    a la diference des types l'interface sera reserver au objet et pourra etre redefinie
*/
type Chaussette = string ; 
// Impossible de redefinire un type 
// type Chaussette = number;

interface Point 
{
    x: number;
    y: number;
    get():number;
}
// La proprieter "z" est ajouter a l'interface "Point"
interface Point {z:number};
/* 
    vsCode utilise de sinterface en typescript pour indiquer ce que contiennent les different objets de Javascript

    Ici je fais croire a vsCode que les objets " document" contienne une proprieter "chaussette"
    Ce qui n'est evidament pas le cas
*/
interface Document {chaussette:string}
document.chaussette
/* 
    Pour utiliser une interface sur une classe
    On utilise le mot clef "implements"
    Ensuite la classe devra definir tout ce qui est demande par l'interface
*/
class Point3D implements Point
{
    x=0;
    y=0;
    z=0;
    get(){return this.x};
}
function show(p:Point){}
show(new Point3D)