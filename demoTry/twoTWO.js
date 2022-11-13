function demo(text){
    let pattern = /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g
    let match = pattern.exec(text)

    let total = 0
    let result = []

    while(match != null){
        let name = match[2]
        let date = match[3]
        let calories = Number(match[4])

        total += calories
        result.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`)

        match = pattern.exec(text)
            // повторно извикване    
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
  demo([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
  ])

//   ([A-Za-z\s]+)

//   (\d{2}\/\d{2}\/\d{2})

//   (\d+)

//   /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g
//   /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g



function demo(input) {
    // ([A-Za-z\s]+)          име
    // (\d{2}\/\d{2}\/\d{2})   дата
    // (\d+ )                  калории
    // (#|\|)\1   заграждение с бек референс
    //  (#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1

    let total = 0;
    let result = []

    let pattern = /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g
    let match = pattern.exec(input)

    while (match !== null) {
        // index[0] е целия match, index[1] е групата за заграждане и затова почваме от индекси 2,3,4
        let name = match[2]
        let date = match[3]
        let calories = Number(match[4])

        total += calories
        result.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`)

        match = pattern.exec(input)
    }
    let days = Math.floor(total / 2000)
    console.log(`You have food to last you for: ${days} days!`);
    for (let line of result) {
        console.log(line);
    }
}