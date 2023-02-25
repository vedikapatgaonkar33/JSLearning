console.log("---------------------------- Assignment 3 ----------------------------");
function score(gradScore, hscScore, sscScore, candidateName){
    var education= (gradScore >= 70 || hscScore >= 80 || sscScore > 90 ) ? `congrates ${candidateName} : You are Eligible for TCS interview` :`sorry ${candidateName} : you are not eligible for TCS interview`;
    console.log(`${education}`);
}
var result=score(80,86,90,"Vedika");

var result=score(70,66,55,"sonal");

var result=score(60,70,80,"komal");

var result=score(60,79,88,"Anjali");



