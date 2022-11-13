function solve(input) {
    let obj = {};

    for (let i = 0; i < input.length; i++) {
        let curr = JSON.parse(input[i]);
        Object.assign(obj, curr);
    }
    Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach((a) => console.log(`Term: ${a[0]} => Definition: ${a[1]}`));
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);