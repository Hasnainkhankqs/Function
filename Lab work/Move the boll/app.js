var ball = document.getElementById("ball");
var left = 0;
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
    counttb+=5;
    bottom -= 5;
    ball.style.top = bottom+"px";
    console.log("top"+counttb)
}
function moveBottom(){
    counttb-=5;
    bottom += 5;
    ball.style.top = bottom+"px";
    console.log("bottom"+counttb)
}




document.addEventListener("keydown", function(key)
{

if(key.which == 98 || key.which == 40 )
{
    moveBottom()
}
else if(key.which == 100||key.which == 37)
{
    moveLeft()
}
else if(key.which == 102 || key.which == 39)
{
    moveRight()
}
else if(key.which == 104 || key.which == 38)
{
    moveTop()
}
});