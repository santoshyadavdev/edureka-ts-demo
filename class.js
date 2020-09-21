"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
}
class Employee extends Base {
    constructor(id) {
        // this.id = id;
        super();
    }
    set empId(id) {
        this.id = id;
    }
    get empId() {
        return this.id;
    }
    getDepartment() {
        throw new Error('Method not implemented.');
    }
    addDepartment() {
        throw new Error('Method not implemented.');
    }
    getName() {
        // return 'Welcome ' + this.name + ' your emp id is ' + this.id;
        return `Welcome ${this.name} your emp id is ${this.id}`;
    }
}
let newEmp = new Employee(10);
newEmp.empId = 10;
newEmp.name = 'Ansad';
console.log(newEmp.getName());
console.log(newEmp);
newEmp.data;
class Manager extends Employee {
    constructor(id) {
        super(id);
    }
    getName() {
        return `Welcome ${this.name} your age is ${this.age}`;
    }
}
let newManager = new Manager(50);
newManager.empId = 50;
newManager.name = 'Anoop';
newManager.age = 24;
console.log(newManager.getName());
