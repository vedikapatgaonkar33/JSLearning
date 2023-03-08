const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
var totalElements=arrayNumbers.length;
console.log(`(step : 1).Total Number of Elements Are : ${totalElements}`);
console.log("------------------------------------------------------------------------------------------------------");

var firstElement=arrayNumbers[0];
var lastElement=arrayNumbers[arrayNumbers.length-1];
console.log(`(step : 2).First Element is : ${firstElement} & Last Element is : ${lastElement}`);
console.log("------------------------------------------------------------------------------------------------------");

var thirdLastElement=arrayNumbers[arrayNumbers.length-3];
console.log(`(step : 3). Third Last Element is : ${thirdLastElement}`);
console.log("------------------------------------------------------------------------------------------------------");

console.log("(step : 4).Even Numbers Are:"); 
var index=0; // initialization
while (index<arrayNumbers.length) { // condition
    const element = arrayNumbers[index];
    if(element%2==0) {
        console.log(` ${element}`);
        
    }
    index++; // Update Expression
}
console.log("------------------------------------------------------------------------------------------------------");

console.log("(step : 5).odd Numbers Are:"); 
var index=0; // initialization
while (index<arrayNumbers.length) { // condition
    const element = arrayNumbers[index];
    if(element%2==1) {
        console.log(` ${element}`);
        
    }
    index++; // Update Expression
}
console.log("------------------------------------------------------------------------------------------------------");

let sum = 0; // 10
for (let index = 0; index < arrayNumbers.length; index++) {//1
    const element = arrayNumbers[index];
    if(index%2==0) {
        sum = sum + element;
    }
}
console.log(`(step : 6).Sum of Even Number Index of Array element is: ${sum}`);

console.log("------------------------------------------------------------------------------------------------------");


let sums = 0; // 10
for (let index = 0; index < arrayNumbers.length; index++) {//1
    const element = arrayNumbers[index];
    if(index%2==1) {
        sums = sums + element;
    }
}
console.log(`(step : 7).Sum of Odd Number Index of an Array element is: ${sums}`);

console.log("------------------------------------------------------------------------------------------------------");


let sum1 = 0; // 10
for (let index = 0; index < arrayNumbers.length; index++) {//1
    const element = arrayNumbers[index];
    
        sum1 = sum1 + element;
    
}

console.log(`(step : 8).Sum of  Array element is: ${sum1}`);


console.log("------------------------------------------------------------------------------------------------------");

console.log(`(step : 9).Multiple of 5 are:`);
var index=0; 
while (index<arrayNumbers.length) { 
    const element = arrayNumbers[index];
    if(element%5==0) {
        console.log(` ${element}`);
    }
    index++; 
}

console.log("------------------------------------------------------------------------------------------------------");
let available115=arrayNumbers.includes(115);
console.log(`(step : 10).Is 155 available in this Array: ${available115}`);

console.log("------------------------------------------------------------------------------------------------------");
let available23=arrayNumbers.includes(23);
console.log(`(step : 11).Is 23 available in this Array: ${available23}`);

console.log("------------------------------------------------------------------------------------------------------");

console.log("(step : 12).Adding 55 and 66 before 3 index");
var spliceMethod=arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log("------------------------------------------------------------------------------------------------------");

console.log("(step : 13).Deleteing 3 elements starting from index 4");
var deleting= arrayNumbers.splice(4,3);
console.log(arrayNumbers);









