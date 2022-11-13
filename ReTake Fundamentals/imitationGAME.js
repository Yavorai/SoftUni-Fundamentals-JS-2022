function imitationGame(input) {
    let decodeArr = input.shift().split("");
    let comandArr = input.slice();
    let rotate = [];
    for (let currentCode of comandArr) {
        let splitCode = currentCode.split("|");
        let comand = splitCode[0];
        let toReplace = splitCode[1];
        let toPlace = splitCode[2];

        switch (comand) {
            case "Move":
                for (let i = 0; i < toReplace; i++) {
                    let toRemove = decodeArr.shift();

                    decodeArr.push(toRemove);
                }
                break;
            case "Insert":
                if (decodeArr.includes(toPlace) === false) {
                    decodeArr.splice(toReplace, 0, toPlace);
                }
                break;
            case "ChangeAll":
                for (let j = 0; j < decodeArr.length; j++) {
                    if (decodeArr.includes(toReplace)) {
                        decodeArr.shift();
                        decodeArr.splice(1, toReplace, toPlace);
                    }
                }
                break;
        }
    }
    console.log(`The decrypted message is: ${decodeArr.join("")}`);
}
imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
imitationGame([
    "owyouh",
    "Move|2",
    "Move|3",
    "Insert|3|are",
    "Insert|9|?",
    "Decode",
]);