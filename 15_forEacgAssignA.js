console.log("==================================================================");
console.log("== (1).Find Index of Array Elements ==");
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601]
arrayNumbers.forEach((element,index) => {
        console.log(`Index is ${index}  Element is ${element}`);
});
console.log("==================================================================");
console.log("== (2).Find the positive Numbers ==");
arrayNumbers.forEach(element => {
    if (element>0) {
        console.log(element);
    }
});
console.log("==================================================================");
console.log("== (3).Find the negative Numbers add into new array ==");
arrayNegative=[];
arrayNumbers.forEach(element => {
    if (element<0) {
        arrayNegative.push(element)
    }
});
console.log(arrayNegative);
console.log("==================================================================");
console.log("== (4).Find Even Numbers");
arrayNumbers.forEach(element => {
    if(element%2==0) {
        console.log(`Even Numbers are : ${element}`);
    }
});
console.log("==================================================================");
console.log("== (5).Find sum of All Elements ==");
sum=0;
arrayNumbers.forEach(element => { 
   sum=sum+element;
});
console.log(`Total sum of All Array Elements is : ${sum}`);
console.log("==================================================================");
console.log("== (6).log Even Indexed Array ==");
arrayNumbers.forEach((element,index) => {
    if (index%2==0) {
        console.log(`Even Index Elements : ${element}`);
    }
});
console.log("==================================================================");