console.log("---------------------- Assignment 2 -------------------------");

console.log("******************** (1) *********************");

function maleMarriageEligibility(gender ,age , boyName){
    var result= (gender =="Male" && age >= 21) ?  `Hey ${boyName} : you are eligible for marriage` : ` ${boyName} : Sorry You are not Eligible for marriage` ;
    return result;
}
var result = maleMarriageEligibility("Male", 25, "Billgates");
console.log(result);
var result = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(result);

console.log("******************** (2) *********************");

function femaleMarriageEligibility(gender ,age , girlName){
    var result= (gender =="Female" && age >= 18) ?  `Hey ${girlName} : you are eligible for marriage` : ` ${girlName} : Sorry You are not Eligible for marriage` ;
    return result;
}
var result = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(result);
var result = femaleMarriageEligibility("Female", 27, "Malinda gates");
console.log(result);







