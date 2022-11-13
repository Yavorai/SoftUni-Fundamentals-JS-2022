function students(input) {
    let softUni = {};
    let caps = {};

    for (const line of input) {
        if (line.includes(":")) {
            const info = line.split(": ");
            const [course, cap] = [info[0], +info[1]];

            if (!softUni.hasOwnProperty(course)) {
                softUni[course] = {};
                caps[course] = cap;
            } else {
                caps[course] += cap;
            }
        } else {
            const info = line.split(" with email ");
            const userInfo = info[0].split("[");
            const user = userInfo[0];
            let credits = userInfo[1].split("");
            credits.pop();
            credits = credits.join("");
            const [email, course] = info[1].split(" joins ");

            if (softUni.hasOwnProperty(course) && caps[course] > 0) {
                softUni[course][user] = { email: email, credits: credits };
                caps[course]--;
            }
        }
    }

    Object.entries(softUni)
        .sort((a, b) => Object.entries(b[1]).length - Object.entries(a[1]).length)
        .forEach((el) => {
            console.log(`${el[0]}: ${caps[el[0]]} places left`);
            Object.entries(softUni[el[0]])
                .sort((a, b) => b[1].credits - a[1].credits)
                .forEach((x) => {
                    console.log(`--- ${x[1].credits}: ${x[0]}, ${x[1].email}`);
                });
        });
}