// if need value is absulate use Math.abs()
/*
let number = -5;
let output = Math.abs(number);
console.log(output);
*/

// if need to value is big intiger number use Math.ceil()
/*
let number = 3.42587;
let output = Math.ceil(number);
console.log(output);
*/

// if need to value is small intiger number use Math.floor()
/*
let number = 3.42587;
let output = Math.floor(number);
console.log(output);
*/

// if need to value is intiger number use Math.round()
/* 
let number = 3.5;
let output = Math.round(number);
console.log(output);
*/

// if need to value 0 to 1  random number use Math.random()
/* 
let output = Math.random() * 6;
let random = Math.ceil(output);
console.log(random);
*/
for (let i = 0; i <= 20; i++) {
    let output = Math.random() * 6;
    let random = Math.round(output);
    console.log(random);
}


