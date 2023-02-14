//* problem-01
//? write a function to sum the array elements
// const arr = [5, 7, 8, 10, 45, 30];
// function sum(arr){
//     let i = 0;
//     let sum = 0;
//     while(i < arr.length){
//         const arrayValue = arr[i];
//         sum += arrayValue;
//         i++;
//     }
//     return sum;
// }
// const res = sum(arr);
// console.log(res)

//* problem-02

//? Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers
// const arr = [5, 7, 8, 10, 45, 30];
// const findOddSum = (numbers) => {
//     let oddSum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const numbers = arr[i];
//         if (numbers % 2 !== 0) {
//             oddSum += numbers
//         }
//     }
//     return oddSum;
// }

// const res = findOddSum(arr);
// console.log(res)

//* write a function to get odd numbers from an array
const arr = [35, 15, 22, 44, 46, 25, 47];
function getOddNumbers(numbers) {
    let oddNumbers = [];
    for (const number of numbers) {
        if (number % 2 !== 0) {
            oddNumbers.push(number);
        }
    }
    return oddNumbers;
}
const res = getOddNumbers(arr);
console.log(res)








