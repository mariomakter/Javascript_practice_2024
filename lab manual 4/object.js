const person = {
    firstName : "Mariom",
    lastName : "Akter",
    age:24,
    eyecolor: "black",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person);
console.log(person.firstName);
console.log(person.fullName());