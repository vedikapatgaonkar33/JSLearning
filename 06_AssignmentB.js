console.log("************** (1) ***************");
function maleMarriageEligibility(gender,age,boyName){
    if(gender=="Male" && age>=21){
        return "You Are Eligible for Marriage";
    }
    else{
        return " unforunately you Are Not Eligible for Marriage"
    }
}
var result = maleMarriageEligibility("Male",25,"Billgates")
console.log(`Hey "Billgates" ${result}`);

var result = maleMarriageEligibility("Male",20,"Stew jobs")
console.log(`Hey "Stew jobs" ${result}`);


console.log("************** (2) ***************");

function femaleMarriageEligibility(gender,age,boyName){
    if(gender=="female" && age>=18){
        return "You Are Eligible for Marriage";
    }
    else{
        return " unforunately you Are Not Eligible for Marriage"
    }
}
var result = femaleMarriageEligibility("female",16,"Jenifar")
console.log(`Hey "Jenifar" ${result}`);

var result = femaleMarriageEligibility("female",20,"Malinda")
console.log(`Hey "Malinda" ${result}`);