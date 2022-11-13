function solve(input) {
        let actions = {
            "Add": addF,
            "Remove": removeF,
            "Remove At": removeAtF,
            "Add": insertF,
        }

        let arrayOfCards = input.shift().split(", ")
        let n = Number(input.shift())

        for(let i = 0; i < n; i++){
            let tokens = input[i].split(", ")
            let command = tokens[0]
            let paramOne = Number(tokens[1])
            let paramTwo = tokens[2]
            let action = actions[command]
            action(paramOne,paramTwo)
        }

        console.log(arrayOfCards.join(', '))

        function addF(card){
            if(arrayOfCards.includes(card)){
                console.log("Card successfully added")
            }else{
                arrayOfCards.push(card)
                console.log("Card successfully added")
            }
            
        }

        function removeF(){}

        function removeAtF(index){
            if(index >=0 && index < arrayOfCards.length){
                arrayOfCards.splice(index,1)
                console.log("Card successfully removed")
            }else{
                console.log("Index out of range")
            }
        }

        function insertF(){}

}
solve(["Jack of Spades, Ace of Clubs, Jack of Clubs",
"2",
"Insert, -1, Queen of Spades",
"Add, Jack of Clubs",
"Remove At, 1"])