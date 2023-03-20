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
console.log("==========================================================================================================")
console.log("======= Add all Objects in one Array =======");
const arrayOfEmployee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_Monika,emp_viny,emp_mahi];
console.log(arrayOfEmployee);
console.log("==========================================================================================================")
console.log("======= (1).Find Employees Working in Tcs =======");
for (const Employee of arrayOfEmployee) {
    const element = Employee;
    if (Employee.emp_company=="TCS") {
        
        console.log(`Employee Name : "${element.emp_name}" , Company Name : "${element.emp_company}"`);
    }
    
}
console.log("==========================================================================================================")
console.log("======= (2).Find Employees Working in Finance Deparment =======");
for (const Employee of arrayOfEmployee) {
    const element = Employee;
    if (Employee.emp_dept=="Finance") {
        console.log(`Employee Name : ${element.emp_name} Employee Department : ${element.emp_dept}`);
    }
    
}
console.log("==========================================================================================================")
console.log("======= (3).Find Employees Who's Name Start with letter R =======");
for (const Employee of arrayOfEmployee) {
    const element = Employee;
    if (Employee.emp_name.startsWith('R')) {
        console.log(`Employee Id : ${element.emp_id} , Name : ${element.emp_name} , Department : ${element.emp_dept}, Salary :  ${element.emp_salary}, Company :  ${element.emp_company}`);
    }
}
console.log("==========================================================================================================")
console.log("======= (4).Employees With salary Greater Than 75000 =======");
for (const Employee of arrayOfEmployee) {
    const element = Employee;
    if (Employee.emp_salary > 75000) {
        console.log(`Employee Name : ${element.emp_name} Company : ${element.emp_company} Salary : ${element.emp_salary}`);
    }
}
console.log("==========================================================================================================")
console.log("======= (5).Employees With salary Greater Than Equal to 50000 and IT department =======");
for (const Employee of arrayOfEmployee) {
    const element = Employee;
    if (Employee.emp_salary >= 50000 && Employee.emp_dept=="IT") {
        console.log(`Employee Id : ${element.emp_id} , Name : ${element.emp_name} , Department : ${element.emp_dept}, Salary :  ${element.emp_salary}, Company :  ${element.emp_company}`);
    }
}
console.log("==========================================================================================================")
console.log("======= (6).Find the Employees working in Infy =======");
for (const Employee of arrayOfEmployee) {
    const element = Employee;
    if (Employee.emp_company=="Infy") {
        console.log(`Employee Id : ${element.emp_id} , Name : ${element.emp_name} , Department : ${element.emp_dept}, Salary :  ${element.emp_salary}, Company :  ${element.emp_company}`);
    }
}
console.log("==========================================================================================================")
