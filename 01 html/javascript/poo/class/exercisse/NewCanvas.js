"use strict"

/* export default class NewCanvas
{
    constructor(){
        this.canvas = document.createElement('canvas')
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        document.body.append(this.canvas)
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener("click",this.generate.bind(this))
        this.randomColor = Math.floor(Math.random()*255)
        this.random = Math.floor(Math.random()*50)
        this.mouseX
        this.mouseY
        
    }
    generate(e){
        this.snapshot = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)
        if(!this.mouseX){
             this.mouseX = e.clientX
             this.mouseY = e.clientY
        }
       
        this.vitesseH = 5
        this.vitesseV = 5
        this.ctx.putImageData(this.snapshot, 0 ,0)
        this.ctx.beginPath()
        console.log(this.mouseX,this.mouseY);
        this.ctx.arc(this.mouseX,this.mouseY,this.random,0,2*Math.PI)
        this.ctx.fill()
        this.ctx.stroke()
        if(this.mouseX+this.random > this.canvas.width || this.mouseX-this.random < 0)
    {
        this.vitesseH = -this.vitesseH
    }
    if(this.mouseY+this.random > this.canvas.height || this.mouseY-this.random <0)
    {
        this.vitesseV = -this.vitesseV
    }
    this.mouseX += this.vitesseH
    this.mouseY += this.vitesseV

    requestAnimationFrame(()=>{
        this.generate(e)
    })

    }
} */
export default class NewCanvas {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.append(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.canvas.addEventListener("click", this.handleCanvasClick.bind(this));
        this.balls = []; // Tableau pour stocker les instances des balles
        this.draw();
    }

    handleCanvasClick(e) {
        const ball = new Ball(this.ctx, e.clientX, e.clientY, this.getRandomColor());
        this.balls.push(ball);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.balls.forEach(ball => {
            ball.move();
            ball.draw();
        });
        this.checkCollisions();
        requestAnimationFrame(this.draw.bind(this));
    }

    checkCollisions() {
        for (let i = 0; i < this.balls.length; i++) {
            for (let j = i + 1; j < this.balls.length; j++) {
                const ball1 = this.balls[i];
                const ball2 = this.balls[j];
                const dx = ball1.x - ball2.x;
                const dy = ball1.y - ball2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < ball1.radius + ball2.radius) {
                    // Collision détectée, inverser les vitesses
                    const tempVitesseH = ball1.vitesseH;
                    const tempVitesseV = ball1.vitesseV;
                    ball1.vitesseH = ball2.vitesseH;
                    ball1.vitesseV = ball2.vitesseV;
                    ball2.vitesseH = tempVitesseH;
                    ball2.vitesseV = tempVitesseV;
                }
            }
        }
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

class Ball {
    constructor(ctx, x, y, color) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = Math.floor(Math.random() * 50);
        this.color = color;
        this.vitesseH = 5;
        this.vitesseV = 5;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();
    }

    move() {
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.vitesseH = -this.vitesseH;
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.vitesseV = -this.vitesseV;
        }
        this.x += this.vitesseH;
        this.y += this.vitesseV;
    }
}



