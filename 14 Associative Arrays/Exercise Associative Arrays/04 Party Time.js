// function demo(arr){
//         let indexOfCommand = arr.indexOf("PARTY")
//         let digits = ["1", "2", "3", "4","5","6","7","8","9","0"]
//         let vip = []
//         let regular = []
//         // добавя до преди Парти
//         for(let i = 0; i < indexOfCommand; i++){
//             let currentInTheList = arr[i]

//             if(digits.includes(currentInTheList[0])){
//                 vip.push(currentInTheList)
//             }else{
//                 regular.push(currentInTheList)
//             }
//         }
//         // маха след Парти
//         for(let i = indexOfCommand; i < arr.length; i++){
//             let currentGuess = arr[i]

//             if(vip.includes(currentGuess)){
//                 vip.splice(vip.indexOf(currentGuess),1)
//             }else if(regular.includes(currentGuess)){
//                 regular.splice(regular.indexOf(currentGuess),1)
//             }
//         }
//         let totalG = vip.length + regular.length
//         console.log(totalG);
//         for(let guest of vip){
//             console.log(guest);
//         }
//         for(let guest of regular){
//             console.log(guest);
//         }
// }
// demo(['7IK9Yo0h',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc',
// 'tSzE5t0p',
// 'PARTY',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc'
// ])
// console.log("-----------------");

// demo(['m8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'xys2FYzn',
// 'MDzcM9ZK',
// 'PARTY',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'm8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ'
// ]
// )

//=========================================

function demo(input){ 
        let listGuests = {
            vip: [],
            regular: [],
        }

        let guest = input.shift()
        while(guest !== "PARTY"){
            let firstChar = guest[0]
            if(isNaN(firstChar)){
                listGuests.regular.push(guest)
            }else{
                listGuests.vip.push(guest)
            }
            guest = input.shift()
        }
        for(let guest of input){
            if(listGuests.vip.includes(guest)){
                let index = listGuests.vip.indexOf(guest)
                listGuests.vip.splice(index,1)
            }else if(listGuests.regular.includes(guest)){
                let index = listGuests.regular.indexOf(guest)
                listGuests.regular.splice(index,1)
            }
        }
        let vipCount = listGuests.vip.length;
    let regularCount = listGuests.regular.length;
    console.log(vipCount + regularCount);
    console.log(listGuests.vip.join("\n"));
    console.log(listGuests.regular.join("\n"));
}
demo(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])
console.log("-----------------");

demo(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
)
