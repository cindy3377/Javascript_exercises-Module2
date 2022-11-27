document.write("Exercise 6<br><br>")

/*Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters. Write a main program that rolls the dice until the result is 6. The main program should print out the result of each roll in an unordered list (<ul>). (2p)
*/
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

