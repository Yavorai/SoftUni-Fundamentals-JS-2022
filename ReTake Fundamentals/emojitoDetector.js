function demo(input){
    let text = input[0]
    let numberPattern = /\d/g
    let emojiPattern = /(::|\*\*)[A-Z][a-z]{2,}\1/g
    
    let numbers = text.match(numberPattern)
    numbers = numbers.map(Number)
    
    let coolThreshold = 1
    numbers.forEach(x => coolThreshold *= x)

    let emojis = text.match(emojiPattern)
    
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(emojis.length + "emojis found in the text. The cool ones are:");

    for(let emoji of emojis) {
        let word = emoji.slice(2,-2)
        let coolFactor = 0
        for(let i = 0; i < word.length; i++) {
            coolFactor += word.charCodeAt(i)
        }
        if(coolFactor > coolThreshold) {
            console.log(emoji);
        }
    }
}
demo([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
  ])
//   demo([
//     '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
//   ])

//   demo([
//     "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
//   ])