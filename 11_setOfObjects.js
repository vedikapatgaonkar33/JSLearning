class Bank {
    constructor(bankName, location, account, ifsc, interestRate ){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }  
}
console.log("====================================================================================================");
const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "AC891234", "AXIS0034", 10.50);
console.log(axisBank);
const sbiBank = new Bank("SBI Bank", "Wakad", "AC625148", "SBIN0048",10.75 );
console.log(sbiBank);
const iciciBank = new Bank("ICICI Bank", "Sinhgad Road, Pune", "AC459786", "ICICI0086", 12.50);
console.log(iciciBank);
const kotakBank = new Bank("Kotak Bank", "warje, Pune", "AC783258", "KOTAK0058", 11.5);
console.log(kotakBank);
const hdfcBank = new Bank("HDFC Bank", "mayur colony, Pune", "AC459789", "HDFC0089", 13.5);
console.log(hdfcBank);
const punjabBank = new Bank("Punjab Bank", "Deccan, Pune", "AC978657", "PUNJAB0057", 15);
console.log(punjabBank);
console.log("====================================================================================================");
const setOfBanks = new Set();

setOfBanks.add(axisBank);
setOfBanks.add(sbiBank);
setOfBanks.add(iciciBank);
setOfBanks.add(kotakBank);
setOfBanks.add(hdfcBank);
setOfBanks.add(punjabBank);

console.log(setOfBanks);
console.log("====================================================================================================");

for (const bank of setOfBanks) {
    console.log(`Bank Name : ${bank.bankName} , Location : ${bank.location}`);
}