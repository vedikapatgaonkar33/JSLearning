// console.log("====== API getElementsByTagName() to select element by tag name  =====");
// const h2Element = document.getElementsByTagName("h2");
// console.log(h2Element[1].innerHTML);
// h2Element[1].innerHTML = "My Hobbies";

// console.log("====== API getElementById() to select element by id  =====");
// const elementProfile = document.getElementById("profile");
// console.log(elementProfile.innerHTML);

// console.log("====== API getElementsByClassName() to select element class Name  =====");
// const elementLi =document.getElementsByClassName("liItem");
// console.log(elementLi[1].innerHTML);
// console.log("====== API querySelector() to select element by id  =====");
// const elementProfileByQuery = document.querySelector("#profile");
// console.log(elementProfileByQuery);

// console.log("====== API querySelector() to select element by class  =====");
// const elementByQuery= document.querySelector(".liItem");
// console.log(elementByQuery);

// console.log("====== API querySelectorAll() to select element by class  =====");
// const elementsByQuery = document.querySelectorAll(".liItem");
// elementsByQuery[3].innerHTML = "Oracle Database";
// console.log(elementsByQuery[3]);

// console.log("====== Changing the attribute of an element =====");
// const elementMyProfile = document.querySelector("#myProfile");
// elementMyProfile.setAttribute("href", "https://www.linkedin.com/");
// console.log(elementMyProfile);

// console.log("====== Changing the CSS properties =====");
// const elementTechStack = document.querySelector("#techStack");
// elementTechStack.style.color = "red";
// elementTechStack.style.fontFamily = "Arial";

// console.log("====== Remove Element =====");
// const elementDivProject = document.querySelector("#divProject");
// const elementProject = document.querySelector("#project");
// elementDivProject.removeChild(elementProject);
// console.log("Remove agile from list");
// const parent1=document.querySelector("#parent");
// const child1=document.querySelector("#child")
// parent1.removeChild(child1)


// console.log("====== Changing the CSS properties =====");
// const elementcolor = document.querySelector("#profile");
// elementcolor.style.color = "blue";
// elementcolor.style.fontFamily = "Arial";

// console.log("====== Adding Element =====");
// const elementDiv = document.querySelector("#divProject");
// const elementP = document.createElement("p");
// const elementText = document.createTextNode("Team Size - 7");
// elementP.appendChild(elementText);
// elementDiv.appendChild(elementP);

// console.log("===== Event Handling=====");
// const elementAddress=document.querySelector("#address")
// elementAddress.addEventListener("click", ()=>{
//     console.log(" Listening click event");
//     const inputValue=prompt("this is title","Default value")
//     console.log(inputValue);
// });
// elementAddress.addEventListener("mouseover",()=>{
//     console.log("mouseOver");
//     elementAddress.style.color="red";
// })

// console.log("======= Hobbies =======");
const elementadd=document.querySelector("#hobi")
elementadd.addEventListener("click", ()=>{
    // console.log("Listening click");
   
    const inputValue1=prompt("Hobbies","gaming")
    console.log(inputValue1);
});


function show() {
    console.log("click ");
}

const isEvenButton = document.querySelector("#isEvenButton");
isEvenButton.addEventListener('click', () => {
    const inputValue = prompt("Please enter number to check..", 0);
    const givenNum = +inputValue;
    if (inputValue==null || isNaN(givenNum) || givenNum<0) {
        alert("Invalid value");
    }else{
        const result = inputValue%2==0 ? true : false;
        if(result){
            alert("Given Number is Even");
        }else{
            alert("Given number is Odd");
        }
    }
} );

console.log("=============== check prime no ===============");
let prime = document.querySelector("#primeNo")
prime.addEventListener("click", ()=>{
let no=prompt("Enter number",0)
function p(n) {
   for (let index = 2; index < n; index++) {
       if(n%index==0){
           return `${n} is Not Prime Number`
       } 
   }
   return `${n} is  Prime Number`
}
let result=p(no);
alert(result)
console.log(result);
});

const confirmElement = document.querySelector("#confirm");
confirmElement.addEventListener('click',  () => {
   const result = confirm("Are you sure ?");
   console.log(result);
});



