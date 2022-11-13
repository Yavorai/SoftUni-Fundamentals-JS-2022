// добавя в края
// променя масива
function iPush(arr, element) {
    arr[arr.length] = element; // приема първо масива, после елемента
}
let names = ["pesho", "gosho", "stamat"];
console.log(names);
iPush(names, "Ivo");
console.log(names);