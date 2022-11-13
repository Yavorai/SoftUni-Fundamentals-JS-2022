function demo(input) {
    let together = input[0] + input[1];
    let everyCh = together.split("")
    for (let i = 0; i < everyCh.length; i++) {
        let ch = everyCh[i];
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            together = together.replace(ch, "_")
        } else {
            continue
        }
    }
    let thirdUp = input[2]
    let repeat = thirdUp.repeat(together.length / thirdUp.length).toUpperCase();
    for (let j = 0; j < repeat.length; j++) {
        let ch2 = repeat[j];
        together = together.replace("_", ch2)
    }
    console.log(`Your generated password is ${together.split('').reverse().join('')}`);
}
demo([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ])
    demo([
        'easymoneyeazylife', 'atleasttencharacters', 'absolute'
        ])
    demo([
        'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
        ])

//==========================================


function demo(input) {
    let together = input[0] + input[1];
    let everyCh = together.split("")
    let thirdUp = input[2]
    for (let i = 0; i < everyCh.length; i++) {
        let ch = everyCh[i];
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            together = together.replace(ch, "_")
        }
    }
    let repeat = thirdUp.repeat(together.length / thirdUp.length).toUpperCase();
    for (let j = 0; j < repeat.length; j++) {
        let ch2 = repeat[j];
        together = together.replace("_", ch2)
    }
    console.log(`Your generated password is ${together.split('').reverse().join('')}`);;
}
demo([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ])
    demo([
        'easymoneyeazylife', 'atleasttencharacters', 'absolute'
        ])
    demo([
        'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
        ])
//==============================================


function demo(arr) {
    let str = arr[0] + arr[1];
    let repeat = arr[2].repeat(str.length / arr[2].length).toUpperCase();
    let toReplace = [...repeat];
    let count = 0
    for (let i of str) {
        if (/[aeoui]/ig.test(i)) {
            str = str.replace(i, toReplace[count]);
            count++
        }
    }
    console.log(`Your generated password is ${str.split('').reverse().join('')}`);
}
demo([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ])
    demo([
        'easymoneyeazylife', 'atleasttencharacters', 'absolute'
        ])
    demo([
        'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
        ])