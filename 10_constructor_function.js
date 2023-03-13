function Person(fullName,city) {
    this.fullName=fullName;
    this.city=city;
    this.show = function(){
        console.log(`${fullName} ${city}`);
    }
}
Person.prototype.country="india";
const dhoni= new Person("Dhoni","ranchi");
console.log(dhoni.country);
dhoni.show();
const gill= new Person("Shubham gill","Mumbai");
console.log(gill.country);
gill.show();
const ashwin= new Person("R Ashwin","Chennai");
ashwin.show();
console.log(ashwin.country);


const date = new Date();
console.log(date);

console.log(typeof date);

const math =Math.pow(2,3);
console.log(math);




