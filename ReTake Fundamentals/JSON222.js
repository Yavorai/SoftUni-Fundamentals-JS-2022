// JSON to OBJECT
// function demo(input) {
//     let parsedObj = JSON.parse(input)

//     for (let key of Object.keys(parsedObj)) {
//         console.log(`${key}: ${parsedObj[key]}`);
//     }
// }
// demo('{"name": "George", "age": 40, "town": "Sofia"}')

//============================================================================
// от обект към JSON
function demo(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor,
    }
    let asString = JSON.stringify(person)
    console.log(asString);
}
demo('George',
    'Jones',
    'Brown')