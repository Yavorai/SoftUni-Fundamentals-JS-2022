let obj = {
    name: "PEsho"
};
console.log(obj);
let copy = Object.assign({}, obj)
copy.age = 56
console.log(copy);