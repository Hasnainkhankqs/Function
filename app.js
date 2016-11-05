

// function bringBucuit(){
//     alert("Brign Buiscuit");
// }
// bringBucuit();


// function cook(something){
//     alert("Please bring "+ something);
// }
// cook("egg");



// var dish = +prompt("What do you want to eat");
// function cook(dish){
//     alert("Please bring " + dish);
// }
// cook(dish);



// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");
// var thirdNumber = +prompt("Enter third number");
// function calculation(firstNumber,secondNumber,thirdNumber){
//         var addedNumber = firstNumber+secondNumber;
//         var result = addedNumber*thirdNumber;
//     if(isNaN(result)){
//         alert("something went wrong ")
//     }
//     else{
//         alert(result) }
// }
// calculation(firstNumber,secondNumber,thirdNumber);

var ingrd1 = ["egg","salt","oil"]
var ingrd2 =["flour","salt","water"]
var ingrd3 =["water","rice","zeera","oil"]
var ingrd4 =[]

function combine(ig1,ig2,ig3){
    for(var i = 0 ; i < ig1.length ; i++){
        if(ingrd4.indexOf(ig1[i]) == -1 ){
            ingrd4.push(ig1[i]);
        }
    }
        for(var i = 0 ; i < ig2.length ; i++){
        if(ingrd4.indexOf(ig2[i]) == -1 ){
            ingrd4.push(ig2[i]);
        }
    }
        for(var i = 0 ; i < ig3.length ; i++){
        if(ingrd4.indexOf(ig3[i]) == -1 ){
            ingrd4.push(ig3[i]);
        }
    }
    console.log(ingrd4);
}
combine(ingrd1,ingrd2,ingrd3);