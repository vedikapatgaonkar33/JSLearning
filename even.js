function evenodd(num)
{
if(num % 2==0) {
    console.log(`the number ${num} is even number`);
}

else{
    console.log(`the number ${num} is odd`);
}
}
evenodd(2);
evenodd(3);

function posneg(number){
    if(number<0)
    {
        console.log(` number ${number} is negative`);
    }
    else{
        console.log(`number ${number} is positive`);
    }
}
posneg(5);
posneg(-2);



function fibo(num1){
    let first=0;
    let second=1;
    let next=0;

    for(let index=1;index<=num1;index++){
        console.log(first);
        next=first+second;
        first=second;
        second=next;
    }
}
fibo(7)



var strings =function(str){
 reverse= "";
 for(let index=str.length-1;index>=0;index --){
    var charAt =str.charAt(index);
    reverse=reverse+charAt;
    if(charAt==" "){
        break;
    }
 }
 return reverse;
}
result = strings("i love you");
console.log(result);


