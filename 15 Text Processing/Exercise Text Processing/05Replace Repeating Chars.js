function demo(text){
    let result = text[0] // започваме от първата буква да сравняваме с останалите
    for(let i = 1; i < text.length; i++){
        if(text[i] != text[i-1]){
            result += text[i]
        }
        }
        console.log(result);
}
demo('aaaaabbbbbcdddeeeedssaa'
)
demo('qqqwerqwecccwd')