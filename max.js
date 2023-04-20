// if find max number in compare multiple values use Math.max(number1, number2, number3)
/* let number1 = 45454;
let number2 = 516544;
let number3 = 548787;

const max = Math.max(number1, number2, number3);
console.log(max); */

function findLargest(number1, number2, number3) {
    let largestNumber = Math.max(number1, number2, number3);
    return largestNumber;
}

let firstNumber = 485454;
let secondNumber = 4878745;
let thirdNumber = 544878745;

const largNumber = findLargest(firstNumber, secondNumber, thirdNumber);
console.log(largNumber);