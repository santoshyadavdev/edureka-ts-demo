
function add(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(10, 50, 50));

const sub = function (num1: number, num2: number, num3 = 10): number {
    return num1 * num2 * num3;
}

console.log(sub(50, 10));

// arrow function
const multiple = (num1: number, num2: number) => num1 * num2;

