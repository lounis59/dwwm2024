"use strict";

const menu = document.querySelector(".menuDeroule");
const bouton = document.querySelector(".bar");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

bouton.addEventListener("click", () => {
  if (menu.style.width == "") {
    bar1.style.transition = "2s";
    bar3.style.transition = "2s";
    bar2.style.transition = "2s";
    bar1.style.rotate = "45deg";
    bar1.style.translate = "0 10px";
    bar2.style.backgroundColor = "transparent";
    bar3.style.rotate = "-45deg";
    bar3.style.top = "50%";
  } else {
    menu.style.width = "";
    bar1.style.rotate = "";
    bar1.style.translate = "";
    bar1.style.tranformeOrigine = "";
    bar3.style.rotate = "";
    setTimeout(()=>{
        bar2.style.backgroundColor = "";
        bar3.style.top = "";
        bouton.style.backgroundColor = "";

    },1000)
  }
  if (bar1.style.rotate === "45deg") {
    setTimeout(() => {
      bar1.style.tranformeOrigine = "-50%";
      bar1.style.rotate = "405deg";
      bar1.style.transition = "2s";
      bar3.style.rotate = "315deg";
      bar3.style.transition = "2s";
      menu.style.width = "90vw";
      menu.style.transition = "2s";
      bouton.style.backgroundColor = "red";
      bouton.style.transition = "1s"
    }, 1000);
  }
});
