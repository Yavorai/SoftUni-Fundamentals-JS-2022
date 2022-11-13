let map = new Map();

map.set("Tim", "33333333")
map.set("Bob", "111111111111")
map.set("Peter", "2222222")
    // for (let entry of map) {
    //     console.log(entry);
    // }
    // for (let [name, phone] of map) {
    //     console.log(name, phone);
    // }
let keys = [...map.keys()] // entries , values    ... взима всичко и го пръска на отделни елементи
console.log(keys.join(" ")); // [ 'Tim', 'Bob', 'Peter' ]
//====================================================

function demo(input) {
    let storage = new Map();
    for (let line of input) {
        let [product, quantity] = line.split(" ")
        quantity = Number(quantity)

        if (storage.has(product)) {
            let existing = storage.get(product)
            storage.set(product, existing + quantity)
        } else {
            storage.set(product, quantity)
        }
        // или по кратко 

        // if(storage.has(product)) {
        // quantity += storage.get(product)
        // storage.set(product, quantity)
        // }

    }
    for (let [product, quantity] of storage) {
        console.log(`${product} -> ${quantity}`);
    }
}
demo(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
])