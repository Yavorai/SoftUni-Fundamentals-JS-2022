 // World Tour
//  function demo(input) {
//      {
//          //store initial string into result
//          // for each input line until travel
//          // determine command
//          //execute command with given arguments
//          //print current result

//          //print final result

//          //Add Stop
//          //--validate index 
//          //--insert given string into result

//          //Remove Stop
//          //--validate both indexes
//          //-remove part of the result from start to end (inclusive)
//          //Switch
//          //--replace all accurences of old string with new string
//      }
//      let actions = {
//          "Add Stop": add,
//          "Remove Stop": remove,
//          "Switch": swap,
//      }
//      let result = input.shift();
//      while (input[0] !== "Travel") {
//          let tokens = input.shift().split(":")
//          let command = tokens[0]
//          let action = actions[command]
//          action(tokens[1], tokens[2])
//              //  {
//              //      //console.log(action);
//              //      //[Function: Add Stop]
//              //      //[Function: Remove Stop]
//              //      //[Function: Switch]
//              //  }
//          console.log(result);
//      }
//      console.log("Ready for world tour! Planned stops: " + result);

//      function add(index, string) {
//          index = Number(index);
//          if (validate(index)) {
//              let left = result.substring(0, index)
//              let right = result.substring(index)
//              result = left + string + right
//          }
//      }

//      function remove(start, end) {
//          start = Number(start)
//          end = Number(end)
//          if (validate(start) && validate(end)) {
//              let left = result.substring(0, start)
//              let right = result.substring(end + 1)
//              result = left + right
//          }
//      }
//  string replace algorythm
        // function swap(oldString, newString){
        //     // check if old string is found
        //     //store index
        //     // take left part from 0 to index
        //     //take right part from index + oldString.length to end
        //     //assign to result left + new string + right
        //     //repeat search starting from (left + new string ).length
        //     let index = result.indexOf(oldString)
        //     while (index > -1){
        //         let left = result.substring(0,index)
        //         let right = result.substring(index + oldString.length)
        //         result = left + newString + right
        //         index+= newString.length
        //         index = result.indexOf(oldString, index)
        //     }
        // }

//      function swap(oldString, newString) {
//          // let pattern = new RegExp(oldString, "g")
//          // result = result.replace(pattern, newString)
//          while (result.includes(oldString)) {
//              result = result.replace(oldString, newString)
//                  //while (spell.includes(subStr1) !== false)
//              if (result.includes("")) {
//                  break
//              }

//          }
//      }


