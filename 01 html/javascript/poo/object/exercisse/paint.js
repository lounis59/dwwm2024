"use strict"

// export const canvas = {
//     // canvas: document.querySelector('canvas'),
//     // color: document.querySelector('.colorSelect'),
//     sizeForm: document.querySelector('form'),
//     sizeNumber: document.querySelector('.sizeChoice'),
//     saveBtn: document.querySelector('.Save'),
//     ctx: null,
//     painting: false,
//     startX: 0,
//     startY: 0,
//     mouseX: 0,
//     mouseY: 0,

//     init() {
//         this.divContainer = document.createElement('div')
//         this.divContainer.className = "divPrincipale"
//         this.divContainer.style.width = "80vw"
//         this.divContainer.style.height = "50vw"
//         this.divContainer.style.border = "2px solid black"
//         this.divContainer.style.margin = "10rem"
//         this.save = document.createElement('button')
//         this.save.textContent = "Sauvegarder"
//         this.canvas = document.createElement('canvas')
//         this.canvas.style.border = "2px solid black"
//         this.colorselect = document.createElement('input')
//         this.colorselect.className = "colorselect"
//         this.colorselect.type = "color"
//         this.form = document.createElement('form')
//         this.size = document.createElement('input')
//         this.size.className = "sizeChoice"
//         this.size.type = "number"
//         this.sizeEnter = document.createElement('input')
//         this.sizeEnter.type = "submit"
//         this.sizeEnter.value = "entrer"
//         this.sizeEnter.className = ".Save"
//         this.divContainer.append(this.canvas,this.colorselect,this.form,this.save)
//         document.body.append(this.divContainer)
//         this.form.append(this.size, this.sizeEnter)
//         this.resize();
//         window.addEventListener("resize", () => this.resize());
//         console.log("fff");
//         this.ctx = this.canvas.getContext('2d');
//         this.ctx.lineWidth = 10;
//         this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
//         this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
//         this.canvas.addEventListener('mouseup', () => this.onMouseUp());
//         this.colorselect.addEventListener('change', () => this.changeColor());
//         this.form.addEventListener('submit', (e) => this.changeSize(e));
//         this.save.addEventListener('click', () => this.saveCanvas());
//         console.dir(this.canvas)
//     },

//     resize() {
//         this.canvas.style.width = "80%";
//         this.canvas.style.height = "80%";
//     },

//     onMouseMove(e) {
//         this.mouseX = e.clientX - this.canvas.offsetLeft;
//         this.mouseY = e.clientY - this.canvas.offsetHeight;
//         if (this.painting) {
//             this.ctx.beginPath();
//             this.ctx.lineCap = "round";
//             this.ctx.moveTo(this.startX, this.startY);
//             this.ctx.lineTo(this.mouseX, this.mouseY);
//             this.ctx.stroke();
//             this.startX = this.mouseX;
//             this.startY = this.mouseY;
//         }
//     },

//     onMouseDown(e) {
//         this.painting = true;
//         this.startX = e.clientX - this.canvas.offsetLeft;
//         this.startY = e.clientY - this.canvas.offsetHeight;
//     },

//     onMouseUp() {
//         this.painting = false;
//     },

//     changeColor() {
//         this.ctx.strokeStyle = this.colorselect.value;
//     },

//     changeSize(e) {
//         e.preventDefault();
//         this.ctx.lineWidth = this.size.value;
//     },

//     saveCanvas() {
//         let a = document.createElement('a');
//         let dataURL = this.canvas.toDataURL("image/png");
//         a.href = dataURL;
//         a.download = 'canvas_image.png';

//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//     }
// };
export class CanvasApp {
    constructor() {
        this.sizeForm = document.querySelector('form');
        this.sizeNumber = document.querySelector('.sizeChoice');
        this.saveBtn = document.querySelector('.Save');
        this.ctx = null;
        this.painting = false;
        this.startX = 0;
        this.startY = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.init();
    }

    init() {
        this.createCanvas();
        this.setupListeners();
    }

    createCanvas() {
        this.divContainer = document.createElement('div');
        this.divContainer.className = "divPrincipale";
        this.divContainer.style.width = "80vw";
        this.divContainer.style.height = "50vw";
        this.divContainer.style.border = "2px solid black";
        this.divContainer.style.margin = "10rem";
        this.save = document.createElement('button');
        this.save.textContent = "Sauvegarder";
        this.canvas = document.createElement('canvas');
        this.canvas.style.border = "2px solid black";
        this.colorselect = document.createElement('input');
        this.colorselect.className = "colorselect";
        this.colorselect.type = "color";
        this.form = document.createElement('form');
        this.size = document.createElement('input');
        this.size.className = "sizeChoice";
        this.size.type = "number";
        this.sizeEnter = document.createElement('input');
        this.sizeEnter.type = "submit";
        this.sizeEnter.value = "entrer";
        this.sizeEnter.className = ".Save";
        this.divContainer.append(this.canvas, this.colorselect, this.form, this.save);
        document.body.append(this.divContainer);
        this.form.append(this.size, this.sizeEnter);
        this.resize();
        window.addEventListener("resize", () => this.resize());
        this.ctx = this.canvas.getContext('2d');
        this.ctx.lineWidth = 10;
    }

    setupListeners() {
        this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
        this.canvas.addEventListener('mouseup', () => this.onMouseUp());
        this.colorselect.addEventListener('change', () => this.changeColor());
        this.form.addEventListener('submit', (e) => this.changeSize(e));
        this.save.addEventListener('click', () => this.saveCanvas());
    }

    resize() {
        this.canvas.width = "800";
        this.canvas.height = "400";
    }

    onMouseMove(e) {
        this.mouseX = e.clientX - this.canvas.offsetLeft;
        this.mouseY = e.clientY - this.canvas.offsetTop;
        if (this.painting) {
            this.ctx.beginPath();
            this.ctx.lineCap = "round";
            this.ctx.moveTo(this.startX, this.startY);
            this.ctx.lineTo(this.mouseX, this.mouseY);
            this.ctx.stroke();
            this.startX = this.mouseX;
            this.startY = this.mouseY;
        }
    }

    onMouseDown(e) {
        this.painting = true;
        this.startX = e.clientX - this.canvas.offsetLeft;
        this.startY = e.clientY - this.canvas.offsetTop;
    }

    onMouseUp() {
        this.painting = false;
    }

    changeColor() {
        this.ctx.strokeStyle = this.colorselect.value;
    }

    changeSize(e) {
        e.preventDefault();
        this.ctx.lineWidth = this.size.value;
    }

    saveCanvas() {
        let a = document.createElement('a');
        let dataURL = this.canvas.toDataURL("image/png");
        a.href = dataURL;
        a.download = 'canvas_image.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}


