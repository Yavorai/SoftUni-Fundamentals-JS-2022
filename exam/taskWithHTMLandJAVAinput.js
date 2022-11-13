function solve (input){
    let currentStudent;
    let student;
    let courseExam;
    let coursePoint;
    let studentPoint;
    let course = input[input.length-1];
    let cnt = 0;
    let sumPoints = 0;

    input.pop();
    for (let i = 0; i < input.length; i++) {
        //currentStudent = input[i].split(' ').map(t => t.trim()).filter(x => x);
        currentStudent = input[i].split(/\s+/).filter(function(e){return e});
        student = currentStudent[0];
        courseExam = currentStudent[1];
        coursePoint = Number(currentStudent[2]);
        let bonus = parseFloat(currentStudent[3]);

        studentPoint = (coursePoint*0.2)+bonus;
        let grade = (((studentPoint / 80) * 4)+2);

        if(coursePoint<100)
            console.log(`${student} failed at "${courseExam}"`);
        else if(studentPoint>80)
            console.log(`${student}: Exam - "${courseExam}"; Points - ${parseFloat(studentPoint.toFixed(2))}; Grade - 6.00`);
        else
            console.log(`${student}: Exam - "${courseExam}"; Points - ${parseFloat(studentPoint.toFixed(2))}; Grade - ${parseFloat(grade).toFixed(2)}`);
        if (course == courseExam){
            if (coursePoint > 0){
              cnt++;
            sumPoints+=coursePoint;
            }
            else
                sumPoints+=bonus;
        }
    }
    let finsum = parseFloat((sumPoints/cnt).toFixed(2));

        console.log(`"${course}" average points -> ${finsum}`);


}

solve([
    'Bankin    HTML&CSS                0          0',
    'RoYaL        HTML5&CSS        340         10',
    'Bi0GaMe      Java   10    10',
    'Stamat HQC   190 10',
    'MINKA OOP   230 10',
    '   Java    '
])