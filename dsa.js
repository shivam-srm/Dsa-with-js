// Swap two numbers without third variable
let a = 10
let b = 20 ;

sum = a+b;
console.log (a , b);
console.log(sum);

a = sum - a ;
b = sum - 20;
console.log (a , b);
// 2nd method
let c = 40;
let d = 50;

[ c , d ] = [  d , c ];

console.log(c,d)
