const arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water Melon"];

console.log("=============== (1).First and Last Element of array ===============");
var firstElement=arraySeasonalFruits[0];
console.log(`First Element is : "${firstElement}".`);
var lastElement=arraySeasonalFruits[arraySeasonalFruits.length-1];
console.log(`Last Element is"${lastElement}".`);


console.log("=============== (2).Add Element Papaya before element banana==============");
var addElementPapaya=arraySeasonalFruits.unshift("Papaya");
console.log(`"${arraySeasonalFruits}"`);

console.log("=============== (3).Remove Mango From array==============");
var removeMango=arraySeasonalFruits.splice(4,1);
console.log(`"${arraySeasonalFruits}"`);

console.log("=============== (4).Adding Pineapple element at last position==============");
var addPineapple=arraySeasonalFruits.push("Pineapple");
console.log(`"${arraySeasonalFruits}"`);

console.log("=============== (5).Insert Element Dragon Fruit before Water Melon==============");
var dragonFruit=arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(arraySeasonalFruits);

console.log("=============== (6).Replace the Element Orange with Kiwi.==============");
var kiwi=arraySeasonalFruits.splice(2,1,"Kiwi");
console.log(arraySeasonalFruits);


console.log("=============== (7).log the Element starting 1 to 4.==============");
var loging = arraySeasonalFruits.slice(1, 4);
console.log(loging);

console.log("=============== (8).Last 3 Element==============");
var last3= arraySeasonalFruits.slice(4,7)
console.log(last3);

