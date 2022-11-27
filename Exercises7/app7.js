document.write("Exercise 7<br><br>")

let max = parseInt(prompt("Enter maximum number on dice:"));
const ul = document.createElement("ul");

function randomDice(max) {
    let randomResult = 0;
    randomResult = Math.floor(Math.random()*max)+1;
    return randomResult;
}

let randomResult = randomDice(max)
while (randomResult < max){
    randomResult = randomDice(max);
    ul.innerHTML += `<li>The random result is ${randomResult}</li>`;
}

document.body.appendChild(ul);
