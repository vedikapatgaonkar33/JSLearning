console.log("============================== step 1 : Shallow clone  =========================================");
const arrayNums=[20,3,4,56,90,400,49];
const clonedArray = arrayNums;
clonedArray.push(55,66);
console.log(` Shallow clone ===> original Array : ${arrayNums}`);
console.log(` Shallow clone ===> cloned  Array : ${clonedArray}`);
console.log("================================ Step 2 : deep clone using spread operator =======================================");
const deepclonedArray =[...arrayNums];
arrayNums.push(10,25)
console.log(` Deep clone ===> original Array : ${arrayNums}`);
console.log(` Deep clone ===> original Array : ${deepclonedArray}`);
console.log("================================ step 3 : Merge  =======================================");
const arrayEven=[2,30,14,8];
const resultArray=[...arrayNums,...arrayEven]
console.log(` Merged array is : ${resultArray}`);


const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
            july_month : "40,0000INR",
            aug_month : "50,0000INR",
            jun_month : "65,0000INR"
        },
        address : {
            locality : {
                colony : "OM Vrindavan society",
                street : "Kanch Pokli, 431202"
            },
            city : "mumbai",
            state : "maharashtra",
            country : "India"
        },
        mobiles : ["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"] 
}
console.log("================================= step 4 : create Employee Info ======================================");
console.log(employee_info);
console.log("================================= step 5 : log employee details ======================================");
console.log(`Address : colony = ${employee_info.address.locality.colony}, street = ${employee_info.address.locality.street}, city = ${employee_info.address.city} , state ${employee_info.address.state} country = ${employee_info.address.country} `);
console.log(employee_info.mobiles);
console.log("================================= step 6 : Deep Clone using JSON.stringfy() ======================================");
const newEmp = JSON.parse(JSON.stringify(employee_info));
newEmp.salary.july_month="80,0000INR";
console.log(`original object :${employee_info.salary.july_month}`);
console.log(`cloned object :${newEmp.salary.july_month}`);
console.log("================================= step 6.1 : Deep Clone using JSON.stringfy() ======================================");
employee_info.address.country="United Kingdom";
console.log(` original object : ${employee_info.address.country}`);
console.log(`cloned object :  ${newEmp.address.country}`);


