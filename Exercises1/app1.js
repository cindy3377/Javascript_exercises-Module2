document.write("Exercise 1<br><br>");

let num1 = prompt("Enter the first number:")
let num2 = prompt("Enter the second number:")
let num3 = prompt("Enter the third number:")
let num4 = prompt("Enter the fourth number:")
let num5 = prompt("Enter the fifth number:")

const numbers = [num1, num2, num3, num4, num5];

for (let i = numbers.length - 1; i >= 0; i--) {
    document.write(numbers[i]);
}


