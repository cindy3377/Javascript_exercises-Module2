document.write("Exercise 5<br><br>")

let num = parseInt(prompt("Enter the number:"));
let nums = [num];
let isDuplicated = false

while (!isDuplicated) {
    var ul = document.createElement("ul");
    num = parseInt(prompt("Enter the number:"));
    if (nums.indexOf(num) == -1) {
        nums.push(num);
        nums.sort((a, b) => a-b)
    } else {
        document.write(`The number ${num} has already been entered.`)
        isDuplicated = true
        ul.innerHTML += `<li>${nums}</li>`;
        document.body.appendChild(ul);
    }
}
