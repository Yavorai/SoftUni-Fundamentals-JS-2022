function demo(input) {
    let student = new Map();
    for (let line of input) {
        let tokens = line.split(" ")
        let name = tokens.shift();
        let grades = tokens.map(Number)
            //=====================================
            // if (student.has(name)) {
            //     let existing = student.get(name)
            //     for (let grade of grades) {
            //         existing.push(grade)
            //     }
            // } else {
            //     student.set(name, grades)
            // }
            //===============================
            // или по добра лоика
        if (!student.has(name)) {
            student.set(name, [])
        }
        let existing = student.get(name)
        for (let grade of grades) {
            existing.push(grade)
        }
    }

    let sorted = Array.from(student).sort(compareAverage)

    for (let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(", ")}`);
    }

    function compareAverage([nameA, gradesA], [nameB, gradesB]) {
        // a -> arr ["lilly", [5,4,6]]
        let avgA = 0
        gradesA.forEach(x => avgA += x)
        avgA /= gradesA.length

        let avgB = 0
        gradesB.forEach(x => avgB += x)
        avgB /= gradesB.length

        return avgA - avgB
    }
}
demo(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
])


//=================================
// с Object 

function demo(input) {
    let student = {}
    for (let line of input) {
        let tokens = line.split(" ")
        let name = tokens.shift();
        let grades = tokens.map(Number)
            //=====================================
            // if (student.has(name)) {
            //     let existing = student.get(name)
            //     for (let grade of grades) {
            //         existing.push(grade)
            //     }
            // } else {
            //     student.set(name, grades)
            // }
            //===============================
            // или по добра лоика
        if (!student.hasOwnProperty(name)) {
            student[name] = []
        }

        let existing = student[name]
        for (let grade of grades) {
            existing.push(grade)
        }
    }

    let sorted = Object.entries(student).sort(compareAverage) // това е масив

    for (let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(", ")}`);
    }

    function compareAverage([nameA, gradesA], [nameB, gradesB]) {
        // reduce
        //let avgA = gradesA.reduce((p,c) => p + c, 0) / gradesA.length
        //let avgB = gradesB.reduce((p,c) => p + c, 0) / gradesB.length


        // a -> arr ["lilly", [5,4,6]]
        let avgA = 0
        gradesA.forEach(x => avgA += x)
        avgA /= gradesA.length

        let avgB = 0
        gradesB.forEach(x => avgB += x)
        avgB /= gradesB.length

        return avgA - avgB
    }
}
demo(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
])