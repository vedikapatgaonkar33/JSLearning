console.log("========================= Prime Number  =========================");
function primeNumber(num) {
   let isPrime = true;
   for (let index = 2; index < num; index++) {
      if (num%index==0) {
         isPrime = false
         console.log(`number is divisible ${index}`);
      }
      
   }
   if (isPrime) {
      console.log(`primenumber`);
   } else {
      console.log(`not prime`);
   }
}
primeNumber(2)
primeNumber(9
   
   
   )
    
// var result = primeNumber(2);
// console.log(result);


console.log("========================= Fibonacci Series  =========================");
// let n1,n2,nextTerm;
// function fibonacci(number) {
//     for (let index = 1; index <= number ; index++) {
//         console.log(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
        
//     }
// fibonacci(10);

// console.log("Fibo series");
// 0  1  1   2   3   5   8

function fabSeries(fabTerm){
   let first = 0;
   let second = 1;
   let next = 0;
 
   for (let index = 1; index <= fabTerm; index++) {
    console.log(first);   
     next = first + second; 
     first = second;
     second = next;  
     
   }
}
fabSeries(7);
   
 