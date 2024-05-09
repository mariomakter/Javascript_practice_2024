// function myFunction(p1,p2){
//     return p1 * p2;
// }

// let product = myFunction(2, 3);
// console.log(product);

function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit - 32);
}
let x = toCelsius(77);
let text = "the tempareture is  " + x + " celsius";
console.log(text);