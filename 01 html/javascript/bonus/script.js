"use strict"
const userInput = document.querySelector('#username');
const loginBtn = document.querySelector('#userBtn');
const chat = document.querySelector('.blockChat .chat');
const messageInput = document.querySelector('#message');
const sendBTN = document.querySelector('#sendMessage');
const url = "ws://172.16.32.33:8080";
let connexion,user;

loginBtn.addEventListener('click',login)
userInput.addEventListener("keyup",e=>e.key==="Enter"?login.bind(loginBtn)():"");
sendBTN.addEventListener("click",handleMessage);
messageInput.addEventListener("keyup",e=>e.key==="Enter"?handleMessage.bind(sendBTN)():"");

function login(){

    if(userInput.value && !connexion)
    {
        user = userInput.value
        connexion = new WebSocket(url);
        userInput.readOnly = true;
        this.textContent ="Deconexion";
        this.classList.add("logout");
        messageInput.focus();
        setting();
    }else if(connexion){

        sendMessage("Server",`${user} est déconecté(e)`);
        connexion.close();
        connexion = undefined;
        this.classList.remove('logout');
        this.textContent = "Connexion";
        userInput.readOnly = false;
    }
}
function setting(){

    connexion.onopen = ()=>{
        onMessage({sender:"Server",message:"Connexion etablie !"});
        sendMessage("Server",`${user} est connecté(e) !`);
    }
    connexion.onclose = ()=>onMessage({sender:"Server", message:"Deconnecté !"});
    connexion.onmessage = e=>onMessage(JSON.parse(e.data));

}
function onMessage(message){

    chat.textContent += `${message.sender} : ${message.message}\r\n`;
    chat.scrollTop = chat.scrollHeight
}
function handleMessage(){

    if(messageInput.value){

        onMessage({sender:user,message:messageInput.value});
        sendMessage(user, messageInput.value);
        messageInput.value ="";
        messageInput.focus();
    }
}
function sendMessage(user,message){

    connexion.send(JSON.stringify({sender:user,message:message}));
}
