document.write("Exercise 8<br><br>")

let str_arr = ["Johnny", "DeeDee", "Joey", "Marky"];
let result = '';
function concat(str_arr) {
    for (let i = 0; i < str_arr.length; i++) {
        result = result.concat(str_arr[i]);
    }
    document.write(`The concatenated array is: ${result}.`);
}
concat(str_arr);

