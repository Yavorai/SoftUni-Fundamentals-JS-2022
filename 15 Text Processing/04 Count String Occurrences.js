// function demo(text,word){
//     let count = 0
//     let index = 0
//     let found = text.indexOf(word)
//     while(found !== -1){
//         count++
//         index = found + 1

//         found = text.indexOf(word, index)
//     }
//     console.log(count);
// }
// demo("This is a word and it also is a sentence",
// "is")



// function demo(text,word){
   
//     console.log(text.split(" ").filter(x => x == word).length);
// }
// demo("This is a word is and it also is a sentence",
// "is")


function demo(text,word){
   
    let words = text.split(" ")
    let counter = 0
    for(let w of words){
        if(w === word){
            counter++
        }
    }
    console.log(counter++);
}
demo("This is a word is and it also is a sentence",
"is")



