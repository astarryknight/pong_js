class Paddle{
    constructor(xPos, yPos, height){
        this.xPos_ = xPos;
        this.yPos_ = yPos;
        this.height_ = height;
    }
    get xPos(){
        return this.xPos_
    }
    get yPos(){
        return this.yPos_
    }
    get height(){
        return this.height_
    }
    set yPos(yPos){
        this.yPos_ = yPos;
    }
}

class Ball{
    constructor(xPos, yPos, height){
        this.xPos_ = xPos;
        this.yPos_ = yPos;
        this.height_ = height;
    }
    get xPos(){
        return this.xPos_
    }
    get yPos(){
        return this.yPos_
    }
    get height(){
        return this.height_
    }
    set xPos(xPos){
        this.xPos_ = xPos
    }
    set yPos(yPos){
        this.yPos_ = yPos
    }
}

var ball = new Ball(750/2, 750/2, 20);
var player = new Paddle(720, 100, 135)
var comp = new Paddle(10, 600, 135)

var paddleWidth=20;

var canvasHeight=750;
var canvasWidth=750;

function draw(ball, p_one, p_two) {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);//clear canvas

        //draw background
        ctx.fillStyle="#000000";
        ctx.fillRect(0,0,canvas.width, canvas.height);

        //draw paddles
        ctx.fillStyle="#ffffff";
        ctx.fillRect(p_one.xPos, p_one.yPos, paddleWidth, p_one.height);
        ctx.fillRect(p_two.xPos, p_two.yPos, paddleWidth, p_two.height);

        //draw ball
        ctx.fillStyle="#ffffff";
        ctx.fillRect(ball.xPos, ball.yPos, ball.height, ball.height);
    }
}

var gameSpeed=25;
var speed=gameSpeed; //inverse scale - lower number = faster speed

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let offset=player.height/2
    if(y>=(0+offset) && y<=(canvasHeight-offset)){
        player.yPos = y-offset;
    } else if (y>=(0+offset)){
        console.warn("hi there");
        player.yPos=canvasHeight-player.height;
    } else if (y<=(canvasHeight-offset)){
        player.yPos = 0;
    }

}
//https://www.geeksforgeeks.org/how-to-get-the-coordinates-of-a-mouse-click-on-a-canvas-element/

document.addEventListener('mousemove', function(e){
    getMousePosition(canvas, e);
})

var start=Date.now();
var gameOver=false;

//main game loop
function loop(){
    var now = Date.now();
    if((now-start)>=speed){
        
        start=now;
    }
    draw(ball, player, comp);
    if(!gameOver){
        window.requestAnimationFrame(loop)
    } else{
        alert("Game Over!");
        location.reload();
    }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function checkPipeCollision(pipe){
    if(bird.xPos < pipe.xPos+pipe.width &&
        bird.xPos+bird.width > pipe.xPos &&
        bird.yPos < pipe.yPos + pipe.width && 
        bird.yPos + bird.width > pipe.yPos){
            return true;
    }
    return false;
}

window.requestAnimationFrame(loop)