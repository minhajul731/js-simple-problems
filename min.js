// if find max number in compare multiple values use Math.min(number1, number2, number3)
function findSmall(number1, number2, number3) {
    let smallestNumber = Math.min(number1, number2, number3);
    return smallestNumber;
}

let firstNumber = 48;
let secondNumber = 4;
let thirdNumber = 5448;

const smallNumber = findSmall(firstNumber, secondNumber, thirdNumber);
console.log(smallNumber);