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
// const arr = [35, 15, 22, 44, 46, 25, 47];
// function getOddNumbers(numbers) {
//     let oddNumbers = [];
//     for (const number of numbers) {
//         if (number % 2 !== 0) {
//             oddNumbers.push(number);
//         }
//     }
//     return oddNumbers;
// }
// const res = getOddNumbers(arr);
// console.log(res)

//* write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes
// function timeConverter(hours){
//     return hours * 60;
// }
// const minutes = timeConverter(14);
// console.log(`${minutes} minutes`)

//* write a function findLeapYear() that will take the array [2023, 2024, 2025, 2028, 2023] as the input parameter and will check if each year  is a leap. If a year is a leap year insert that year in a new array, return the new array and print the result.

// const leapYears = [2023, 2024, 2025, 2028, 2023];
// function isLeapYear(years) {
//     let leapYears = [];
//     for (let i = 0; i < years.length; i++) {
//         const year = years[i];
//         if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//             leapYears.push(year);
//         }
//     }
//     return leapYears;
// }
// const result = isLeapYear(leapYears);
// console.log(result);

//* ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }

//* ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।
// let i = 50;
// while (i <= 80) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
//     i++;
// }

//* ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 

// function converter(celcius) {
//     return (celcius * 9 / 5) + 32
// }
// const celcius = converter(20);
// console.log(celcius)

//* ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

function converter(f) {
    return (f - 32) * 5 / 9;
}
const fahrenheit = converter(103);
console.log(parseFloat(fahrenheit.toFixed(2)))