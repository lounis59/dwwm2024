"use strict"
/* 
    Le mot clef this represente l'objet dans le quel il se trouve 
    Par default il represente l'objet window
*/
console.log(this);
console.log(this === window);

function test(){
    /* 
        Dans une fonction il sera soit undefined (si use strict est utilise )
        soit une fois l'objet fenetre
    */
    console.log(this);
}
test();
/* 
    Dans un addEventListener this represente l'objet sur lequel l'evenement est place
*/
document.body.addEventListener("click",test)
/* 
    Sur un evenement au click this peut etre utile pour toujour cibler l'element voulu
    event.target represente l'element clique,qui peut changer si notre cible a des enfant 
    (ici il change si on clique sur le span)
*/
document.body.addEventListener("click",function(e){
    console.log(e.target, this)
});
/* 
    ! ATTENTION 
    Si une fonction fleche est utiliser this ne represente plus la cible de l'evenement mais l'objetc englobent (ici "window")
*/
document.body.addEventListener("click",(e)=>{
    console.log(this)
});

document.body.click();
/* 
    ".bind()" permet de creer une copi d'une fonction avec une valeur pour "this" qui difere
    ici mon "test2" a comme valeur pour "this" l'objet donne en argument de bind 
*/
let test2 = test.bind({text:'Salut tou le monde'});
test()
test2()

let article = document.createElement("article");

document.addEventListener("click", test.bind(article));
document.body.click()