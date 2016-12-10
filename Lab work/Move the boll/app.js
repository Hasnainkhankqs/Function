var ball = document.getElementById("ball");
var left = 0;
// var right = 0;
// var top =0;
var bottom = 0;
var count = 0;
var counttb =0;
function moveLeft(){
    count-=5;
    left -= 5;
    ball.style.left = left+"px";
    console.log("left"+count)
}
function moveRight(){
   count+=5;
   left += 5;
    ball.style.left = left+"px";
    console.log("right"+count)
}
function moveTop(){
    counttb-=5;
    bottom += 5;
    ball.style.bottom = bottom+"px";
    console.log("top"+counttb)
}
function moveBottom(){
    counttb+=5;
    bottom -= 5;
    ball.style.bottom = bottom+"px";
    console.log("bottom"+counttb)
}