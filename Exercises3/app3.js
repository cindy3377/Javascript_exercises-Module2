document.write("Exercise 3<br><br>")

document.write("Name of six dogs:");
let dog_names = [];
for (let i = 0; i < 6; i++) {
    let dog_name = prompt("Enter the name of the dog:");
    dog_names.push(dog_name);
}


function showDogs() {
    var ul = document.createElement("ul");
    dog_names.sort().reverse()
    for (let i = 0; i < dog_names.length; i++) {
        ul.innerHTML += `<li>${dog_names[i]}</li>`;
    }
    return ul;
}

let ul = showDogs()
document.body.appendChild(ul);
