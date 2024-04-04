/* 
    Le principale import de typescript c'est dans son nom c'est le typage !

    C'est a dire comme dans de nombreux langages (java,c#...)
    Il va nous falloir indiquer le type de nos variables et argument 
*/
let mot: string = "bonjour";
let chiffres: number = 42;
let bool: boolean = true;
let nu: null = null;
// Si je tente de changer le type d'une variable j'ai une erreur:
// mot = 5;
// On peut indiquer le type de donne contenue par un tableau : 
const arr1: string[] = ["Truc","Bidule"];
// Si une variable ou un tableau peut continir diferent type je peux utiliser "|"
const arr2: (string|number)[] = ["chaussette",42];

// Si une variable peut contenir n'importe quelle type de donnee je peux utiliser le type "any"
let truc: any = 5;
truc = true;
const arr3: any[] = ["cela",42,true];

/* 
    Pour type un objet ,
    Il me faudra indiquer le type de chaque propriete 
*/
const p1:{prenom: string,age:number} = {prenom:"Maurice",age:42}
// On peut indiquer qu'une proprieter est optionelle "?"
const p2 : {prenom:string,age?:number} = {prenom:"Pierre"};

// Si mon objet peut avoir un nombre indefinie de proprieter je peux utiliser : 
const p3: {prenom:string,[key:string]:string} = {prenom:"Charle",nom:"Dupont",loisir:"Petanqie"};

// Dans le cas d'un instenciation de class on peut utiliser le nom de celle si 
const today: Date = new Date();

// Bien que plus rare si on met une fonction dans une variable :
const salut : Function = ()=>{};

/* 
    On peut ossi typer les parametre et valeurs de retour de notre fonctions
*/
function clickMe(e:MouseEvent):void
{
    console.log("Merci pour se clique !",e.target);
}
// La fonction callback s'attend a un evenement de souris
// document.addEventListener('input',clickMe);
document.addEventListener('click',clickMe);

// On peut indiquer qu'un parametre est en lecture seul
function tri(arg:readonly any[])
{
    // Je ne peux changer mon argument
    // arg.sort()
    const a2 = [...arg].sort();
}

// Si on ne precise pas le type d'une nouvelle variable elle prendra le type de sa premiere valeur :
let a = 5;
// a = "test";

/* 
    Certaine fonction on plusieur valeurs de retour possible 
    Par exemple querySelector retourne "Element" ou "null"
    Cela va poser probleme sur plusieur point :
*/
// const btn1 = document.querySelector('#compte');
// btn1?.style.color = "red";
/* 
    Deux erreurs :
        notre selection est peut etre null
        la proprieter style n'existe pas sur element 
    Bien que l'on sache que l'on vise un HTMLElement, querySelector nous precise seulement que c'est un Element 

    Plusieurs solution a ces probleme :
    le "!" a la fin fait disparaitre la possibilite de "null"
*/
const btn2 = document.querySelector('#compte')!;
// btn2.style.color = "red";
/* 
    Mais on a encore le probleme de "Element"
    avec "<>" devant la parenthese on change la valeur de retour
*/
const btn3 = document.querySelector<HTMLButtonElement>('#compte');
// btn3.style.color = "red";
/* 
    Cette solution regle le probleme de Element qui n'a pas la propriete style 
    Mais pas celle du "null"

    On peut combiner les deux solution precedente ou bien utiliser l'une de celle ci :
*/
// const btn4 = <HTMLButtonElement>document.querySelector("#compte");
const btn4 = document.querySelector("#compte") as HTMLButtonElement;
btn4.style.color = "red"

/* 
    On pourait aussi utiliser la narrowing qui sera le theme de la prochaine partie.
*/