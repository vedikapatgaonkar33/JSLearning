console.log("************** STEP 1 ****************");

function favHero(){
    console.log(" My Favourite Hero : Salman khan");
}
favHero();

function favHeroine(){
    console.log(" My Favourite Heroine : Deepika Pandukone");
}
favHeroine();

console.log("************** STEP 2 ****************");

function personalDetails( firstName, lastName, collegeName){
    console.log("first Name:",firstName, "last Name:",lastName,"college Name",collegeName);
}
personalDetails("vedika","patgaonkar","Sinhagad")

console.log("************** STEP 3 ****************");


function swapValuesDude(value1, value2){                // function defination  or creation 
    console.log( "Before swap :",value1, value2);
    var temp = value1;
    value1=value2;
    value2=temp;
    console.log("after swap :", value1,value2);
}
swapValuesDude("virat","Anushka");
swapValuesDude(1000,2000);

console.log("************** STEP 4 ****************");

function addThreeValues(num1,num2,num3){
    var sum= num1 + num2 + num3;
    return sum;
 }
var sumResult=addThreeValues(10.23,600,40);
console.log("sum of three numbers:",sumResult);

var sumResult=addThreeValues("Hello","Good","Morning");
console.log("Message using addition : ",sumResult);











