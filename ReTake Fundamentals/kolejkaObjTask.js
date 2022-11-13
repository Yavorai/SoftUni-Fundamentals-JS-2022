function solve(input) {
    let myStr = String(input.shift());
    for (let line of input) {
        let currentCommand = line.split(" ");
        if (currentCommand[0] === "Abracadabra") {
            break;
        }
        switch (currentCommand[0]) {
            case "Abjuration":
                myStr = myStr.toUpperCase();
                console.log(myStr);
                break;
            case "Necromancy":
                myStr = myStr.toLowerCase();
                console.log(myStr);
                break;
            case "Illusion":
                let currentIndex = myStr.charAt(Number(currentCommand[1]));
                let currentLetter = currentCommand[2];
                if (currentIndex) {
                    myStr = myStr.replace(currentIndex, currentLetter);
                    console.log("Done!");
                } else {
                    console.log("The spell was too weak.");
                }
                break;
            case "Divination":
                if (myStr.includes(currentCommand[1])) {
                    while (myStr.includes(currentCommand[1])) {
                        myStr = myStr.replace(currentCommand[1], currentCommand[2]);

                    }
                    console.log(myStr);
                }
                break;
            case "Alteration":
                if (myStr.includes(currentCommand[1])) {
                    myStr = myStr.replace(currentCommand[1], "");
                    console.log(myStr);
                }
                break;
            case "Abracadabra":
                break;
            default:
                console.log("The spell did not work!");
                break;
        }
    }
}