console.log("=========================== Arrow Function ===========================");
console.log("=========================== Step 1 : ===========================");
console.log("==== Arrow function with no arg and no return value ====");
var morning= () =>{
    console.log("Good Morning, Today is Monday");

}
morning();
 
console.log("=========================== Step 2 : ===========================");
console.log("==== Multiplocation of 3 arguments with no return value ");

let multiply = (num1 , num2 , num3=1) => {
sum=num1*num2*num3
console.log(` Multiplcation of ${num1},${num2},${num3} is  ${sum}`);
}
multiply(5,5,2);
multiply(10,4);


console.log("=========================== Step 3 : ===========================");
console.log("==== addition of 5 arguments with return value ====");
let add = (arg1,arg2,arg3,arg4,arg5) => {
    const result= arg1 + arg2 + arg3 + arg4 + arg5
    return `Addition of 5 arguments is ${result}`;

}
const additionRes = add(100,100,200,349,756);
console.log(additionRes);
const additionstring = add("i am", " learning" ," ES6", " Features", " in Depth");
console.log(additionstring);