function demo(input) {

    let wagons = input
        .shift()
        .split(" ")
        .map((x) => Number(x));

    let maxCap = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");

        if (command.length === 2) {
            wagons.push(+command[1]);
        } else if (command.length === 1) {
            let passengersToAdd = Number(command[0])
            let firstIndex = false
            wagons = wagons.map(x => {
                    if (passengersToAdd + x <= maxCap && firstIndex === false) {
                        x += passengersToAdd
                        firstIndex = true
                        return x
                    }
                    return x
                })
                // for(let j = 0; j < wagons.length; j++){
                //     if(passengersToAdd + wagons[j] <= maxCap){
                //         wagons[j] += passengersToAdd
                //         break
                //     }
                // }
        }
    }
    return wagons.join(" ");
}
console.log(demo(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]));
console.log(demo(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']));

/*
function demo(arr) {

    // създаваме масив който да пази състоянието на вагоните

    let wagons = arr.shift().split(" ").map(Number);

    // запазваме капацитета в променлива
    // минаваме през всяка следваща команда и
    // добавяме вагон накрая или  - add

    let capacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {

        let isAdd = arr[i].split(" ").includes("Add");

        if (isAdd) {

            let newWagon = arr[i].split(" ")[1];
            wagons.push(Number(newWagon));

        } else {

            let n = Number(arr[i]);


            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + n <= capacity) {
                    wagons[j] += n;
                    break;
                }
            }
        }
    }
    return wagons.join(" ");
}
*/