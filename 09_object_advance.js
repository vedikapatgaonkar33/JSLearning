const employee={
    id : 123,
    name : "elon musk",
    country : "US",
    city : "Silicon Valley"
}

console.log("====== In operator =======");
const isIdAvaiable= "id" in employee;
console.log(isIdAvaiable);
for (const key in employee) {
    
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key, element);
    }
}
const keysOfEmployee =Object.keys(employee);
console.log(keysOfEmployee);
 
const valuesOfEmployee=Object.values(employee);
console.log(valuesOfEmployee);

const entriesOfEmployee=Object.entries(employee);
console.log(entriesOfEmployee);
console.log(entriesOfEmployee[0]);