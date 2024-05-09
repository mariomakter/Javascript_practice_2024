const person={
    firstName : "Maria",
    lastName :'Islam',
    age : 25,
    email: 'maria@gmail.com',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
        // return person.firstName+' '+person.lastName;
    }
}
console.log(person.firstName);
console.log(person.fullName);
/*
console.log(typeof "s");
console.log(-(10-2));
console.log("Garnet" != "Ruby");
console.log("5" -1);
console.log("5" + 1);
console.log("five"*2);
console.log(false == 0);
console.log(0 ||100);
console.log(0 ?? 100);
console.log(null || 100);

let mood = "light";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;

console.log(luigisDebt);

let one = 1, two = 2;
console.log(one+two);

var name = "Adya";
const greeting = "Hello ";
console.log(greeting + name);


console.log(Math.max(2,4));
console.log(Math.min(2,4)+100);

let theNumber = Number(prompt("Enter a number"));
console.log("your number is the square root of" + theNumber*theNumber);
*/