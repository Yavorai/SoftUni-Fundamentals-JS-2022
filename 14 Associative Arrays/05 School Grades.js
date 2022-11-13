function demo(input){
    let students = new Map()

    for(const line of input){
        let lineArr = line.split(" ")
        let name = lineArr.shift()
        let grades = lineArr.map((x) => Number(x))

        if(students.has(name)){
            let oldGrades = students.get(name)
            let allGrades = oldGrades.concat(grades)
            students.set(name, allGrades)
        }else{
            students.set(name,grades)
        }
    }
    let studentEntries = Array.from(students.entries())
    let sortedStudentGrades = studentEntries.sort((a,b) => {
        let studentNameA = a[0]; // не ни трябват
        let studentGradesA = a[1];
        let studentNameB = b[0];
        let studentGradesB = b[1];
        let avarageA = getAverageGrade(studentGradesA);
        let avarageB = getAverageGrade(studentGradesB);
        return avarageA - avarageB;
    })
    function getAverageGrade(grades) {
        let gradesSum = 0;
        for (const grade of grades) {
            gradesSum += grade;
        }
        return gradesSum / grades.length;
    }
    for (const kvp of sortedStudentGrades) {
        console.log(`${kvp[0]}: ${kvp[1].join(", ")}`);
    }
}
demo(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])


//=================================


function demo(input) {
    let students = new Map();
    for (let line of input) {
        line = line.split(" ")
        let name = line.shift()
        let grades = line.map(Number)
            // if (students.has(name)) {
            //     let oldGrades = students.get(name)
            //     let allGrades = oldGrades.concat(grades)
            //     students.set(name, allGrades)
            // } else {
            //     students.set(name, grades)
            // }
            // или 
        if (!students.has(name)) {
            students.set(name, [])
            students.set(name, students.get(name).concat(grades))
        } else {
            students.set(name, students.get(name).concat(grades))
        }
    }
    let sorted = Array.from(students).sort((a, b) => average(a, b))

    function average(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i]
        }
        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i]
        }
        let aAverage = aSum / a[1].length
        let bAverage = bSum / b[1].length
        return aAverage - bAverage
    }
    for (const kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].join(", ")}`);
    }

}