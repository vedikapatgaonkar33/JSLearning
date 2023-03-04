function factorialOfWordsCount(str) {
    var fact=1;
    if (str==null||str==undefined||(typeof str=="Number" && isNaN(str))) {
        return `Given String : ${str} is Invalid Please enter valid data`
    } else {
        console.log(`Given String is Valid : "${str}"`);
         var stringSplit=str.split(" ");
         const totalWords= stringSplit.length;
        
        for (let index = totalWords; index >=1 ; index--) {
            fact=fact*index; 
        }
        return ` Total number of words in given string is" ${totalWords} "factorial of string is  = ${fact}`;
        
    }
    
}
console.log("--------------------------------------------------------------------------------------------------------");
var result=factorialOfWordsCount("Revision is the mother of success");
console.log(result);
console.log("--------------------------------------------------------------------------------------------------------");
var result=factorialOfWordsCount("We never fail, we always learn");
console.log(result);
console.log("--------------------------------------------------------------------------------------------------------");
var result=factorialOfWordsCount(null);
console.log(result);
console.log("--------------------------------------------------------------------------------------------------------");
var result=factorialOfWordsCount("");
console.log(result);
console.log("--------------------------------------------------------------------------------------------------------");
var result=factorialOfWordsCount("Vedika pradeep patgaonkar");
console.log(result);
console.log("--------------------------------------------------------------------------------------------------------");

