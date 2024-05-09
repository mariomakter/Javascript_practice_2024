// Function to calculate the number of complete toy cars that can be made
function calculateToyCars(wheels, carBodies, figures) {
    // Calculate how many cars can be made based on the number of wheels (each car needs 4 wheels)
    const carsFromWheels = Math.floor(wheels / 4);

    // Calculate how many cars can be made based on the number of car bodies (each car needs 1 car body)
    const carsFromBodies = carBodies;

    // Calculate how many cars can be made based on the number of figures (each car needs 2 figures)
    const carsFromFigures = Math.floor(figures / 2);

    // The number of complete toy cars is the minimum of the above three calculations
    return Math.min(carsFromWheels, carsFromBodies, carsFromFigures);
}

// Prompt the user for input and calculate the result
const wheels = parseInt(prompt("Enter the number of wheels:"));
const carBodies = parseInt(prompt("Enter the number of car bodies:"));
const figures = parseInt(prompt("Enter the number of figures:"));

// Calculate the number of complete toy cars
const result = calculateToyCars(wheels, carBodies, figures);

// Print the result
console.log(`Number of complete toy cars: ${result}`);
