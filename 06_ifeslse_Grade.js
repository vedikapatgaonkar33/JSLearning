console.log("********************  #1  **********************");
function voteEligibility(age){
    if (age<=0 || age==undefined || age==null || age >120 || isNaN()) {
    return  `your age ${age} is invalid please Enter valid Data.`;
    }
    if (age>18) {
        return ` Congratulations your age ${age} is Eligible for voting.`;
    }
    else{
        return `Sorry Your Age ${age} is  Not Eligible for voting. `
    }
}
var result=voteEligibility(45);
console.log(result);
var result=voteEligibility(17);
console.log(result);
var result=voteEligibility(20);
console.log(result);

var result=voteEligibility(8);
console.log(result);

var result=voteEligibility(-10);
console.log(result);

var result=voteEligibility(200);
console.log(result);

var result=voteEligibility(0);
console.log(result);

var result=voteEligibility(undefined);
console.log(result);

var result=voteEligibility(null);
console.log(result);

console.log("********************  #2  ***********");

function gradeCalculation(marks) {
if (marks<0 || typeof marks!="number" || marks>100 || marks==undefined || marks==null ) {
    console.log(`Your Marks ${marks} is invalid, Please Enter Valid Marks`);
}
if (marks>=90) {
    console.log(`Fanstastic Marks : ${marks} Your Grade is A+`);
}
if (marks>=75 && marks<90) {
 
    console.log(`Excellent Marks : ${marks} Your Grade is A`);   
}   
if (marks>=50 && marks<75) {
 
    console.log(`Good Marks : ${marks} Your Grade is B`);   
}  
if (marks>=35 && marks<50) {
 
    console.log(` Marks : ${marks} Your Grade is C Need Improvement`);   
}    
 
 

} 
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);





