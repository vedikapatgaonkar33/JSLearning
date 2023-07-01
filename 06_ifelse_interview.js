function checkInterviewEligibility(gradScore,hscScore,sscScore,candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
        console.log(`Hey ${candidateName}  Congratulations You Are Eligible for TCS Interview`); 
    }
    else{
        console.log(`Hey ${candidateName} Sorry You Are Not  Eligible for TCS Interview`); 
    }
}
checkInterviewEligibility(80,86,90,"vedika");
checkInterviewEligibility(70,65,55,"Anjali");
checkInterviewEligibility(60,79,88,"sonal");


