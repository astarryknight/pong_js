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