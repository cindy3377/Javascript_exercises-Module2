document.write("Exercise 2<br><br>");

let num_of_participants = parseInt(prompt("Enter the number of participants:"));

let names = [];
for (let i = 0; i < num_of_participants; i++) {
    let name_of_participant = prompt("Enter the name of the participant:");
    names.push(name_of_participant);
}

function showNames() {
    var ul = document.createElement("ul");
    names.sort();
    for (let i = 0; i < names.length; i++) {
        ul.innerHTML += `<li>${names[i]}</li>`;
    }
    return ul;
}

let ul = showNames()
document.body.appendChild(ul);