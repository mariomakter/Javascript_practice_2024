class Person{
    constructor(){
        console.log("I am constructor");
    }
    firstName = "MD";
    lastName = "Abdullah";
    getName(){
        return('My name is: '+this.firstName+" "+this.lastName);
    }
}
let personObj = new Person
console.log(personObj.getName());