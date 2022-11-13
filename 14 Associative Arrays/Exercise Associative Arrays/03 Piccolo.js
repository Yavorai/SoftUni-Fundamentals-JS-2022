function demo(arr){
        let parking = []

        for(let line of arr){
            let [command, car] = line.split(", ")
            
            if(command === "IN"){
                if(!parking.includes(car)){
                    parking.push(car)
                }
            }else{
                if(parking.includes(car)){
                    parking.splice(parking.indexOf(car), 1)
                }
            }
        }
        let sorted = parking.sort((a,b) => a.localeCompare(b))
        if(sorted.length > 0){
            console.log(parking.join("\n"));
        }else{
            console.log("Parking Lot is Empty");
        }
}
demo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])
console.log("==============================");
demo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])

//==============================

function demo(input) {
    let parking = {}; // пази колите
    for (let element of input) {
        let [command, car] = element.split(", ");
        //console.log(car);
        if (command === "IN") {
            parking[car] = command;
        } else if (command === "OUT") {
            delete parking[car];
        }
    }
    let arrayOfKeys = Object.keys(parking);
    // console.log(arrayOfKeys);  (4) ['CA9999TT', 'CA2844AA', 'CA9876HH', 'CA2822UU']
    let sortedNumbers = arrayOfKeys.sort((a, b) => {
        return a.localeCompare(b);
    });
    if (sortedNumbers.length === 0) {
        // няма коли в паркинга
        console.log("Parking Lot is Empty");
    } else {
        console.log(sortedNumbers.join("\n"));
    }
}