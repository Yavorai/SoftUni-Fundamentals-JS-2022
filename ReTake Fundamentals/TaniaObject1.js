function demo(input) {
    for (let emp of input) {
        let empList = {
            name: emp,
            personalNumber: emp.length
        }
        console.log(`Name: ${empList.name} -- Personal Number: ${empList.personalNumber}`);
        // for (let [name, number] of Object.entries(empList)) {
        //     console.log(`${name} ${number}`);
        // }
    }
}
demo([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])