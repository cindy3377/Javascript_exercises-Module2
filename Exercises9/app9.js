document.write("Exercise 9<br><br>")

let array = [2, 1, 5, 7, 4, 9, 10, 3, 6, 8];

function even(array) {
    let even_arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            even_arr.push(array[i]);
        }
    }
    document.write(`The even numbers array: ${even_arr}.`)
}
document.write(`The original array is: ${array}.<br>`)
even(array)
