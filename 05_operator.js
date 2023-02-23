console.log("========= Arthmatic Operation ========");
var num1 = 10;
var num2 = 2;
var result = num1 + num2; // Addition
console.log(` Addition is ${result}`);

result = num1 - num2;
console.log(`Subtraction is  ${result}`);

result = num1 * num2;
console.log(`Multiplication is  ${result}`);

 result = num1 ** num2;
 console.log(`Exponential is  ${result}`);

result = num1 / 3;
console.log(`Division is ${result}`);

result = num1 % 3;
console.log(`Reminder  is ${result}`);
0
console.log("========= Assignment Operation ========");

var num = 10; // Compound addition +=
 num+=20; // num = num + 20
 console.log(`Compound addition += ${num}`);

 
console.log("========= Comparison Operation ========");
console.log(`equal operator "=="`);
var num3 = "10"; // string format 
var num4 = 10; // number datatype
console.log(num3==num4);// implicit convertor automatic convertor

console.log(` strict equal operator"==="`);
console.log(num3===num4);

console.log(` not equal operator" != "`);
console.log(num3 != num4);

console.log(` strict not equal operator" != "`);
console.log(num3 !== num4);

console.log(` Greater" > "`);
console.log(10 > 20); // >greater than 

console.log(20 < 10); // <Greater than

console.log(10 < 10); // less than

var marks=35;
console.log(marks <= 35);


//ternary 
var marks=70;
var result=marks>=60 ? "Allow for interview" : "Dont Allow";
console.log(result);

var age=20;
var res= age>=21 ? "congratulations.." : "Ha ha sorry next time";
console.log(res);

console.log("Even or Odd");
var myNumber=7;

var result = myNumber%2==0 ? "Even" : "Odd";
console.log(result);

var num1=10;
var num2=12;
var result = num1 > num2 ? num1 : num2;
console.log(result);


//assignmnt 23 feb
function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );



//assignment 2 23feb

 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);






