document.write("Exercise 2<br><br>");

let num_of_participants = parseInt(prompt("Enter the number of participants:"));
var ul = document.createElement("ul");

for (let i = 0; i < num_of_participants; i++) {
    let name_of_participant = prompt("Enter the name of the participant:");
    ul.innerHTML += `<li>${name_of_participant}</li>`;
}

document.body.appendChild(ul);