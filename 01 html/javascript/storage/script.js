"use stict"

const dark = document.querySelector('#darkTheme')
dark.addEventListener("input",changeTheme);

function changeTheme(){

    // Solution 1 : jouer avec la classe du body
    // Solution 2 : jouer avec les variable CSS
    if(dark.checked){
        // document.body.classList.toggle("dark", dark.checked);
        document.documentElement.style.setProperty("--fond","#333")
        document.documentElement.style.setProperty("--text","antiquewhite")
        /* 
            Pour sauvegarder des donne sur le navigateur on utilisera "localStorage" ou "sessionStorage"
            La sessionStorage est suprimer quand on quitte le navigateur 

            Pour sauvegarder on utilise la methode ".setItem(clef,valeur)"
            En premier argument on donnera la clef qui servira a retrouver la donnee 
            En second la valeur a suavegarder
        */
       localStorage.setItem("theme","dark")
    }else{
        document.documentElement.style.setProperty("--text","#333")
        document.documentElement.style.setProperty("--fond","antiquewhite")
        /* 
            Pour supprimer une donne sauvegarder en session ou local storage :
            ".removeItem(clef)"
            En donnant en argument la clef a supprimer
        */
       localStorage.removeItem("theme");
    }
}
/* 
    Pour recuperer une donne sauvegarder  j'utiliserais : 
    ".getItem(clef)"
    avec en argument , la clef a recuperer
*/
dark.checked = localStorage.getItem("theme") === "dark";
changeTheme();
/* 
    Si on souhaite supprimer toute les clef :
    localStorage.clear();
*/
const selectColor = document.querySelector('#colorTheme')

function selectTheme(){
    document.body.classList.remove("bleu", "green", "orange")
    if(selectColor.value == "bleu"){
        document.body.classList.add("bleu")
        localStorage.setItem("themes","bleu")
        
        
    }
    
    
    if(selectColor.value == "green"){
        document.body.classList.add("green")
        localStorage.setItem("themes","green")
        dark.checked = false
    }
    
    if(selectColor.value == "orange"){
        
        dark.checked = false
        document.body.classList.add("orange")
        localStorage.setItem("themes","orange")
    }
    
}
selectColor.addEventListener("change",selectTheme)
const items = localStorage.getItem("themes") ;
console.log(items);
selectColor.value = items
selectTheme()

const btn = document.querySelector('button')

btn.addEventListener("click",randomColor)
function randomColor(){
     document.body.classList.add("random")
   let random=document.querySelector('.random')
    let number = Math.floor(Math.random()*255)
    let number1 = Math.floor(Math.random()*255)
    let number2 = Math.floor(Math.random()*255)
    random.style.backgroundColor = `rgb(${number},${number1},${number2})`
    
    localStorage.setItem("randoms", `rgb(${number},${number1},${number2})`)
    
}

document.body.style.backgroundColor= localStorage.getItem("randoms");