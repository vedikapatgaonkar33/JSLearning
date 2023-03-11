console.log("********* Step 1. Class vehicle with minimum5 properties *********");
class Vehicle {
    constructor(carCompany , carModel , carEngine , carColor , carPrize){
        this.companyName=carCompany;
        this.carModel=carModel;
        this.engine=carEngine;
        this.color=carColor;
        this.Prize=carPrize

    }
    
}
const car= new Vehicle("Maruti","swift","Diesel","white",100000)
console.log(car);

const toyota= new Vehicle("Toyota","Fortuner","Diesel","Black",200000)
console.log(toyota);

const nissan= new Vehicle("Nissan","Micra","Diesel","Blue",500000)
console.log(nissan);

const tata= new Vehicle("Tata","Harrier","petrol","Grey",2500000)
console.log(tata);

const mahindra= new Vehicle("Mahindra","Thar","Petrol","Black",3000000)
console.log(mahindra);

console.log("********* Step 1.2. Traversing array using for loop *********");
const arrayOfVehicle = [car,toyota,nissan,tata,mahindra]
for (let index = 0; index < arrayOfVehicle.length; index++) {
    const element = arrayOfVehicle[index];
    console.log(`Vehicle Details are : ${element.companyName}, ${element.carModel}, ${element.engine},${element.color} and ${element.Prize}`);
    
}
console.log("********* Step 2. Class College with minimum5 properties *********");
class college{
    constructor(collegeName, university , location , department , degree , placement){
           this.collegeName=collegeName;
           this.university=university;
           this.location=location;
           this.department=department;
           this.degree=degree;
           this.placement=placement;
    }
}

const mit = new college("MIT Polytechnic","MSBTE","Kothrud Pune","computer","Engineering","80%")
console.log(mit);

const rmd = new college("RMD Engineering ","SPPU","Warje Pune","civil","Engineering","75%")
console.log(rmd);

const modern = new college("Modern College","SPPU","Deccan Pune","Mangement","MBA","80%")
console.log(modern);

const sinhgad = new college("MIT Polytechnic","MSBTE","Kothrud Pune","BA","Arts","60%")
console.log(sinhgad);

console.log("********* Step 2.1 Traversing object *********");
let traverseObject=function (college) {
    for (const key in college) {
        if (Object.hasOwnProperty.call(college, key)) {
            const element = college[key];
            console.log(`${key} : ${element}`);
            
        }
    }
    
}
traverseObject(mit);
console.log("======================================================================");
traverseObject(rmd);
console.log("======================================================================");
traverseObject(modern);
console.log("======================================================================");
traverseObject(sinhgad);
console.log("======================================================================");

console.log("********* number is prime or not*********");



let num=11;
if(num%11==0){
    console.log(`Given Number ${num} is a Prime Number`);
}
else{
    console.log(`Given Number ${num} is Not a  Prime Number`);

}
let num1=56;
if(num%56==0){
    console.log(`Given Number ${num1} is a Prime Number`);
}
else{
    console.log(`Given Number ${num1} is Not a  Prime Number`);

}