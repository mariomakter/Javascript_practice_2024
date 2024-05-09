function calculateToyCars(wheels, carBodies, figure){
    const carsFromWheels = Math.floor(wheels/4);

    const carsFromBodies = carBodies

    const carFromFigures = Math.floor(figure/2);

    const completeToyCars = Math.min(carsFromWheels,carsFromBodies, carFromFigures)

    return completeToyCars

}
const wheels = parseInt(prompt("Enter the number of wheels: "));
const carBodies = parseInt(prompt("Enter the number of Car bodies: "));
const figures = parseInt(prompt("Enter the number of figures"));

const result = calculateToyCars(wheels, carBodies, figures);
console.log(result);