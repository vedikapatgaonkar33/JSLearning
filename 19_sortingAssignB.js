
class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany) {
      this.empId = empId;
      this.empName = empName;
      this.empDept = empDept;
      this.empSalary = empSalary;
      this.empCompany = empCompany;
    }
  }
  const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
  const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const empVinay = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infosys");
  console.log("===========================================================================================");
  let arrayEmployee=[empAnil,empRadha,empRishi,empSonali,empMonika,empVinay,empMahi];
   let empOfId=arrayEmployee.sort((a,b) => {
    return a.empId>b.empId ? 1 : -1
   })
   empOfId.forEach(element => {
    console.log(` Employee ID : ${element.empId} Employee Name : ${element.empName} Employee Dept : ${element.empDept}`);
   });
   console.log("===========================================================================================");
let deptOfEmp= arrayEmployee.sort( (a,b) => {
 return a.empDept>b.empDept ? 1 : -1
})
deptOfEmp.forEach(element => {
    console.log(`Employee ID : ${element.empId}  Employee Dept : ${element.empDept} Employee Company : ${element.empCompany}`);
});
console.log("===========================================================================================");
let salaryOfEmp= arrayEmployee.sort( (a,b) => {
    return a.empSalary<b.empSalary ? 1 : -1
   })
   salaryOfEmp.forEach(element => {
       console.log(`Employee Name : ${element.empName}  Employee Salary : ${element.empSalary} Employee Company : ${element.empCompany}`);
   });