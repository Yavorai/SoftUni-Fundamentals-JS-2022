function meetings(input) {
    let meetings = {};
    for (let schedule of input) {
        let splited = schedule.split(" ");
        let weekday = splited[0];
        let name = splited[1];
        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}