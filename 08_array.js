var arrayOfNumbers = [ 0, 2, 4, 5, 8, 4, 0, 8];
console.log(arrayOfNumbers);
// console.table(arrayOfNumbers);
const totalArrayElements =  arrayOfNumbers.length;
console.log(`Total elements available in array is: ${totalArrayElements}`);
let is8Available=arrayOfNumbers.includes(8);
console.log(`is 8 available ${is8Available}`);
let is9Available=arrayOfNumbers.includes(9);
console.log(`is 9 available ${is9Available}`);

const indexis=arrayOfNumbers.indexOf(8);
console.log(`index of 8 element is ${indexis}`);

const index100is=arrayOfNumbers.indexOf(100);
console.log(`index of 100 element is ${index100is}`);

console.log("which element is stored in 2nd index");
var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5];
const valueAtIndex2 = arrayOfNumbers[2];
console.log(`Value at index 2 is: ${valueAtIndex2}`);

console.log("updating elements");
arrayOfNumbers[3] = 35;
console.log(arrayOfNumbers);

arrayOfNumbers[1] = 50;
console.log(arrayOfNumbers);


var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5];
console.log("==== Adding element in the last using push() === ");
arrayOfNumbers.push(40);
console.log(arrayOfNumbers);
console.log("==== Adding element in the first using unshift() === ");
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5];
console.log(arrayOfNumbers);
console.log("==== Removing last element using pop() === ");
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
console.log("==== Removing first element using shift() === ");
arrayOfNumbers.shift();
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5, 40, 45];
console.log("==== slice(startIndex) === ");
const arrayFromIndex3 = arrayOfNumbers.slice(3);
console.log(arrayFromIndex3);

console.log("==== slice(startIndex, endIndex) === ");
const subArray = arrayOfNumbers.slice(2, 5);
console.log(subArray);


console.log("============================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex) === ");
const splicedArray = arrayOfNumbers.splice(3);
console.log(`Removed elements from array is: ${splicedArray}` );
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex, deleteCount) === ");
const splicedArrayWithDeleteCount = arrayOfNumbers.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}` );
console.log(arrayOfNumbers);


var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
console.log(arrayOfNumbers);
var delete20=arrayOfNumbers.splice(1,1);
console.log(delete20);
console.log(arrayOfNumbers);



var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
var delete15= arrayOfNumbers.splice(3,1)
console.log(delete15);
console.log(arrayOfNumbers);


var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
var deleteElement=arrayOfNumbers.splice(1,2);
console.log(deleteElement);
console.log(arrayOfNumbers);

var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(3,1);
console.log(`After removing 15: ${arrayOfNumbers}`);

console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice( 2, 0, 22);
console.log(arrayOfNumbers);

console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
// 5, 35, 55
arrayOfNumbers.splice( 4, 0, 5, 35, 55);
console.log(arrayOfNumbers);


console.log("=====splice() to replace one elements ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(2, 2 ,50,60);
console.log(arrayOfNumbers);



