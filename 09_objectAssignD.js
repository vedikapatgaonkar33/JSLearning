console.log("******* Step 1. Create Object professor with minimum 5 properties *******");
const professor={
    name : "Gajanan Sir",
    subject : "javaScript",
    city : "pune",
    pin : 123456,
    married : true,
    degree : {
        engineering : "CS",
        PHD : "Advance Computing",
        Science : "BCA",
        commerce :"B.com",
        arts : "BA",
        
    },
    prodegree : function () {
        return ` " ${this.degree.engineering} ,${this.degree.PHD},${this.degree.Science},${this.degree.commerce} and ${this.degree.arts}"`
    },
    certificates : ["Hacker Rank Participation","certificate in IFE course","Advance Programming"]
     
};
console.log(professor);
console.log("******* Step 2. Including Nested object degree *******");


console.log(professor.degree);
console.log("******* Step 3. Adding Array Certificates to object *******");

console.log(professor.certificates);

console.log("******* Step 4. Add function as a value And concat all degree's *******");
var result = professor.prodegree();
console.log(result);

console.log("******* step 5. Add new property total Experience *******");
professor.totalExperience=14;
console.log(` Total Experience is :${professor.totalExperience}`);


console.log("******* step 6. Modify any property  *******");
professor.city="mumbai"
console.log(`updated city is :${professor.city}`);
console.log(professor);



console.log("******* step 7. Add one new certificate at the end of array *******");

// console.log(professor.certificates[professor.certificates.push("oracle Certificate")]);
professor.certificates.push("oracle Certificate");
console.log(professor.certificates);

console.log("******* step 8. Add one new certificate at the end of array *******");

console.log(professor.certificates[professor.certificates.length-1]);
