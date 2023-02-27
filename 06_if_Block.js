console.log("*********** if Block Statement*********");
console.log(`start`);
var num = 10;
if(num>=0){
console.log(`inside if`);
console.log(`number is positive ${num}`);
}

console.log(`End`);

var ageForVote=20;
if (ageForVote>=18) {
    console.log(`You Are Eligible For Voting`);
    console.log(`Age is : ${ageForVote}`);
    
}
console.log(`End of the next if Block`);

function checkEvenOdd(num1){

    if(num1%2==0){
        return "EVEN";
    }

    if(num1%2==1){
        return "ODD";
    }
}
var result = checkEvenOdd(45);
console.log(`Given no 45  is ${result}`);

var num2 = 5;
if (num2>0){
    console.log(`number ${num2} is positive`);
    
} else {
    console.log(`number ${num2} is negative`);
    
    
}


function maleMarriageEligibility(gender,age,boyName){
    if(gender=="Male" && age>=21){
        return "You Are Eligible for Marriage";
    }
    else{
        return  "unforunately you Are Not Eligible for Marriage";
    }
}
var result = maleMarriageEligibility("Male",25,"Billgates")
console.log(`Hey "Billgates" ${result}`);

var result = maleMarriageEligibility("Male",20,"Stew jobs")
console.log(`Hey "Stew jobs" ${result}`);

