function demo(words,text){
    
    // parse target words
    // for each word
    // find * line with matching length and replace it

    text = ` ${text} ` //така модифицираме входа да е презаписан с интервали. накраяв трябва дасе тримнат
    words = words.split(", ")
    for(let word of words){
        let match = ` ${"*".repeat(word.length)}`
        word = ` ${word} `
        text = text.replace(match,word)
    }
    console.log(text.trim());

}
demo('great',
'softuni is ***** place for learning new programming languages'
)
console.log("==============");
demo('great, learning',
'softuni is ***** place for ******** new programming languages')


function solve(a,b) {
    let word = a.split(', ');
    let sentence = b.split(' ');
    for(let el of word){
        for (let i = 0; i < sentence.length; i++) {
              let words = sentence[i];
            if('*'.repeat(el.length) === words){
                sentence[i] = el;
            }
        }
    }
    console.log(sentence.join(' '));
    }

function demo(words,text){
    words = words.split(", ")
    let textArray = text.split(" ")
    let result = []

    for(let token of textArray){
        let replaced = false
        for(let word of words){
            if(token === "*".repeat(word.length)){
                result.push(word)
                replaced = true
            }
        }
        if(replaced == false){
            result.push(token)
        }
    }
    console.log(result.join(" "));
}
demo('great',
'softuni is ***** place for learning new programming languages'
)
console.log("==============");
demo('great, learning',
'softuni is ***** place for ******** new programming languages')