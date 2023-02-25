console.log("************** (1) ***************");
function checkEvenOdd(num1){

    if(num1%2==0){
        return "EVEN";
    }

    if(num1%2==1){
        return "ODD";
    }
}
var result = checkEvenOdd(45);
console.log(`Given no 45 is : ${result}`);
var result = checkEvenOdd(70);
console.log(`Given no 70 is : ${result}`);
var result = checkEvenOdd(67);
console.log(`Given no 67 is : ${result}`);
var result = checkEvenOdd(98);
console.log(`Given no 98 is : ${result}`);

console.log("************** (2) ***************");
 
function vote(age){
    if (age>=18) {
         return "You Are Eligible For Voting";
    }
    if (age<=18) {
        return "You Are Not Eligible For Voting";
   }
   
}
var result = vote(18);
console.log(`Age of 18 : ${result}`);
var result = vote(20);
console.log(`Age of 20 : ${result}`);
var result = vote(17);
console.log(`Age of 17 : ${result}`);
var result = vote(40);
console.log(`Age of 40 : ${result}`);

console.log("************** (3) ***************");

function character(word){
    var charlength=word.length
    if(charlength>=10){
       console.log(` The Given String : "JavaScript ES6" contains more than 10 characters `);
    }
}
character("JavaScript ES6");

console.log("************** (4) ***************");

function includesword(string){
    if(string.includes("Java")){
        console.log(`yes the string "JavaScript Language" starts with "Java"`);
    }
}
includesword("JavaScript Language");
