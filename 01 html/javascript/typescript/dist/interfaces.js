"use strict";
;
document.chaussette;
/*
    Pour utiliser une interface sur une classe
    On utilise le mot clef "implements"
    Ensuite la classe devra definir tout ce qui est demande par l'interface
*/
class Point3D {
    x = 0;
    y = 0;
    z = 0;
    get() { return this.x; }
    ;
}
function show(p) { }
show(new Point3D);
