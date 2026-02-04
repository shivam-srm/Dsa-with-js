// Swap two numbers without third variable
// let a = 10
// let b = 20 ;

// sum = a+b;
// console.log (a , b);
// console.log(sum);

// a = sum - a ;
// b = sum - 20;
// console.log (a , b);
// 2nd method
// let c = 40;
// let d = 50;

// [ c , d ] = [  d , c ];

// console.log(c,d)



// Find largest of two numbers

// let a = 20
// let b = 10
// if (a>b)  {
//     console.log (`${a} is larger`)
// }
// else   {
//     console.log (`${b} is larger`)
// }
// Find largest of three numbers

// let c = 10;
// let d = 20;
// let e = 30 ;

// if (c > d && c > e) {
//     console.log(`${c} is largest`);
// } else if (d > e) {
//     console.log(`${d} is largest`);
// } else {
//     console.log(`${e} is largest`);
// }

// Check even or odd
// let  a = 10;
// let b = 3;
// if (a%2 === 0) {
//     console.log("even")
// }

// if (b%2===0){
//     console.log("odd")
// }

// Check positive, negative, zero
// function abc (num){
//     if (num > 0) {
//         console.log("even")
//     }
//     if (num < 0){
//         console.log("neagtaive")
//     }
//     if ( num === 0 ){
//         console.log ("zero")
//     }
// }
// abc(-10);
// abc(-20);
// abc(0);

// Reverse a 2-digit number
// let a  =  74 ;
// let one = 74 % 10;
// let tens = Math.floor(a/10);
// let Reverse = (one*10) + tens
// console.log (Reverse);

// Sum of digits of a number
// let b = 10;
// let c = 20;
// console.log(b+c);


// Count digits in a number

// let num = 4567
// let count = 0 
// while (num >0 ){
//     num = Math.floor(num/10)
//     count ++
// }
// console.log(count)
// Check number divisible by 5 and 11
// let num = 55;

// if (num % 5 === 0 && num % 11 === 0) {
//     console.log("Divisible by both 5 and 11");
// } else {
//     console.log("Not divisible by both 5 and 11");
// }


// Convert Celsius to Fahrenheit

// let c = 57
// let f = (c * 9/5) + 32
// console.log(f)

// let prompt = require('prompt-sync')();

// let year = Number(prompt("enter a year "))
// if (year % 4===0 && year % 100 !=0 ) console.log("leap year")
//  else if (year%400==0) console.log("leap year")
// else console.log("no leap year")

// dicount

// let prompt = require('prompt-sync')();
// let num = Number(prompt("Enter amount"))
// let payamount = 0;

// if (num>0 && num<=5000){
//     payamount = num;
// }
// else if (num>5000 && num<= 7000){
//     payamount = num - (5*num)/100;
// }
// else if (num>7000 && num<=9000){
//     payamount = num - (10*num)/100;
// }
// else {
//     payamount= num - (20*num)/100;
// }

// console.log(payamount)

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a Number"))
// for(let i = 1; i<=n; i++) console.log(i)
// let prompt = require('prompt-sync')()
// let start = Number(prompt("enter a number"))
// let end = Number(prompt("enter a number"))
// if (start > end) console.log ([start,end] = [end,start])

// let sumeven = 0;
// let summodd = 0;

// for (let i = start ; i<=end ; i++){
//     if (i%2===0){
        
//         sumeven += i;
//     }else{
                
//                         summodd += i;

//     }
    
// }
// console.log(sumeven);
//     console.log(summodd);

// let prompt =  require('prompt-sync')();
// let n = Number(prompt("enter a number"))
// for(let i = 1 ; i<=n ; i++){
//     let ascii = 65 ;
//     for(let j = 1 ; j<=i ; j++){
//         process.stdout.write(String.fromCharCode(ascii) + " ")
//         ascii++
//     }
//     console.log()
// } 

let prompt =  require('prompt-sync')();
let n = Number(prompt("enter a number"))
for (let i = 1 ; i<= n ; i++){
    for (let j = (n+1-1) ; j>=i  ; j--){
         process.stdout.write( "* ")
    }
    console.log()
}