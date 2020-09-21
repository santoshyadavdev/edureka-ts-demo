"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as address from './interfaces';
let fname = 10;
let lname;
let age;
age = 10;
let population;
let isValid;
console.log(isValid);
// fname=10;
// let employee : any;
// employee = 10;
// employee = 'name';
// employee = [];
// let empList : string[];
let empList;
empList = ['1', '10', '45'];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let color = Color.Blue;
// function swap(num1: number, num2: number): [number, number] {
//     return [num2, num1];
// }
// let result: [number, number] = swap(10, 5);
// console.log(result[0]);
// console.log(result[1]);
// result = [10,5];
// console.log(num1);
// console.log(num2);
// api -> employee, orders
// function getEmpInfo(params:type) {
//      return [emp, order];
// }
let newAddres = {
    addr1: 'Pune',
    city: 'Mumbai',
    pin: '4564'
};
// let newcity = newAddres.city;
// let newpin = newAddres.pin;
// object destructuring
let { addr1: newcity, pin } = newAddres;
console.log(newcity, pin);
// newAddres.pin = '65454'
newAddres = { ...newAddres, pin: 'fdshfghj' };
let deptList = [
    { addr1: 'test', pin: '54654', city: 'Mumbai' },
    { addr1: 'Banglore', pin: '54654', city: 'Delhi' },
    { addr1: 'Banglore', pin: '54654', city: 'Delhi' },
    { addr1: 'Banglore', pin: '54654', city: 'Delhi' },
    { addr1: 'Banglore', pin: '54654', city: 'Delhi' }
];
// array destructuring
let [dept1, dept2, ...restDept] = deptList;
console.log(dept1, dept2);
console.table(restDept);
// deptList.push()
// spread operator
deptList = [...deptList, { addr1: 'Banglore', pin: '54654', city: 'Delhi' }];
let unionType;
unionType = 'dfgsdg';
