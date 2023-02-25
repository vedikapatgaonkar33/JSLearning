console.log("********************  #1  **********************");
function stringHandOn(){
    var str = "     Hey you are doing good, keep it up       ";
    return str;
}
var resultStringHandOn = stringHandOn();
console.log(resultStringHandOn);

console.log("********************  #2  **********************");

var strLength = resultStringHandOn.length;
console.log("Length of string is :",strLength);

console.log("********************  #3  **********************");

var stringHandOnTrim = resultStringHandOn.trim();
console.log("Removing extra start and end spaces",stringHandOnTrim ,".","string length is :",stringHandOnTrim.length);

console.log("********************  #4  **********************");

console.log("Total Number Of extra spaces",resultStringHandOn.length-stringHandOnTrim.length);

console.log("********************  #5  **********************");

console.log("First Character",stringHandOnTrim.charAt(0,2),"Last charcter ",stringHandOnTrim.charAt(stringHandOnTrim.length-1));

console.log("********************  #6   **********************");

var totalwords=stringHandOnTrim.split(" ")
console.log("total number of words",totalwords);

console.log("********************  #7  **********************");

console.log("index of good character:",stringHandOnTrim.indexOf('good'));

console.log("********************  #8  **********************");

var substring = stringHandOnTrim.slice(22,stringHandOnTrim.length)
console.log("substring starting from 22 index: ",substring);

console.log("********************  #9  **********************");

console.log("check if string ends with up :",stringHandOnTrim.includes("up"));

console.log("********************  #10  **********************");

console.log("check if string starts with hey :",stringHandOnTrim.includes("Hey"));







