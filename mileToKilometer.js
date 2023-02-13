function mileToKilometers(mile){
    const kilometers = mile * 1.60934;
    return kilometers;
}
const result = mileToKilometers(12);
console.log(parseFloat(result.toFixed(4)))