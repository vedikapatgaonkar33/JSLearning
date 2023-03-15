console.log("========================== clone using Object Assignment =====================================");
const bankSbi={
    bankName : "State Bank Of India",
    BranchCode : "0020",
    accountNo : "AC00023456",
    ifscCode : "SBI00234",

}
const bankLocation ={
    street : "Mayur Colony",
    city : "Pune",
    pinCode : 411039
}
const newSbi= Object.assign({}, bankSbi);
console.log(`Bank Details are : Bank name = ${newSbi.bankName} ,  Branch code =${newSbi.BranchCode} , Account No =${newSbi.accountNo} , IFSC Code = ${newSbi.ifscCode}`);

const newLocation= Object.assign({}, bankLocation);
console.log(`Bank Location Details : street = ${newLocation.street},City = ${newLocation.city},Pin Code = ${newLocation.pinCode} `);

console.log("========================== clone using Spread Operator =====================================");
const newSbiBank={...bankSbi};
console.log(`Bank Details are : Bank name = ${newSbiBank.bankName} ,  Branch code =${newSbiBank.BranchCode} , Account No =${newSbiBank.accountNo} , IFSC Code = ${newSbiBank.ifscCode}`);
const newBankLoc={...bankLocation};
console.log(`Bank Location Details : street = ${newBankLoc.street},City = ${newBankLoc.city},Pin Code = ${newBankLoc.pinCode} `);

console.log("========================== Merging  =====================================");
const rateOfInterest={
    homeLoanInterest : 10,
    personalLoanInterest : 12.5,
    dueInterest : 9
}
const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(`SBI Bank Details Are : ${sbiDetails.bankName} , Branch code : ${sbiDetails.BranchCode}, Account No : ${sbiDetails.accountNo},IFSC Code : ${sbiDetails.ifscCode}, Street : ${sbiDetails.street},City: ${sbiDetails.city},Pin Code : ${sbiDetails.pinCode}, Home Loan Interest : ${sbiDetails.homeLoanInterest} ,Personal Loan Interest ${sbiDetails.personalLoanInterest}, Due Interest : ${sbiDetails.dueInterest}`);
console.log("========================== Traversing  =====================================");
let traverseObject = function(sbiDetails) {
    for (const key in sbiDetails) {
        if (Object.hasOwnProperty.call(sbiDetails, key)) {
            const element = sbiDetails[key];
            console.log(`${key} : ${element}`);
        }
    }
    
}
traverseObject(sbiDetails);



