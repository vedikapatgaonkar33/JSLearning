function factorialOfNum(num) {
    var fact=1;
    if (num==null||num==undefined||(typeof num=="String" && isNaN(num))) {
        return `Given Number : ${num} is Invalid Please enter valid data`
    } else {
       
        for (let index = num; index >=1 ; index--) {
            fact=fact*index; 
        }
        return `Given Number is ${num} factorial of given number = ${fact}`;
        
    }
    
}
var result=factorialOfNum(5);
console.log(result);
var result=factorialOfNum(3);
console.log(result);
var result=factorialOfNum(null);
console.log(result);
var result=factorialOfNum(8);
console.log(result);
var result=factorialOfNum(undefined);
console.log(result);
var result=factorialOfNum(9);
console.log(result);
var result=factorialOfNum(0);
console.log(result);
