console.log("================== Create Constructor Function =======================");
function Bank(bankName,location,ifscCode,branchCode) {
    this.bankName=bankName
    this.location=location
    this.ifscCode=ifscCode
    this.branchCode=branchCode
    this.show=function () {
        console.log(`Bank Details are: ${bankName},${location},${ifscCode},${branchCode}`);
        
    }
}

Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 AM IST";

const yesBank=new Bank("Yes Bank","Wakad Pune","YES000675","YES0114")
yesBank.show();
const sbiBank=new Bank("SBI Bank","kothrud pune","SBI00678","SBI009")
sbiBank.show();
const mahBank=new Bank("Mah Bank","Sinhgad Road","MAH00078","MAG0034")
mahBank.show();
const axis=new Bank("AXIS Bank","warje pune","AXIS00078","AXIS0034")
axis.show();
 
console.log("================== Add data members using Prototype object =======================");

Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 AM IST";

console.log(`Open time  of SBI bank is : ${sbiBank.openTime} and  Close time is : ${sbiBank.closeTime}`);
console.log("====================================================================================");
console.log(`Bank name is  : ${axis.bankName} , Close time is : ${axis.closeTime}`);
console.log("====================================================================================");
console.log(`Bank name is  : ${yesBank.bankName}, branch code is : ${yesBank.branchCode} Open time is : ${yesBank.openTime}`);

console.log("====================================================================================");