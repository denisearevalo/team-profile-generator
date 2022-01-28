// TODO: Write code to define and export the Employee class
// The first class is an `Employee` parent class with the following properties and methods:
class Employee {
    constructor(name, id, email){
        this.name=name;
        this.id=id;
        this.email=email;
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        // get role is to return Employee?
        return "Employee"
    }
}

module.exports = Employee
