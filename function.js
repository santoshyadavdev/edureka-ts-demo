"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(10, 50, 50));
const sub = function (num1, num2, num3 = 10) {
    return num1 * num2 * num3;
};
console.log(sub(50, 10));
// arrow function
const multiple = (num1, num2) => num1 * num2;
