function demo(input){
    let str = input[0]
    let regex = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g
    let matches = str.match(regex) // връща null ако няма матч
    let mirrorWords = []
    if(matches){
        console.log(`${matches.length} word pairs found!`);
        for(let match of matches) {
            let words = match.split(match[0]).filter(x => x!== "")
            let isMirror = words[0] === words[1].split("").reverse().join("")
            if(isMirror) {
                mirrorWords.push(`${words[0]} <=> ${words[1]}`)
            }
        }
        if(mirrorWords.length !== 0){
            console.log("The mirror words are:");
            console.log(mirrorWords.join(", "));
        }
    }else{
        console.log(`No word pairs found!`);
    }
    if(mirrorWords.length === 0){
            console.log("No mirror words!"); 
    }
}
demo([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
  ])
  console.log("-----------------------------------------");
demo([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])
console.log("-----------------------------------------");
demo([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])

//-----------------------------------------

function demo(input){
    let pattern = /([@|#]){1}(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    let mirrorWords = [];
 
    let curMatch = [];
    let pairCounter = 0;
    curMatch = pattern.exec(input);
    while(curMatch){
        pairCounter++;
        let firstWord = curMatch.groups.firstWord;
        let secondWord = curMatch.groups.secondWord;
        let reversedecondWord = secondWord.split("").reverse().join("");
        if(reversedecondWord == firstWord){
            mirrorWords.push(`${firstWord} <=> ${secondWord}`);
        }
        curMatch = pattern.exec(input);
    }
    if(pairCounter == 0){
        console.log('No word pairs found!');
        console.log('No mirror words!');
        return;
    }
    console.log(`${pairCounter} word pairs found!`);
    if(mirrorWords.length == 0){
        console.log('No mirror words!');
        return;
    }
    console.log('The mirror words are:');
    console.log(mirrorWords.join(", "));
}
demo([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
  ])
demo([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])
demo([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])


//----------------------------------------

function demo(input) {
    let text = input.shift();
    let pattern =
        /([#@])(?<first>[A-Za-z]{3,})\1{2}(?<second>[A-Za-z]{3,})\1/g;
    let wordPairsCount = 0;
    let mirrorWords = [];
    let match = pattern.exec(text);
    while (match) {
        wordPairsCount++;
        let firstWord = match.groups.first;
        let secondWord = match.groups.second;
        // или
        //let { firstWord, secondWord } = match.groups
        let reversed = firstWord.split("").reverse().join("");
        if (reversed === secondWord) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`);
        }
        match = pattern.exec(text);
    }
    if (wordPairsCount < 1) {
        console.log("No word pairs found!");
    } else {
        console.log(`${wordPairsCount} word pairs found!`);
    }
    if (mirrorWords.length < 1) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorWords.join(", "));
    }
}
demo([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
  ])
demo([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])
demo([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])

--------------------------------------

function demo(input) {
    let text = input.shift();
    let pattern =
        /([#@])(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    let wordPairsCount = 0;
    let mirrorWords = [];
    let match = pattern.exec(text);
    while (match) {
        wordPairsCount++;
        //let firstWord = match.groups
        //let secondWord = match.groups
        let { firstWord, secondWord } = match.groups;
        let reversedFirstWord = firstWord.split("").reverse().join("");
        if (reversedFirstWord === secondWord) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`);
        }

        match = pattern.exec(text);
    }
    if (wordPairsCount < 1) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${wordPairsCount} word pairs found!`);
    }
    if (mirrorWords.length > 0) {
        console.log(`The mirror words are:`);
        console.log(mirrorWords.join(", "));
    } else {
        console.log("No mirror words!");
    }
}
demo([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
  ])
demo([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])
demo([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])