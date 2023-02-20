
//function with no arguments and no return value.
function showFullName(){
    console.log("My Full Name is: vedika patgaonkaer");
}
showFullName();// invoke

//function with arguments and no return value
function showAge(age){
console.log("my age is:", age);
}
showAge(32);


//function with no argument and return value
function fullName(){
    var name="vedika patgaonkar";
    return name;
}
 var fName=fullName();
 console.log(fName);

 //function with  argument and return value
 function sumOfNumber(num1,num2,num3){
    var sum= num1 + num2 + num3;
    return sum;
 }
var sumResult=sumOfNumber(10, 45, 79.56);
console.log(sumResult);






var num1=100;
var num2=200;

var str1="sweety";
var str2="cutie";

var name1="vedika";
var name2="devika";

function swapVariables(value1, value2){                           // function defination  or creation 
console.log( "Before swap",value1, value2);
var temp = value1;
value1=value2;
value2=temp;
console.log("after swap", value1,value2);
return "swapping variables sucessfully completed";
}
var swapResult= swapVariables(num1, num2); // function call or invoke
console.log(swapResult);

var swapResult2=swapVariables(str1, str2);
console.log(swapResult2);

var swapResult3=swapVariables(name1,name2)
console.log(swapResult3);