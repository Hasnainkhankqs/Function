var ball = document.getElementById("ball");
var left = 0;
// var right = 0;
var top =0;
// var bottom = 0;
var count = 0;
function moveLeft(){
    count-=5;
    left -= 5;
    ball.style.marginLeft = left+"px";
    console.log("left"+count)
}
function moveRight(){
   count+=5;
   left += 5;
    ball.style.marginLeft = left+"px";
    console.log("right"+count)
}
function moveTop(){
    count-=5;
    top -= 5;
    ball.style.marginTop = top+"px";
    console.log("top")
}
function moveBottom(){
    count+=5;
    top += 5;
    ball.style.marginTop = top+"px";
    console.log("bottom")
}