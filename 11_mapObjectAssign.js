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


const mapOfBank = new Map();

mapOfBank.set("AC891234", axisBank);
mapOfBank.set("AC625148", sbiBank);
mapOfBank.set("AC459786", iciciBank)
mapOfBank.set("AC783258",kotakBank)
mapOfBank.set("AC459789", hdfcBank);
mapOfBank.set("AC978657",punjabBank)

console.log(mapOfBank);
console.log("====================================================================================================");





const keyMap = mapOfBank.keys();
for(const key of keyMap ){
const elements = mapOfBank.get(key);
console.log("bank name:", elements.bankName,", Account no:", elements.account,", Interest rate:", elements.interestRate);
}
