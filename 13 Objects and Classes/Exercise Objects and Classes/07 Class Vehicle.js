class Vehicle {
    constructor(type,model,parts,fuel){
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;

        this.parts.quality = parts.power * parts.engine;
    }
    drive(fuelLoss){
        this.fuel -= fuelLoss
    }
  }
  let parts = { engine: 6, power: 100 };
  let vehicle = new Vehicle('a', 'b', parts, 200);
  vehicle.drive(100);
  console.log(vehicle.fuel);
  console.log(vehicle.parts.quality);
  
  //=============================================

  class Vehicle {
    constructor(type, model, {engine, power}, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine,
            power,
            quality: engine * power
        };
        this.fuel = Number(fuel);
    }
    drive(fuelLoss) {
        return this.fuel -= fuelLoss
    }
}

//=============================================
let parts = { engine: 6, power: 100 };

class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
        this.parts.quality = parts.engine * parts.power
    }
    drive(value){
        this.fuel -= value
    }
}

let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);

console.log(vehicle.fuel);
console.log(vehicle.parts.quality);