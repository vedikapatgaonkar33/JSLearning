console.log("---------------------------- Assignment 3 ----------------------------");
function score(gradScore, hscScore, sscScore, candidateName){
    var education= (gradScore >= 70 || hscScore >= 80 || sscScore >= 90 ) ? `congrates ${candidateName} : You are Eligible for TCS interview` :`sorry ${candidateName} : you are not eligible for TCS interview`;
    return education;
}
var result=score(80,86,90,"Vedika");
console.log(result);
var result=score(70,66,55,"sonal");
console.log(result);
var result=score(60,70,80,"komal");
console.log(result);
var result=score(60,79,88,"Anjali");
console.log(result);


