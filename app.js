

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

// var ingrd1 = ["egg","salt","oil"]
// var ingrd2 =["flour","salt","water"]
// var ingrd3 =["water","rice","zeera","oil"]
// var ingrd4 =[]

// function combine(ig1,ig2,ig3){
//     for(var i = 0 ; i < ig1.length ; i++){
//         if(ingrd4.indexOf(ig1[i]) == -1 ){
//             ingrd4.push(ig1[i]);
//         }
//     }
//         for(var i = 0 ; i < ig2.length ; i++){
//         if(ingrd4.indexOf(ig2[i]) == -1 ){
//             ingrd4.push(ig2[i]);
//         }
//     }
//         for(var i = 0 ; i < ig3.length ; i++){
//         if(ingrd4.indexOf(ig3[i]) == -1 ){
//             ingrd4.push(ig3[i]);
//         }
//     }
//     console.log(ingrd4);
// }
// combine(ingrd1,ingrd2,ingrd3);


// function squareNumber(number){
//     result = number*number;
//     // return "Hello sir";
//     return result;
// }
// var squaredNumber = squareNumber(3);
// console.log(squaredNumber) ;
    
// 12-11-2016


// var a = 5*10;
// alert(a);

// var a = 27.2727;
// a = Math.ceil(a);
// alert(a)

// var a = Math.floor(Math.random()*20);
// if(a <= 20 && a >= 10){
//     alert(a);
// }

// var a = Math.floor(Math.random()*10+10);
// alert(a);

// var a = 20;
// function scope(){
//     var a = 10;
//     alert(a);
// }
// scope();


// function bad(){
//     a = 3;
//     alert(a);
// }
// bad();



// var a = 10;
// a++ + a - --a
// alert(a);


// var a = "Helloworld";
// for(i = 0 ; i < a ; i++){
//     if(a.slice(i,i+5) === world){
//         alert();
//     }
//     else{
//         alert("something wrong");
//     }
// }

// var a = prompt("write anything with the word world")
// var b = a.indexOf("w");
// var c = a.indexOf("d");
// d = a.slice(b,c+1);
// alert(d);


// var array = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]];


// for( var i = 0 ; i<array.length ; i++){
//     for(var j = 0 ; j<array.length; j++){
//         document.write(array[i][j]);

//     }
//     document.write("<br />")
// }



// var a = "Helloworld";
// for(i=0; i<a.length ; i++ ){
//     b = a[i];
//     alert(b);
// }