//object literals
let student={
    firstName:"vedika",
    lastName:"patgaonkar",
    isWorking:false,
    age:23,
    collegeName:"RMD Sinhagad School Of Engineering",
    id:34567,
    address:{
              street:"wakad",
              city:"pune",
              pin:234456
    },
    friends : ["vedika","devika","sonal"],
    show : function () {
        console.log("I am Show Function");
    },
    addressDetails : function () {
       return `Address is : street : ${this.address.street},city : ${this.address.city}, pin: ${this.address.pin} `
        
    }

};
var result = student.addressDetails();
console.log(result);
student.show()
// console.log(student.friends[2]);
// console.log(student.friends[student.friends.length-1]);
// // console.log(typeof student.id);
// console.log(student);
// console.log(typeof student);
// console.log(student.firstName);//Dot Notation
// console.log(student["lastName"]);

//update value
// student.collegeName="COEPPUNE";

// console.log(student);

// console.log(student.age);

//Adding property
// student.city="mumbai";
// student.country="India";


//delete property
// delete student.isWorking;
// console.table(student);


//Empty object
// let teacher={};
// teacher.firstName="Gajanan sir";
// console.log(teacher);

// console.log(student.address.city);
// student.address.pin=432675;
// console.log(student.address.pin);


student.marks={
    math:80,
    physics:60,
    drawing:70
}
console.log(student.marks);