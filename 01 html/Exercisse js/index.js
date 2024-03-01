// Tri a bulle
// let liste = [30, 55, 64, 32, 85, 12, 45, 67, 86, 23, 65, 54, 36, 25, 11, 1, 3, 8, 72, 24];
// let nombre
// let nListe
// for (let i = 0; i < liste.length; i++) {
    
//     for(let n = 0 ; n < liste.length ; n++){
//        nombre = liste[n]
//         if (nombre > liste[n + 1]) {
//             liste[n] = liste[n+1]
//             liste[n+1] = nombre
//         }
//     }
// }
// console.log(liste)


// ------------------ Le juste prix------------------
let resultat = 57;
let user = prompt("entrer votre jsute prix");

while(user != resultat){
    alert("Dommage ! Ressyer")
    user = prompt("entrer votre jsute prix");
    if(user == resultat){
       alert("bien jouer !")
      break
    }  
}