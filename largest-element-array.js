// largest number
/* function largestElement(numbers) {
    let largestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largestNumber) {
            largestNumber = element;
        }
    }
    return largestNumber;
}

const ages = [2, 18, 50, 45, 7, 46, 1002, 8, 7, 20, 90];
const oldest = largestElement(ages);
console.log(oldest); */

// smallest number
function smallestElement(numbers) {
    let smallestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < smallestNumber) {
            smallestNumber = element;
        }
    }
    return smallestNumber;
}

const ages = [2, 18, 50, 45, 7, 46, 1002, 8, 7, 20, 90];
const smallest = smallestElement(ages);
console.log(smallest);