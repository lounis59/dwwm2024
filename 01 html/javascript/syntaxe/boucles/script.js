"use strict";

// ?--------------- While ----------------------
let a = true 
/* 
    while va verifier une instruction entre parenthese 
    Tan que celle ci est vrait il repetera le code entre acolade
    ! ATTENTION
        Lorsque vous faite une boucle prevoyer toujour une condition de sortie
        Le navigateur pourra facilement gerer des centaine de bouclee mais si il enf ait a l'infinie  il plantera
*/
while (a){
    console.log("coucou");
    a = Math.random() < 0.5;
}
let b =0;
while (true){
    b++
    if(b<10){
        // met fin a l'iteration actuelle de la bouclke et passe a la suivante
        continue
    }
    if(b==20){
        // met fin a la boucle
        break
    }
    console.log("b vaut ",b);
}

//  do while va effectuer l'instruction une premiere fois avent verifier si elle doit etre repete
do{
    console.log("do while vaut",b);
}while(b<5)

// ?----------------------------- for ---------------------------
/* 
    for va prendre 3 instruction entre c'est parenthese 
        la premiere souvent une declaration de variable est evaluer avent la boucle
        la seconde est la condition pour continuer la boucle 
        la troisieme est evaluer a chaque fin d'iteration
*/
for(let i=0;i<10;i++){
    console.log("i vaut ",i);
}
let arr=["pizza","cannele","gratin d'auphinois"];
let person = {nom:"Pierre",age: 55,yeux:"Vert"};
/* 
    La boucle for in va creer une iteration pour chaque proprieter ou l'index d'un objet / tableau
    La variable declarer entre parenthese prenant a chaque iteration la valeur correspondante a la proprieter ou l'index suivant
*/
for(let food in arr){
    console.log("food vaut ",food);
    console.log(food,'->',arr[food]);
}
for(let carac in person){
    console.log("carac vaut ",carac);
    console.log(carac,'->',person[carac]);
}
/* 
 le for of fonctionne de la meme maniere que le for in mais il est utilisable que sur les tableau 
 et retourne a chaque iteration non pas l'index mais directement la valeur
*/
for(let f of arr ){
    console.log("f vaut ",f);
}
/* 
    Il existe d'otre boucle reserve aux tableaux comme forEach, map, reduce ....
    Mais il faut d'abbord comprendre le principe de fonction callback
*/