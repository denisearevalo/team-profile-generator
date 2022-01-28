// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github; 
    }
    getGithub(){
        return this.github
    }
    getRole(){
        // get role is to return Engineer?
        return "Engineer";
    }

}

module.exports = Engineer