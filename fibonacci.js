/* const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); */

function fibonacchiSeries(num) {
    if (typeof num != "number") {
        return 'Please enter a number';
    }
    else if (num < 2) {
        return 'Please enter a number which is gretar than 1';
    }
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fibonacchiNumber = "-1";
const fibo = fibonacchiSeries(fibonacchiNumber);
console.log(fibo);
