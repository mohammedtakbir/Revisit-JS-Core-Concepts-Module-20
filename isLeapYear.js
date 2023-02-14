// function isLeapYear(year) {
//     if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
//         return `${year} is leap year`;
//     }
//     return `${year} is not leap year`;
// }
// const res = isLeapYear(1900);
// console.log(res)

//* check whether a year is leap year or not
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is leap year`;
    }
    return `${year} is not leap year`;
}
const result = isLeapYear(1960);
console.log(result)