"use strict";

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const div = document.querySelector("div");

let text = ["Bonjour", "comment", "aller", "vous ?"];

function aparition() {
    text.forEach((e) => {
        let p = document.createElement("p");
        p.textContent = e;
        div.append(p);
        p.style.color = "transparent";
    });
    btn1.addEventListener("click", () => {
        const pp = document.querySelectorAll("p");
        pp.forEach((e) => {
            if (e.style.color == "transparent") {
                e.style.color = "";
                e.style.transition = "1.5s";
                e.style.transitionDelay = "0.5s"
            }
        });
    });
    btn2.addEventListener("click", () => {
        
        const pp = document.querySelectorAll("p");
        pp.forEach((e) => {
      if (e.style.color == "") {
        e.style.color = "transparent";
      }
    });
  });
}
aparition();
div.style.display = "flex"

