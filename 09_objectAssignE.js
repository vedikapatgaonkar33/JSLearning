let sbiBank = {
    bankName : "sbiBank",
    location: "kothrud,pune",
    accountNo: "AC62514897564",
    ifsc: "SBI0007778",
    interestRate: 10.75,
    showDetails : function () {
       console.log(`Bank Name: ${this.bankName}, Location: ${this.location},Accoun No: ${this.accountNo}, IFSC Code: ${this.ifsc} and  InterestRate: ${this.interestRate}`);
    }
}
sbiBank.showDetails();

let axisBank = {
    bankName: "Axis",
    location: "Visrambaugh, sangli",
    accountNo: "AC4597863258",
    ifsc: "AXIS0007893",
    interestRate: 10.5,
    showDetails : function () {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location},Accoun No: ${this.accountNo}, IFSC Code: ${this.ifsc} and  InterestRate: ${this.interestRate}`);
}
}
axisBank.showDetails()

let hdfcBank = {
    bankName: "hdfc",
    location: "Ashish garden,pune",
    accountNo: "AC459357898",
    ifsc: "HDFC000889",
    interestRate: 12.75,
    showDetails : function () {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location},Accoun No: ${this.accountNo}, IFSC Code: ${this.ifsc} and  InterestRate: ${this.interestRate}`);
}
}
hdfcBank.showDetails();

let yesBank = {
    bankName: "YesBank",
    location: "government colony,sangli",
    accountNo: "AC45687978881",
    ifsc: "YESB0004578",
    interestRate: 17.5,
    showDetails : function () {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location},Accoun No: ${this.accountNo}, IFSC Code: ${this.ifsc} and  InterestRate: ${this.interestRate}`);
}
}
yesBank.showDetails();
