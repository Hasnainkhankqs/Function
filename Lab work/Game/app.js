// variable
var randomNumber = document.getElementsByClassName("randomNumber")[0];
var myTotal =document.getElementsByClassName("total")[0];
var bricksContainer = document.getElementsByClassName("bricksContainer")[0];
var bricks = bricksContainer.getElementsByTagName("li");
var newNumber = 0;
var tempRandom = 0;
var totalCount = 0;
// New Random Number
newNumber = Math.floor(Math.random()*20);
randomNumber.innerHtml = newNumber;

// onclick event on all bricks

for (var i = 0 ; i<bricks.length ; i++){
    tempRandom = Math.floor(Math.random()*12);
    bricks[i].src = "images";
    bricks[i].addEventListener("click",clicked);
}
function clicked(){
    console.log(this.innerHtml);
}
    
