// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school=school; 
    }
    getSchool(){
        return this.school
    }
    getRole(){
        // get role is to return Intern?
        return "Intern"
    }
}

module.exports = Intern