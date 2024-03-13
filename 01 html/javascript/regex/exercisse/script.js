const tel = document.querySelector(".input1")
const mail = document.querySelector(".input2")
let regex = /^\d{10}$/;
// tel.style.backgroundColor = "red"
tel.addEventListener("input",()=>{

    if(!regex.test(tel.value) && tel.value !== "" ){
     tel.style.backgroundColor = "red"
    }else{
    tel.style.backgroundColor =""
    }
})

mail.addEventListener("input",()=>{
    let regexMail = /^.*@.*\.com$/

    if(!regexMail.test(mail.value) && mail.value !== ""){
        mail.style.backgroundColor = "red"
    }else{
        mail.style.backgroundColor = ""
    }
})


const champMdp1 = document.querySelector("#pass1")
const champMdp2 = document.querySelector("#pass2")

function secure (){
    const progess = document.querySelector('.progress')
    let taille = 0
    if(/[A-Z]/.test(champMdp1.value)){
        taille += 20;
        
    }
    if(/[a-z]/.test(champMdp1.value)){
        taille += 20 ;console.log(taille);
    }
    if(/\d/.test(champMdp1.value)){
        taille += 20 ;console.log(taille);
    }
    progess.style.width = taille + "px" 
}
champMdp1.addEventListener("input",secure)

