//object literals
let student={
    firstName:"vedika",
    lastName:"patgaonkar",
    isWorking:false,
    age:23,
    collegeName:"RMD Sinhagad School Of Engineering",
    id:34567
};
console.log(student);
console.log(typeof student);
console.log(student.firstName);//Dot Notation
console.log(student["lastName"]);

//update value
student.collegeName="COEPPUNE";

console.log(student);

console.log(student.age);

//Adding property
student.city="mumbai";
student.country="India";


//delete property
delete student.isWorking;
console.table(student);


//Empty object
let teacher={};
teacher.firstName="Gajanan sir";
console.log(teacher);