console.log(`"reverse the string"`);
var reverseString = function(str){
    var reverse = ""; // wo
    for (let index = str.length-1 ; index >= 0; index--) { // 9 
       var charAt = str.charAt(index);
       reverse = reverse + charAt; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseString("Do it anyhow"); 
console.log(`Reverse String is: ${result}`);

console.log(`"reverse the last word"`);
var reverseStr = function(str){
    var reverse = ""; // wo
    for (let index = str.length-1 ; index >= 0; index--) { // 9 
        var char = str.charAt(index);
        if(char == " "){
            break;
        }
       reverse = reverse + char; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseStr("Do it anyhow"); 
console.log(`Reverse String is: ${result}`);

"I am Angular  champ"
console.log(`"write the string"`);

var reverseString = function(str){
    var reverse = ""; 
    for (let index = 0; index <= str.length ; index++) { 
       var charAt = str.charAt(index);
       reverse = reverse + charAt; 
    }
    return reverse;
}
var result = reverseString("I am Angular  champ"); 
console.log(`Reverse String is: ${result}`);

console.log("total spaces");
// "I am Angular  champ"
var str = "I am Angular  champ";
var count = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (char == " ") {
        count = count + 1;
    }
}
console.log("Total number of spaces is: ", count);

// "I am Angular  champ"
var str = "I am Angular  champ";
var count = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (char == "a" || char == "e"|| char == "i"|| char == "o" || char == "u"||char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
        count = count + 1;
    }
}
console.log("Total number of vowels: ", count);

var firstWordLength = function(params) {
    
}
