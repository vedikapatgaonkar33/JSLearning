console.log("==========================================================================================================");
console.log("======= Created All Employee Objects =======");
class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;

    }
}
const emp_anil =new Employee(22, "Anil", "IT", 50000, "TCS");
console.log(emp_anil);
const emp_radha =new Employee(33, "Radha", "HR", 74000, "Wipro");
console.log(emp_radha);
const emp_rishi =new Employee(55, "Rishi", "Finance", 47000, "TCS");
console.log(emp_rishi);
const emp_sonali =new Employee(66, "Sonali", "Finance", 45000, "Infy");
console.log(emp_sonali);
const emp_Monika =new Employee(77, "Monika", "IT", 40000, "Wipro");
console.log(emp_Monika);
const emp_viny =new Employee(88, "Vinayak", "IT", 75000, "TCS");
console.log(emp_viny);
const emp_mahi =new Employee(99, "Mahesh", "HR", 85000, "Infy");
console.log(emp_mahi);
console.log("==========================================================================================================");
console.log("======= (1).Find out the TCS employee Details =======");
arrayOfEmp=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_Monika,emp_viny,emp_mahi]
arrayOfEmp.forEach(element => {
    if (element.emp_company=="TCS") {
        console.log(`Employee Name : ${element.emp_name}  Company :  ${element.emp_company}`);
    }
});
console.log("==========================================================================================================");
console.log("======= (2).Find employees with salary greater than 50,000  =======");
arrayOfEmp.forEach(element => {
    if (element.emp_salary>50000) {
        console.log(`Employee ID : ${element.emp_id}, Name : ${element.emp_name}, Dept : ${element.emp_dept}, Salary : ${element.emp_salary}, Company :  ${element.emp_company}`);
    }
});
console.log("==========================================================================================================");
console.log("======= (3).Total od all Employee salary  =======");
let sum = 0;
arrayOfEmp.forEach(element => {
    const salary=element.emp_salary
    
    sum = sum + element.emp_salary; 
});
console.log(`Total of All Employees Salary : ${sum}`);
console.log("==========================================================================================================");
console.log("======= (4).Find Average salary of Employee =======");
let numberOfEmp = arrayOfEmp.length;
arrayOfEmp.forEach(element => {
    average = sum/numberOfEmp;
    console.log(`Total Salary Average is : ${average}`);
});
console.log("==========================================================================================================");
console.log("======= (5).Find Employees of IT or HR Department with salary greater = 75000 =======");
arrayOfEmp.forEach(element => {
    if (element.emp_salary >= 75000 ) {
        if (element.emp_dept=="IT" || element.emp_dept=="HR") {
            
        
        console.log(`Employee ID : ${element.emp_id}, Name : ${element.emp_name}, Dept : ${element.emp_dept}, Salary : ${element.emp_salary}, Company :  ${element.emp_company}`);
        }
    }

    
});
