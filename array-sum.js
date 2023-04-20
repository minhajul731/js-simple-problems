function sumOfArray(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        sum = sum + element;
    }
    return sum;
}

let numbers = [10, 20, 30];
const result = sumOfArray(numbers);
console.log(result);