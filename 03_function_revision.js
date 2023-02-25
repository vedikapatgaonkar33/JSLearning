//arguments with no return value
function greaterNumber(num1,num2){
var result=num1>num2 ? num1 : num2;
console.log(`Greater no is ${num1},${num2} is : ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899)

function isEvenOrOddNum(num){
    var result = num%2==0 ? "true" : "false";
    return result;
}
var result = isEvenOrOddNum(29);
console.log(`is Evem Or odd : ${result}`);