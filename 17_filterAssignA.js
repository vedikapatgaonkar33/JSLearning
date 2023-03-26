const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log("========================================================================");
console.log("Numbers Greater Than 50 ");
const arrayElement = arrayNumbers.filter(currentValue => currentValue>50);
console.log(`Numbers Greater Than 50 :  ${arrayElement}`);
console.log("========================================================================");
console.log("Even Numbers in Array");
const arrayEven= arrayNumbers.filter(currentValue => currentValue%2==0)
console.log(`Even Numbers : ${arrayEven}`);
console.log("========================================================================");
console.log("Odd Numbers in Array");
const arrayOdd= arrayNumbers.filter(currentValue=> currentValue%2==1)
console.log(`odd Numbers : ${arrayOdd}`);
console.log("========================================================================");
console.log("Numbers Which are Multiple of 5");
const arrayMultiple=arrayNumbers.filter(currentValue => currentValue%5==0)
console.log(`multiple of 5 : ${arrayMultiple}`);
console.log("========================================================================");
console.log("Numbers between 20 and 50");
const arrayBetween= arrayNumbers.filter(currentValue=> currentValue>20 && currentValue<50)
console.log(arrayBetween);
console.log("========================================================================");
