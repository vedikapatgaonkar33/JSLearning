var greet="Good Morning";
console.log(typeof greet);

console.log(" Total number chars available into this string variable - greet ");
var greetLength=greet.length;
console.log(greetLength);

console.log("To find the character by index value");
var charAtIndex3 = greet.charAt(3);
console.log("charater available at index 3 is",charAtIndex3);


console.log("find the last character");
var lastCharAtIndex=greet.charAt(greetLength-1);
console.log("last character is :",lastCharAtIndex);

console.log("find the index by character");
var indexOfM=greet.indexOf('M');
console.log("index of charater M is :",indexOfM);

console.log("Index of char which is not available into the string: ", greet.indexOf('z'));

console.log("index of o character:",greet.indexOf('o'));
console.log("index of o character:",greet.lastIndexOf('o'));

var replaceResult=greet.replace("Morning","Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case:", replaceResult.toUpperCase());
console.log("lower Case:", replaceResult.toLowerCase());

var myName = "   Mohit   Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length);

console.log("find the number of extra spaces removed");
var count=myName.length - myNameAfterTrim.length;
console.log(count);

console.log(myName.trimStart(),myName.trimEnd());

console.log("includes()");
console.log("Is substring Mor includes in the greet or not: ", greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));

console.log("slice() method");
var sliceResult = greet.slice(5, 12);
console.log(sliceResult);
console.log(greet.slice(2, 5));

console.log("split() method");
var greet = "Good Morning";
var splitResult = greet.split(" ");
console.log(splitResult);

console.log(typeof splitResult);

console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);

var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var frndList= myFriendList.split(" ");
console.log(frndList);
console.log(frndList.length);
console.log("Total words: ",frndList.length)

