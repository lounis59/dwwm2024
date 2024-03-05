"use strict";
/* 
    Math.random() retourne un chiffre enre 0 et 1
    Math.floor() arrondi a l'inferieur
*/
let x = Math.floor(Math.random()*20);
console.log(x);

/* 
    Une condition comencera obligatoirement par un "if" il sera suivi de parenthese contenant la condition
    Puis d'acolade contenant l'instruction a realiser 

    Si la condition est "true" alors l'instruction sera realise
    Si c'est "false" elle sera ignore
*/
if(x<10)
{
    console.log("x est plus petit que 10");
}
/* 
    On pourra optionellement faire suivre notre "if" d'autant de "else if(){}" que l'on souhaite 
    Ce sont des condition supplementaire qui seron verifier si toute les presedante sont fausse
*/
else if(x >10){
    console.log("x est plus grand que 10");
}
/* 
    On peut obtionelement terminer une condition par un "else{}"
    Celui ci ne prend pas de condition et s'executera si tout se qui le precede est faux 

*/
else{
    console.log("x vaut 10");
}
/* 
    Si une condition ne prend qu'une seul instruction 
    On peut l'ecrire sans acolade
*/
if (x<10)
    console.log("x est plus petit que 10");
else if (x>10)
    console.log("x est plus grand que 10");
else
    console.log("x vaut 10");

/* 
    Si votre condition est asser simpl on peut l'ecrire en une seul instruction 
    sous la forme d'une ternaire .sa syntaxe est la suivante :
    condition , true : false;
*/
let message = x <= 10 ? "x est plus petit que 10" : "x est plus grand que 10";
console.log(message);

// ?------------------------------SWITCH ------------------------
// prompt affiche une boite de dialogue ou l'utilisateur peut rentrer un texte 
let ville = prompt("De quel ville venez vous ?");
console.log(ville);
// Si l'utilisateur a anule on obtien null
if(ville===null)ville = "sans reponse";
/* 
    Le switch prend une valeur a comparer avec c'est different cas 
    Il iraz verifier si il possede un "case" corespondant a la valeur entre c'est parenthese 
    
    Chaque case doit se treminer par un break sinon l'instruction suivante sera realise

    .toLowerCase() permet de tranformer un texte en sa version "minuscule"
*/
switch(ville.toLowerCase()){
    case "lille":
        console.log("Vive le maroille");
        break
    case "tokyo":
    case "londres":
    case "berlin":
    case "paris":
        console.log("Une capital donc");
        break
    default:
        console.log("Je ne conais pas cette ville");
}
// ?--------------------- Operateur de chainage optionelle (?.)---------

let obj1 = {info:"cet objet est un exemple"},
    obj2 = {},
    obj3 = null;
/* 
    Ajouter un "?" avant de tenter de chainer une proprieter permeet de verifier si la proprieter precedente existe belle et bien 
    Cela peut eviter des erreure lorsque le contenue d'un objet peut varier 
*/
console.log(obj1.info.toUpperCase());
console.log(obj2.info?.toUpperCase());
console.log(obj3?.info?.toUpperCase());
/* 
    if(ville === null ) ville = "sans reponse";
    swirch(ville.toLowerCase())
    remplacable par:
    switch(ville?.toLowerCase())
*/
// ?--------------------- Operateur de coalesence (??) -----------

let a , b =undefined,c = null , d =  "j'aime les crepe";
/* 
    L'operateur de coalesence va verifier si la valeur precedente n'est pas nul ou undefined
    Si elle existe alor elle est afficher sinon c'est la valeur suivante qui est utilise
*/
console.log(a??"a n'existe pas ",b??"b n'existe pas",c?? "c n'existe pas",d??"d n'exite pas");
/* 
    if(ville === null) ville = "sans reponse";
    remplacable par :
    ville = ville ?? "sans reponse";
*/