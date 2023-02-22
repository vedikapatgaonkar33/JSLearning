console.log("********** Step 1 *************");

var str1 = "Java Script";
var str2 = "Google Chrome";
var str3 = "Devloper Smart";

function squareOfWordLength(value){
    var  var1 = value;
    var square = var1.length**2;
    console.log(`string is : ${value}`);
    console.log(`Length of string : ${value.length}`);
    console.log(`Square of length is : ${square}`); 
}
squareOfWordLength(str1);
squareOfWordLength(str2);
squareOfWordLength(str3);

console.log("********** Step 2 *************");


function devloper(){
    var str = "I am Angular Developer";
    var strlength = str.length;
    var strsplit = str.split(" ");
    var count = strsplit.length;
     
    console.log(`String is : ${str}`);
    console.log(`Length of string is : ${strlength}`);
    console.log(`words available in string: ${count}`);
    console.log(`string length divide by total no of words : ${strlength/count}`);
    console.log(`string length by multiply  by total words ${strlength*count}`);
}
devloper();