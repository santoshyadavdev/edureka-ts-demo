
import { Department, Address } from './interfaces';


class Base<T> {
    data : T;
}

class Employee extends Base<Address> implements Department {
    private id: number;
    name: string;
    age: number;

    set empId(id: number) {
        this.id = id;
    }

    get empId(): number {
        return this.id;
    }

    constructor(id: number) {
        // this.id = id;
        super();
    }
    getDepartment(): string {
        throw new Error('Method not implemented.');
    }
    addDepartment(): void {
        throw new Error('Method not implemented.');
    }

    getName(): string {
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
    constructor(id: number) {
        super(id);
    }

    getName() : string {
        return `Welcome ${this.name} your age is ${this.age}`;
    }
}

let newManager = new Manager(50);
newManager.empId = 50;
newManager.name = 'Anoop';
newManager.age = 24;

console.log(newManager.getName());

