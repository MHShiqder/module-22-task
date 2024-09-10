// Write a function to convert temperature from Celsius to Fahrenheit.

function temp(a)
{
    return (a*(9/5))+32;
}

let celTemp=36.7;
let farTemp=temp(celTemp);
console.log(farTemp);