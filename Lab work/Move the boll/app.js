var ball = document.getElementById("ball");
var left = 0;
var right = 0;
var top =0;
var bottom = 0;
function moveLeft(){
    left -= 2;
    ball.style.left = left+"px";
}
function moveRight(){
   left += 2;
    ball.style.right = left+"px";
}
function moveTop(){
    left -= 2;
    ball.style.top = left+"px";
}
function moveBottom(){
    left -= 2;
    ball.style.bottom = left+"px";
}