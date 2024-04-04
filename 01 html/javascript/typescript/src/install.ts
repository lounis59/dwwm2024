"use strict"
/* 
    ------------------- Instalation ------------------------
    * npm install typescript --save-dev

    Compiler un fichier ts en js : 
    * npx tsc pathToFile.ts

    Compilervers un autre dossier :
    * npx tsc pathToFile.ts --outDir folderName

    Pour eviter de taper cela a chaque fois 
    Nous pouvon crreer a la racine du projet un fichier 
    * tsconfig.json

    qui contiendra un objet avec les proprieter suivantes : 
    {
        "compilerOptions": {
            "outDir" : "dist"
        },
        "files":[
            "src/install.ts"
        ]
    }
    Une fois cela fait, nous pouvons simplement taper :
    * npx tsc

    Comme avec d'otre bibliotheques comme scss nous pouvon delander a typescript de surveiller chaque sauvegarde de fichier :
    * npx tsc --watch
*/
const btn = document.querySelector("#compte");
let i = 0;
btn?.addEventListener('click',()=>{
    i++;
    /* 
        La ou JS transforme automatiquement des nombres en texte 
        TS provoque une erreur
    */
    // btn.textContent = i;
    btn.textContent = i.toString();

})
/* 
    Par defaut typescript compile pour du JS age afin d'etre compatible avec les vieux navigateur
    Si on veut un code plus moderne on pourra changer l'option :
    * "target" : "ES2022"

    On peut lui interdire de compiler si il y a une erreur : 
    * "noEmitOnError" : true

    Si on veut etre capable de gerer nimporte quelle erreur qui pourait arriver 
    On peut demander a TS d'etre encore plus strict ! 
    * "strict": true
*/
// btn?.style.backgroundColor = "orange"
