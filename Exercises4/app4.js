document.write("Exercise 4<br><br>")

let num = parseInt(prompt("Enter the number:"));
let nums = [num];


while (num != 0) {
    num = parseInt(prompt("Enter the number:"));
    nums.push(num);
}

function showNums() {
    var ul = document.createElement("ul");
    nums.sort((a, b) => a-b).reverse();
    for (let i = 0; i < nums.length; i++) {
        ul.innerHTML += `<li>${nums[i]}</li>`;
    }
    return ul;
}

let ul = showNums();
document.body.appendChild(ul);
