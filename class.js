class person{
    firstName = "Maria";
    lastName = "Islam";
    getName(){
        return ('My name is: '+this.firstName+" "+this.lastName);
    }
}
let personObj = new person();
console.log(personObj.getName());