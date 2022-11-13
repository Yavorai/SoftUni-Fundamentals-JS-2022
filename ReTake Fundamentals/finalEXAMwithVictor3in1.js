// // The imitation Game
// function demo(input) {
//     let result = input.shift()

//     while (input[0] !== "Decode") {
//         let tokens = input.shift().split("|")
//         let command = tokens[0]
//         if (command === "Move") {
//             let index = Number(tokens[1])
//             let left = result.substring(0, index)
//             let right = result.substring(index)
//             result = right + left

//         } else if (command === "Insert") {
//             let index = Number(tokens[1])
//             let left = result.substring(0, index)
//             let right = result.substring(index)
//             result = left + tokens[2] + right

//         } else if (command === "ChangeAll") {
//             result = result.split(tokens[1]).join(tokens[2])
//                 // let pattern = new RegExp(tokens[1], "g")
//                 // result = result.replace(pattern, tokens[2]) // не минава в judge 
//         }
//     }
//     console.log(result);
// }
// demo(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])
// demo([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode'
// ])

// //=============================================

// Ad Astra
function demo(text) {
    let total = 0;
    let result = []

    let pattern = /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g
    let match = pattern.exec(text)



    while (match !== null) {
        //console.log(match);  на индекси      2 , 3  и 4  e това което ни трябва
        let name = match[2]
        let date = match[3]
        let calories = Number(match[4])

        total += calories
        result.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`)

        match = pattern.exec(text)
    }

    let days = Math.floor(total / 2000)
    console.log(`You have food to last you for: ${days} days!`);

    for (let line of result) {
        console.log(line);
    }

}
demo([
        '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])
    // demo([
    //     '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
    // ])

//============================================

// The Pianist
// function demo(input) {
//     {
//         // parse initial catalog 
//         //  -- determine number of initial pieces
//         // -- for the next n lines, parse input and store piece in catalog

//         // parse commands
//         // -- for each line until STOP 
//         // -- determine command
//         // execute operations, using given parameters

//         // sort catalog
//         // -- convert OBJ to ARRAY
//         // -- sort Array lexicographical name song then name composer

//         // print result
//     }
//     let catalog = {}
//     let n = Number(input.shift())

//     for (let i = 0; i < n; i++) {
//         let [name, composer, key] = input.shift().split("|")
//         catalog[name] = {
//             composer,
//             key
//         }
//     }

//     while (input[0] !== "Stop") {
//         let tokens = input.shift().split("|")
//         let command = tokens[0]
//         let name = tokens[1]
//         if (command === "Add") {
//             if (catalog[name] !== undefined) {
//                 console.log(`${name} is already in the collection!`);
//             } else {
//                 catalog[name] = {
//                     composer: tokens[2],
//                     key: tokens[3],
//                 };
//                 console.log(`${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`);
//             }
//         } else if (command === "Remove") {
//             if (catalog[name] === undefined) { //  или catalog.hasOwnProperty(name) === false
//                 console.log(`Invalid operation! ${name} does not exist in the collection.`);
//             } else {
//                 delete catalog[name]
//                 console.log(`Successfully removed ${name}!`);
//             }
//         } else if (command === "ChangeKey") {
//             if (catalog[name] === undefined) {
//                 console.log(`Invalid operation! ${name} does not exist in the collection.`);
//             } else {
//                 catalog[name].key = tokens[2]
//                 console.log(`Changed the key of ${name} to ${tokens[2]}!`);
//             }
//         }
//     }

//     let sorted = Object.entries(catalog).sort((a, b) => {
//         // console.log(a);
//         // console.log(b);
//         let nameA = a[0];
//         let nameB = b[0];

//         let composerA = a[1].composer
//         let composerB = b[1].composer

//         return nameA.localeCompare(nameB) || composerA.localeCompare(composerB)
//     })

//     for (let [name, piece] of sorted) {
//         console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
//     }
// }
// demo([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ])
// console.log("----------------------------------------------------");
// demo([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
//   ])

//=====================================================================

// The Pianist with functions

// function demo(input) {
//     {
//         // parse initial catalog 
//         //  -- determine number of initial pieces
//         // -- for the next n lines, parse input and store piece in catalog

//         // parse commands
//         // -- for each line until STOP 
//         // -- determine command
//         // execute operations, using given parameters

//         // sort catalog
//         // -- convert OBJ to ARRAY
//         // -- sort Array lexicographical name song then name composer

//         // print result
//     }
//     let catalog = {}
//     let actions = {
//         "Add": add,
//         "Remove": remove,
//         "ChangeKey": changeKey,
//     }

//     let n = Number(input.shift())

//     for (let i = 0; i < n; i++) {
//         let [name, composer, key] = input.shift().split("|")
//         catalog[name] = {
//             composer,
//             key
//         }
//     }

//     while (input[0] !== "Stop") {
//         let tokens = input.shift().split("|")
//         let command = tokens[0]
//         let name = tokens[1]

//         let action = actions[command]
//         action(name, tokens[2], tokens[3])
//     }

//     let sorted = Object.entries(catalog).sort(comparePieces)

//     function comparePieces(a, b) {
//         let nameA = a[0];
//         let nameB = b[0];

//         let composerA = a[1].composer
//         let composerB = b[1].composer

//         return nameA.localeCompare(nameB) || composerA.localeCompare(composerB)
//     }

//     function add(name, tokens) {
//         if (catalog[name] !== undefined) {
//             console.log(`${name} is already in the collection!`);
//         } else {
//             catalog[name] = {
//                 composer: tokens[2],
//                 key: tokens[3],
//             };
//             console.log(`${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`);
//         }
//     }

//     function remove(name) {
//         if (catalog[name] === undefined) { //  или catalog.hasOwnProperty(name) === false
//             console.log(`Invalid operation! ${name} does not exist in the collection.`);
//         } else {
//             delete catalog[name]
//             console.log(`Successfully removed ${name}!`);
//         }
//     }

//     function changeKey(name, tokens) {
//         if (catalog[name] === undefined) {
//             console.log(`Invalid operation! ${name} does not exist in the collection.`);
//         } else {
//             catalog[name].key = tokens[2]
//             console.log(`Changed the key of ${name} to ${tokens[2]}!`);
//         }
//     }

//     for (let [name, piece] of sorted) {
//         console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
//     }
// }
// demo([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ])
// console.log("----------------------------------------------------");
// demo([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
//   ])