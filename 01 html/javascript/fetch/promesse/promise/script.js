"use strict"

for(let i = 0 ; i<1_000_000_000;i++){

    if(i === 1_000_000_000){

        console.log("Synchrone : Boucle terminer");
    }
}
console.log("Bonjour aprer la boucle");
/* 
    Par default le JS est "synchrone"
    C'est a dire qu'il attend la fin d'une instruction avant de passer a la suivante 

    Mais JS peut gerer la programation "Asynchrone"
    Dans ce cas une fois qu'une instrution asynchrone est lance la suivante est evaluer malgre que la precedante ne soit pas termine

    C'est le cas avec "fetch" et autre fonction utilisant "then()"
*/

fetch("test.json").then(r=>{
    
    for(let i = 0 ; i<1_000_000_000;i++){
    
        if(i === 1_000_000_000){
    
            console.log("Synchrone : Boucle terminer");
        }
    }
})
console.log("Bonjour aprer le fetch");

/* 
    Une fonction peut ne rien retourner (consol.log par exemple)
    Ou bien retourner quelque chose (prseInt() retourne un string)

    Il savere sue "fetch" retourne bien quelque chose , une promesse
*/

let request = fetch("test.json");
console.log(request);
/* 
    L'objet promesse represente une valeur qui va venir mais qui peut prendre du temps
    Avec fetch par exemple on ne sait pas combien de temps le serveur mettra a repondre 

    il contien 3 methodes :
        .then() va prendre une fonction callback qui sera appeler une fois la promesse tenue (reussite)
        .catch() qui va prendre une fonction callback qui sera appele une fois la promesse rejete (echoue)
        .finally() qui va prendre une fonction callback qui sera appele une fois la promesse traitee (reussite ou echec) 
*/
// la fonction callback recoit la reponce de la requete
request.then(res=>console.log("then",res));
// La fonction callback recoit l'erreur de la requete
request.catch(err=>console.log("catch",err));
// La fonction callback ne recoi rien
request.finally(()=>console.log("finally"));

/* 
    Il est possible de resoudre plusieur promesse en meme temps 
    Pour cela on fera appel a la methode ".all()" de l'objet "Promise"
    Methode a la quelle on donnera un tableau de toute les promesses que l'on souhaite resoudre
*/
let r1 = fetch("test.json")
let r2 = fetch("test2.json")
Promise.all([r1, r2]).then(handleFetche);

function handleFetche(response){

    //  avec ".all()" la reponse recupere par then, est un tableau les reponses a toute les promesses
    console.log(response);
    response.forEach(resp=>{

        if(reportError.ok)
        {
            resp.json().then(data=>console.log(data.prop))
        }
    })
}
/* 
    Avec le meme fonctionnement on trouvera "Promise.race()" et Promise.any()
    Mais au lieu de rendre toute les promesse elle ne renderont que la plus rapide a s'executer 
    .race() lancera le catch si la plus rapide echoue
    .any() lancera le catch si absolument toute les promesse echoue 

    On puet creer nos propre promesse pour cela il est important de bien comprendre le principe de callback

    Lorsque l'on creer une promesse on peut lui donner une fonction callback qui prend 2 argument 
    Le premier repressente la callback de then 
    le seconde la fonction callback de catch
*/
let random = new Promise(function(resolve,reject){
    let r = Math.random();
    if(r<0.5)
    {   
        // appler la premiere fonction declenchera le "then"
        resolve("bravo ma promesse a reussi")
    }
    else
    {
        // appeler la seconde fonction declanchera le catch
        reject("Malerement la promesse est rompu")
    }
});
random  .then(res=>console.log("then", res))
        .catch(err=>console.log("catch",err))
        .finally(()=>console.log("Mapromesse random est termine"));
