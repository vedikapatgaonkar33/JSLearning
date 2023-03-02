console.log("--------------- (1) ------------------");
console.log("vowels are a,e,i,o,u");
var vowelsCheck = function (string) {
    var count = 0;
for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index);
    if (char == "a" || char == "e"|| char == "i"|| char == "o" || char == "u"||char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
        count = count + 1;
    }
}
return count;
}
var result = vowelsCheck("Javascript is the language of Internet");
console.log(`Total Number of vowels in "Javascript is the language of Internet" : ${result}`);
var result = vowelsCheck("I am Angular Developer");
console.log(`Total Number of vowels in "I am Angular Developer" : ${result}`);
var result = vowelsCheck("Hard work and commitment is the key of success");
console.log(`Total Number of vowels in "Hard work and commitment is the key of success" : ${result}`);





console.log("--------------- (2) ------------------");


function lastWordCharsCount(str) {
   
var reverse = ""; 
for (let index = str.length-1 ; index >= 0; index--) { 
    var char = str.charAt(index);
    if(char == " "){
        break;
    }
   reverse = reverse + char; 
}
return reverse;
}

var result = lastWordCharsCount("Javascript is the language of Internet");
console.log(`Last word count of "Javascript is the language of Internet" : ${result.length}`);
var result = lastWordCharsCount("I am Angular Developer");
console.log(`Last word count of  "I am Angular Developer" : ${result.length}`);
var result = lastWordCharsCount("Hard work and commitment is the key of success");
console.log(` Last word count of "Hard work and commitment is the key of success" : ${result.length}`);

