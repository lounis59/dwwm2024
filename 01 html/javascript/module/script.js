'use strict'
/* 
    Ecmascript permet l'export de l'import de fonction et objets(entre autre chose )
    Cela permet de diviser nos projet en plusieur fichier reutilisable . 
    De plus cela nous evite d'avoir pluseur balise script dans notre HTML que l'on doir placer dans le bonne ordre.

    Pour utiliser cet export import, notre fichier principale doit etre lie au HTML avec l'atibut :
        type="module"

    ? --------------------------- Export -------------------------------
    Pour importer du code il faut avent tous l'exporter 
    Dans le fichier que l'on souhaite exporter

    On va jouter devant les element a exporter , les mot clefs
        export ou export default

    On peut "expor default" qu'un seul element par fichier 

    ?------------------------- Import ---------------------------------
    Il y a deux solution pour importer des element 
    La premiere ne peut de trouver qu'au niveau le plus haut de mon code 
    C'est a  dire hors de toute fonction condition .....

    Pour exporter les elemnt qui n'ont pas le mot clefs default 
    On va utimiser le mot clef "import" suivi d'accolade dans le quelle in trouvera le nom des element a importer separer d'une virgule
    Enfin on met le mot clef "from" suivi du chemin vers le fichier 
        * import {salut,coucou} from ".salutaion.js"
    Lors de l'import le code executer (ici le console.log se lance )
    si pour une raison ou une autre un meme fichier est importer plusieru fois le code ne se relancera pas

    Si un export default est present , pour le selectionner on placera avent les accolades un nom (peu import le quel) il sera utiliser pour contenir l'element exporte par default :
        * import bidule, {salut,coucou} from "./salutation.js"

    Dans le de nombreux import on peut se retrouver avec des element portant le meme nom 
    Pour eviter un conflit on peut renomer nos imports :
        * import bidule, { salut as s1, coucou} from "./salutation.js" 

    Si on souhaite tous importer d'un coup on pourra crer un objet contenant tous les export 
        * import * as salutation from "./salutation.js"

*/
import bidule, { salut as s1,coucou } from "./salutation.js"
import * as salutation from "./salutation.js"

s1()
coucou('Maurice')
bidule()
console.log(salutation);
salutation.coucou('Roger')
salutation.default()
salutation.salut()
/* 
    Pour faire un import sans etre au top level du cript 
    Il ne faudra pas utiliser le mor clef import mais la fonction "import()"

    Celle ci retournera une promesse et cette promesse contiendra un objet avec tout ce qui a eter exporter
*/
window.addEventListener("click", hello)

async function hello(){
    const bonsoir = await import("./salutation.js")
    console.log(bonsoir);

    bonsoir.salut()
    bonsoir.coucou("Charles")
    bonsoir.default()
}