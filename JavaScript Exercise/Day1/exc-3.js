let today = new Date();

let dd = today.getDate(); // Corrected to call getDate() as a function
let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

if (dd < 10) {
    dd = `0${dd}`;
}

if (mm < 10) {
    mm = `0${mm}`;
}

today = `${mm}-${dd}-${yyyy}`;
console.log(today);
