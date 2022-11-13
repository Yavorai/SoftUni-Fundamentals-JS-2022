// function demo(arr){
//     let result = []
//     let schedule = {}

//     for(let line of arr){
//         let [ day,person] = line.split(" ")
//         if(schedule[day]){
//             console.log(`Conflict on ${day}!`);
//             continue
//         }else{
//             schedule[day] = person
//         }
//         result.push(schedule)
//         console.log(`Scheduled for ${day}`);
//     }

//     let data = Object.entries(schedule)
//     for(let line of data){
//         console.log(`${line[0]} -> ${line[1]}`);
//     }
// }
// demo(['Monday Peter',
// 'Wednesday Bill',
// 'Monday Tim',
// 'Friday Tim'])

function demo(input){
    let calendar = {}
    for(let entry of input){
        entry = entry.split(" ")
        let weekday = entry[0]
        let person = entry[1]

        if(calendar.hasOwnProperty(weekday)){
            console.log(`Conflict on ${weekday}!`);
        }else{
            calendar[weekday] = person
            console.log(`Schedule for ${weekday}`);
        }
    }

    for(let arr in calendar) {
        console.log(`${arr} -> ${calendar[arr]}`);
    }
}
demo(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])