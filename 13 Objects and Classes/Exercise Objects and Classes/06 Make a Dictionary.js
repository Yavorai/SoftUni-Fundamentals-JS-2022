// function demo(arr){
//     let dict = {}

//     for(let line of arr){
//         let currObj = JSON.parse(line)
//         let entries = Object.entries(currObj)
//         let [term, description] = [entries[0][0], entries[0][1]]
//         dict[term] = description
//     }
//     return getOutput(dict)

//     function getOutput(obj){
//         let keys = Object.keys(obj)
//         keys.sort((a,b) => a.localeCompare(b))

//         let output = []
//         for(let key of keys){
//             output.push(`Term: ${key} => Definition: ${obj[key]}`)
//         }
//         return output.join("\n")
//     }

// }
// console.log(demo([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
//     ]));

    //=====================================


    // function makeDictionary(array) {
    //    let myObj = []

    //    for(let input of array){
    //        let current = JSON.parse(input)
    //        let entries = Object.entries(current)

    //        for(let [key, value] of entries){
    //            let index = myObj.findIndex(x => x.term === key)
    //            if(index > -1){
    //                myObj[index].definition  = value
    //            }else{
    //                myObj.push({
    //                    term: key,
    //                    definition: value,
    //                })
    //            }
    //        }
    //    }
    //    myObj.sort((a,b) => a.term.localeCompare(b.term))
    //    for(let print of myObj){
    //     console.log(`Term: ${print.term} => Definition: ${print.definition}`);
    //    }
    // }
    // makeDictionary([
    //     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    //     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    //     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    //     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    //     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    //     '{"Coffee":"TESTER"}'
    // ]
    // );

    //===================================

    function dictionary(array) {
        let dictionary = {}

        for(let line of array){
            let obj = JSON.parse(line)
            let term = Object.keys(obj)
            dictionary[term] = obj[term]
        }
        let sorted = Object.keys(dictionary).sort((a,b) => a.localeCompare(b))

        for(let term of sorted){
            console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
        }
      }
      dictionary([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
      ]
      )


      //=============================


      function dictionary(input){
        let dict = {};
        for (let element of input){
            let obj = JSON.parse(element);
            dict = Object.assign(dict, obj);        
        } 
            
        let sortedKeys = Object.keys(dict);
        sortedKeys.sort((a, b) => a.localeCompare(b));   
         
        for (let term of sortedKeys) {
            let definition = dict[term];             
            console.log(`Term: ${term} => Definition: ${definition}`);
        }
      }
      dictionary([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
      ]
      )