//      function validate(index) {
//          return (index >= 0) && (index < result.length)
//      }
//  }
//  demo([
//          'Hawai::Cyprys-Greece',
//          'Add Stop:7:Rome',
//          'Remove Stop:11:16',
//          'Switch:Hawai:Bulgaria',
//          'Travel'
//      ])
     //  demo([
     //      'Albania:Bulgaria:Cyprus:Deuchland',
     //      'Add Stop:3:Nigeria',
     //      'Remove Stop:4:8',
     //      'Switch:Albania: Azərbaycan',
     //      'Travel',
     //      ''
     //  ])

 //   //============================================================================
   // Destination Mapper

   function demo(text){
    let points = 0
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g
    // while there is a match
    //-- store destination name (second group)
    // -- find next match
    //calculate travel points
    //print
    let result = []
    let match = pattern.exec(text)
    while(match !== null) {

        result.push(match[2])
        points += match[2].length
        match = pattern.exec(text)
    }
    console.log("Destinations: " + result.join(", "));
    console.log("Travel Points: " + points);
   }
   demo("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
   console.log("-----------------");
   demo("ThisIs some InvalidInput")

 //============================================================================
//  Plant Discovery
//  {
//      // parse first part of input, create catalog
//      //-- determine how many elements of the input represent the catalog
//      //-- for each element of input create new catalog entry or update the existing entry
//      // parse second part of input, updating catalog according to commands
//      //-- for each element of input until the EXHIBITION perform given command
//      // sort
//      //-- convert obj to array
//      //-- pass compare function into sorting operation
//      //--return difference between plants rarity
//      //-- if rarity is same - return diff between plants average rating
//      // Rate
//      //-- parse parameters to determine plant name and given rating
//      //-- if the plant exists in the catalog, add given rating (as number)
//      // Update
//      // -- parse parameters to determine plant name and given rarity
//      // -- if the plant exists in the catalog update its rarity (as number)
//      // Reset
//      //-- if the plant exists in the catalog remove all ratings
//      // print
//  }

//  function demo(input) {
//      let actions = {
//          //  <- accArr      спестява if else или switch
//          Rate: rate,
//          Update: update, // долу където се вади командата - тя е стринг затова тук са като стрингове
//          Reset: reset,
//      };

//      let catalog = {};
//      let n = Number(input.shift());
//      for (let i = 0; i < n; i++) {
//          let [name, rarity] = input.shift().split("<->");

//          catalog[name] = {
//              rarity: Number(rarity),
//              ratings: [],
//              avgRating: 0, // средна стойност тук - за да не я правим всеки път наново
//          };
//      }

//      while (input[0] !== "Exhibition") {

//          let [command, params] = input.shift().split(": ");
//          let action = actions[command];
//          action(params); // тук се изпълняват функциите 
//      }

//      function rate(line) {
//          let [name, rating] = line.split(" - ");
//          if (catalog[name] !== undefined) {
//              let plant = catalog[name];
//              plant.ratings.push(Number(rating));

//              let total = 0;
//              for (let rating of plant.ratings) {
//                  total += rating;
//              }
//              plant.avgRating = total / plant.ratings.length;
//          } else {
//              console.log("error");
//          }
//      }

//      function update(line) {
//          let [name, rarity] = line.split(" - ");
//          if (catalog[name] !== undefined) {
//              let plant = catalog[name];
//              plant.rarity = Number(rarity);
//          } else {
//              console.log("error");
//          }
//      }

//      function reset(name) {
//          if (catalog[name] !== undefined) {
//              let plant = catalog[name];
//              plant.ratings.length = 0; // изтрива всички елементи от масива или цикъл с input.pop() или .shift()
//              plant.avgRating = 0;
//          } else {
//              console.log("error");
//          }
//      }

//      let sorted = Object.entries(catalog).sort(comparePlants); { // console.log(sorted);
//          // [
//          //     [ 'Arnoldii', { rarity: 4, ratings: [], avgRating: 0 } ],
//          //     [ 'Woodii', { rarity: 5, ratings: [Array], avgRating: 7.5 } ],
//          //     [ 'Welwitschia', { rarity: 2, ratings: [Array], avgRating: 7 } ]
//          //   ]

//          //console.log(sorted[0]);       [ 'Arnoldii', { rarity: 4, ratings: [], avgRating: 0 } ]
//          //console.log(sorted[0][0]);    Arnoldii
//          //console.log(sorted[0][1]);    { rarity: 4, ratings: [], avgRating: 0 }
//      }

//      function comparePlants(a, b) {
//          // console.log(a[1].rarity);
//          // console.log(b[1].rarity);

//          let rarityA = a[1].rarity
//          let rarityB = b[1].rarity

//          let ratingA = a[1].avgRating
//          let ratingB = b[1].avgRating

//          return (rarityB - rarityA) || (ratingB - ratingA)
//      }

//      console.log("Plants for the exhibition:");
//      for (let [name, plant] of sorted) {
//          console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`);
//      }
//  }
//  demo([
//      "3",
//      "Arnoldii<->4",
//      "Woodii<->7",
//      "Welwitschia<->2",
//      "Rate: Woodii - 10",
//      "Rate: Welwitschia - 7",
//      "Rate: Arnoldii - 3",
//      "Rate: Woodii - 5",
//      "Update: Woodii - 5",
//      "Reset: Arnoldii",
//      "Exhibition",
//  ]);

//  demo([
//      '2',
//      'Candelabra<->10',
//      'Oahu<->10',
//      'Rate: Oahu - 7',
//      'Rate: Candelabra - 6',
//      'Exhibition'
//  ])