document.write("Exercise 6<br><br>")


function randomDice () {
    let results = [];
    let randomResult = 0
    while (randomResult != 6) {
        randomResult = Math.floor(Math.random()*6)+1
        results.push(randomResult)
    }
    return results
}
let results = randomDice()
let ul = document.createElement("ul");
for (let i = 0; i < results.length; i++) {
    ul.innerHTML += `<li>${results[i]}</li>`;
    document.body.appendChild(ul);
}

