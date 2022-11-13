function demo(input){
    // store string
    // for each input line until travel
    // - determine command
    // execute command with given arguments
    let actions = {
        "Add Stop": addStop,
        "Remove Stop": removeStop,
        "Switch": switchStop,
    }
    let result = input.shift()

    while(input[0] != "Travel"){
        let tokens = input.shift().split(":")
        let command = tokens[0]
        let action = actions[command]
        action(tokens[1], tokens[2]) // подаваме параметрите
        console.log(result);
        }

        console.log("Ready for world tour! Planned stops: " + result);

        function addStop(index,string){
            index = Number(index)
            if(validate(index)){
                let left = result.substring(0,index)
                let right = result.substring(index)
                result = left + string + right
            }
        }
        function removeStop(start,end){
            start = Number(start)
            end = Number(end)
            if(validate(start) && validate(end)){
                let left = result.substring(0,start)
                let right = result.substring(end + 1)
                result = left + right
            }
        }
        // function switchStop(oldString,newString){
            
        //     let pattern = new RegExp(oldString, "g")
        //     result = result.replace(pattern, newString)
        // }
        // без регекс
        function switchStop(oldString,newString){
            // check if old string is found
            // store index 
            // take left part from 0 to index
            // take right part from index + oldString.length to end
            // assign to result left + newString + right
            // repeat search starting from (left + newString).length
            let index = result.indexOf(oldString)
            while(index > -1){
                let left = result.substring(0,index)
                let right = result.substring(index + oldString.length)
                result = left + newString + right
                index += newString.length

                index = result.indexOf(oldString, index)

            }
        }


        function validate(index){
            return (index >= 0) && (index < result.length)
        }
}
demo([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
  ])
//   console.log("--------------------------");
// demo([
//     'Albania:Bulgaria:Cyprus:Deuchland',
//     'Add Stop:3:Nigeria',
//     'Remove Stop:4:8',
//     'Switch:Albania: Azərbaycan',
//     'Travel',
//     ''
//   ])