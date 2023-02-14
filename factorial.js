//* write a function to get factorial in reverse way
function factorial(num) {
    let i = num;
    let multiply = 1;
    while (i >= 1) {
        multiply *= i;
        i--;
    };
    return multiply;
    
}
const res = factorial(9);
console.log(minutes);