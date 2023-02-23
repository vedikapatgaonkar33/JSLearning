console.log("---------------------------- Assignment 1 ----------------------------");
console.log("******************** (1) *********************");

function greaterNumber(num1,num2){
    var grtNo =  num1 > num2 ? num1 : num2;
    return grtNo;
}
var grtNo = greaterNumber(10,-10);
console.log("Greater No is : ",grtNo);
var grtNo = greaterNumber(800,899);
console.log("Greater No is : ",grtNo);

console.log("******************** (2) *********************");

function isEvenOrOddNum(num){
    var  result = num%2==0 ? "Even : true" : "Even : false";
    return result;
}
var result = isEvenOrOddNum(29);
console.log("29 is : ",result);
console.log(`44 is : ${isEvenOrOddNum(44)}`);
console.log(`0 is : ${isEvenOrOddNum(0)}`);
console.log(`101 is : ${isEvenOrOddNum(101)}`);




console.log("******************** (3) *********************");

function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has : ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has : ${wordLength("Google")} length` );

