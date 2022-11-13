// function demo(input) {
//     let obj = {};
//     for (let i = 0; i < input.length; i++) {
//         let line = JSON.parse(input[i])
//         Object.assign(obj, line);
//     }
//     let tuples = Object.entries(obj) // arr of two el
//     tuples.sort((a, b) => a[0].localeCompare(b[0]))
//     for (let kvp of tuples) {
//         console.log(`Term: ${kvp[0]} => Definition: ${kvp[1]}`);
//     }
// }
// demo([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
// ])

function demo(input) {
    let dictionary = {}
    for (let i = 0; i < input.length; i++) {
        let el = JSON.parse(input[i]) // e OBJ
        let entry = Object.entries(el)[0] // array of arrays
        dictionary[entry[0]] = entry[1]
    }
    let sorted = {}
    for (let key of Object.keys(dictionary).sort((a, b) => a.localeCompare(b))) {
        sorted[key] = dictionary[key]
    }
    for (let term in sorted) {
        if (sorted.hasOwnProperty(term)) {
            let definition = sorted[term]
            console.log(`Term: ${term} => Definition: ${definition}`);
        }
    }
}
let result = demo([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])
console.log(result);