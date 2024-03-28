import EasyDom from "./EasyDom.js";
import NewCanvas from "./NewCanvas.js";

const canvas = new NewCanvas();
const easy = new EasyDom();

easy.tag("p","test","Message de test");
easy.tag("div","test2")
easy.select(".test")
easy.event(easy.select(".test"),"click",colorChange)

function colorChange(e){
    e.target.style.color = "red"
}