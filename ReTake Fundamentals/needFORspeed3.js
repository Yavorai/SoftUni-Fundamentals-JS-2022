function demo(input) {
  let numberOfCars = input.shift();
  let cars = {};
  for (let i = 0; i < numberOfCars; i++) {
    let [carModel, mileage, fuel] = input.shift().split("|");
    mileage = Number(mileage);
    fuel = Number(fuel);

    if (!cars.hasOwnProperty(carModel)) {
      cars[carModel] = { mileage: mileage, fuel: fuel };
    } else {
      cars[carModel] = {
        mileage: cars[carModel].mileage + mileage,
        fuel: cars[carModel].fuel + fuel,
      };
    }
  }
  let line = input.shift();
  while (line !== "Stop") {
    let tokens = line.split(" : ");

    if (tokens[0] === "Drive") {
      cars = drive(tokens, cars);
    } else if (tokens[0] === "Refuel") {
      cars = refuel(tokens, cars);
    } else if (tokens[0] === "Revert") {
      cars = revert(tokens, cars);
    }
    line = input.shift();
  }
  function drive(arr, obj) {
    let [model, distance, fuel] = arr.slice(1);
    distance = Number(distance)
    fuel = Number(fuel)

    if(obj[model].fuel < fuel) {
        console.log('Not enough fuel to make that ride');
        return obj
    }
    obj[model].fuel -= fuel
    obj[model].mileage += distance
    console.log(`${model} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

    if(obj[model].mileage >= 100000){
        delete obj[model]
        console.log(`Time to sell the ${model}!`);
    }
    return obj
  }
  function refuel(arr, obj) {
        let [ model, fuel] = arr.slice(1);
        fuel = Number(fuel)
        let totalFuel = obj[model].fuel

        if(obj[model].fuel + fuel >75){
            obj[model].fuel = 75
            console.log(`${model} refueled with ${75 - totalFuel} liters`);
        }else{
            obj[model].fuel += fuel
            console.log(`${model} refueled with ${fuel} liters`);
        }
        return obj
  }
  function revert(arr, obj) {
      let [model, kilometers] = arr.slice(1)
      kilometers = Number(kilometers)

      obj[model].mileage -= kilometers
      if(obj[model].mileage < 10000){
          obj[model].mileage = 10000
          return obj
      }
      console.log(`${model} mileage decreased by ${kilometers} kilometers`);
      return obj
  }

  let sorted = Object.entries(cars)
  .sort((a,b) => {
    //   if(a[1].mileage === b[1].mileage){
    //       return
    //   }
     return b[1].mileage - a[1].mileage || a[0].localeCompare(b[0])
  })
  .forEach(kvp => {
    console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
  })
}
demo([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
console.log("-------------------");
//   demo([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
//   ])

//----------------------------------

//   function demo(input){
//     let cars = {};
//     let numberOfCars = Number(input.shift());

//     for(let i = 0; i < numberOfCars; i++){
//         let [model, mileage, fuel] = input.shift().split("|");
//         mileage = Number(mileage);
//         fuel = Number(fuel);

//         if(!cars.hasOwnProperty(model)){
//             cars[model] = {mileage, fuel};
//         } else {
//             cars[model] = {
//                 mileage: cars[model].mileage + mileage,
//                 fuel: cars[model].fuel + fuel
//             }
//         }
//     }

//     let command = input.shift();
//     while(command !== 'Stop'){
//         let curCommand = command.split(" : ");

//         switch(curCommand[0]){
//             case 'Drive' :
//                 cars = driveCase(curCommand, cars);
//                 break;
//             case 'Refuel' :
//                 cars = refuelCase(curCommand, cars);
//                 break;
//             case 'Revert' :
//                 cars = revertCase(curCommand, cars);
//                 break;
//         }

//         command = input.shift();
//     }

//     Object.entries(cars)
//         .sort((a, b) => {
//             if(a[1].mileage == b[1].mileage){
//                 return a[0].localeCompare(b[0]);
//             }

//             return b[1].mileage - a[1].mileage;
//         })
//         .forEach(kvp => {
//             console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
//         })

//     function driveCase(arr, obj){
//         let [model, distance, fuel] = arr.slice(1);
//         distance = Number(distance);
//         fuel = Number(fuel);

//         if(obj[model].fuel < fuel){
//             console.log('Not enough fuel to make that ride');
//             return obj;
//         }
//         obj[model].fuel -= fuel;
//         obj[model].mileage += distance;
//         console.log(`${model} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

//         if(obj[model].mileage >= 100000){
//             delete obj[model];
//             console.log(`Time to sell the ${model}!`);
//         }
//         return obj;
//     }

//     function refuelCase(arr, obj){
//         let[model, fuel] = arr.slice(1);
//         fuel = Number(fuel);
//         let totalFuel = obj[model].fuel;

//         if(obj[model].fuel + fuel > 75){
//             obj[model].fuel = 75;
//             console.log(`${model} refueled with ${75 - totalFuel} liters`);
//         } else {
//             obj[model].fuel += fuel;
//             console.log(`${model} refueled with ${fuel} liters`);
//         }

//         return obj;
//     }

//     function revertCase(arr, obj){
//         let [model, kilometers] = arr.slice(1);
//         kilometers = Number(kilometers);

//         obj[model].mileage -= kilometers;

//         if(obj[model].mileage < 10000){
//             obj[model].mileage = 10000;
//             return obj;
//         }

//         console.log(`${model} mileage decreased by ${kilometers} kilometers`);
//         return obj;
//     }

// }
// demo([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
//   ])

//   demo([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
//   ])

//------------------- var 3 Ivo

function demo(input) {
    let cars = {}
    let carsCount = Number(input.shift())
    for (let i = 0; i < carsCount; i++) {
        let [name, mileage, fuel] = input.shift().split("|")
        mileage = Number(mileage)
        fuel = Number(fuel)
        cars[name] = { mileage: mileage, fuel: fuel }
    }
    let commandLine = input.shift()
    while (commandLine !== "Stop") {
        let [command, carName, param1, param2] = commandLine.split(" : ")
        switch (command) {
            case "Drive":
                {
                    let distance = Number(param1)
                    let fuel = Number(param2)
                    if (cars[carName].fuel >= fuel) {
                        cars[carName].mileage += distance
                        cars[carName].fuel -= fuel
                        console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                        if (cars[carName].mileage >= 100000) {
                            delete cars[carName]
                            console.log(`Time to sell the ${carName}!`);
                        }
                    } else {
                        console.log("Not enough fuel to make that ride");
                    }
                    break
                }
            case "Refuel":
                let fuel = Number(param1)
                let oldFuel = cars[carName].fuel // за да не се загуби колко е било
                    //cars[carName].fuel = Math.min(75,cars[carName].fuel + fuel)
                if (oldFuel + fuel > 75) {
                    cars[carName].fuel = 75
                    console.log(`${carName} refueled with ${75 - oldFuel} liters`);
                } else {
                    cars[carName].fuel += fuel
                    console.log(`${carName} refueled with ${fuel} liters`);
                }
                break
            case "Revert":
                let kilometers = Number(param1)
                if (cars[carName].mileage - kilometers < 10000) {
                    cars[carName].mileage = 10000
                } else {
                    cars[carName].mileage -= kilometers
                    console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
                }
                break
        }
        commandLine = input.shift()
    }
    let carEntries = Object.entries(cars)
    let sortedCars = carEntries.sort((a, b) => {
        if (b[1].mileage === a[1].mileage) {
            return a[0].localeCompare(b[0]) // по име по key 
        } else {
            return b[1].mileage - a[1].mileage
        }
    })
    for (let kvp of sortedCars) {
        console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
    }
}
