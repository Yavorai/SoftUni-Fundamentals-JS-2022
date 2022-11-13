function solve(input) {
    let friendList = input.shift().split(", ");
    let commands = input.slice(0);
    let blacklistedCount = 0;
    let lostNamesCount = 0;

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(" ");
        let index = 0;
        if (currentCommand.includes("Blacklist")) {
            let nameToBlackList = currentCommand[1];
            if (friendList.includes(nameToBlackList)) {
                console.log(`${nameToBlackList} was blacklisted.`);
                index = friendList.indexOf(nameToBlackList);
                friendList[index] = "Blacklisted";
                blacklistedCount++;
            } else {
                console.log(`${nameToBlackList} was not found.`);
            }
        } else if (currentCommand.includes("Error")) {
            index = Number(currentCommand[1]);
            if (index >= 0 && index < friendList.length) {
                if (
                    friendList[index] !== "Blacklisted" &&
                    friendList[index] !== "Lost"
                ) {
                    console.log(`${friendList[index]} was lost due to an error.`);
                    friendList[index] = "Lost";
                    lostNamesCount++;
                }
            }
        } else if (currentCommand.includes("Change")) {
            index = Number(currentCommand[1]);
            if (index >= 0 && index < friendList.length) {
                let currentName = friendList[index];
                let newName = currentCommand[2];
                console.log(`${currentName} changed his username to ${newName}.`);
                friendList.splice(index, 1, newName);
            }
        } else if (currentCommand.includes("Report")) {
            console.log(`Blacklisted names: ${blacklistedCount}`);
            console.log(`Lost names: ${lostNamesCount}`);
            console.log(friendList.join(" "));
        }
    }
}
solve(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
solve([
    "Mike, John, Eddie, William",

    "Error 3",

    "Error 3",

    "Change 0 Mike123",

    "Report",
]);
solve([
    "Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report",
]);