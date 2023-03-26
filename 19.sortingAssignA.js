const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log("***** Reverse The Array *****");
const sortedArray= arrayRollNumbers;
sortedArray.reverse();
console.log(sortedArray);
console.log("========================================================================");
console.log("***** Use sort method without custom logic *****");
const sortMethod=arrayRollNumbers.sort();
console.log(sortMethod);
console.log("========================================================================");
console.log("***** Use sort method with custom logic in ascending order *****");
arrayRollNumbers.sort( (a, b) => { 
    return a>b ? 1 : -1;
} );
console.log(arrayRollNumbers);

console.log("========================================================================");
console.log("***** Find Greatest Number in Array *****");
const arrayLength= arrayRollNumbers[arrayRollNumbers.length-1]
console.log(arrayLength);
console.log("========================================================================");
console.log("***** Find smallest Number in Array *****");
const arraySmallest= arrayRollNumbers[0];
console.log(arraySmallest);
console.log("========================================================================");
console.log("***** Remove Duplicates From Array *****");

const setOfElements = new Set();
for (const element of arrayRollNumbers) {
    setOfElements.add(element); 
}
// console.table(setOfElements);

const arrayOfUniqueElements =  [...new Set(arrayRollNumbers)];
console.log(arrayOfUniqueElements);
console.log("========================================================================");



