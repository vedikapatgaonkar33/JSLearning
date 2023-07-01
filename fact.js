function facto(num) {
    for (let index = num; index >=1 ; index--) {
        fact=fact*index; 
    }
    return fact;
    
}
var result=facto(5);
console.log(result);